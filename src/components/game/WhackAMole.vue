<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { useContent } from '../../content/useContent'
import CatIcon from '../icons/CatIcon.vue'
import GameOverlay from './GameOverlay.vue'
import GameStatRow from './GameStatRow.vue'

const { content } = useContent()

const BEST_KEY = 'whack-a-mole-best'
const HOLE_COUNT = 9
const GAME_DURATION = 20

type GameState = 'idle' | 'running' | 'over'

const gameState = ref<GameState>('idle')
const activeHole = ref<number | null>(null)
const score = ref(0)
const best = ref(Number(localStorage.getItem(BEST_KEY)) || 0)
const timeLeft = ref(GAME_DURATION)

let popTimer = 0
let countdownTimer = 0

const stats = computed(() => [
  { label: content.value.common.scoreLabel, value: score.value },
  { label: content.value.common.bestLabel, value: best.value },
  { label: content.value.whack.timeLabel, value: timeLeft.value },
])

function randomHole(exclude: number | null): number {
  let hole = Math.floor(Math.random() * HOLE_COUNT)
  if (hole === exclude) hole = (hole + 1) % HOLE_COUNT
  return hole
}

function scheduleNextPop() {
  const delay = 400 + Math.random() * 500
  popTimer = window.setTimeout(() => {
    if (gameState.value !== 'running') return
    activeHole.value = randomHole(activeHole.value)
    const upFor = Math.max(500, 1100 - score.value * 15)
    popTimer = window.setTimeout(() => {
      if (gameState.value !== 'running') return
      activeHole.value = null
      scheduleNextPop()
    }, upFor)
  }, delay)
}

function whack(index: number) {
  if (gameState.value !== 'running' || index !== activeHole.value) return
  score.value++
  activeHole.value = null
}

function start() {
  clearTimeout(popTimer)
  clearInterval(countdownTimer)
  gameState.value = 'running'
  score.value = 0
  timeLeft.value = GAME_DURATION
  activeHole.value = null
  scheduleNextPop()
  countdownTimer = window.setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) endGame()
  }, 1000)
}

function endGame() {
  gameState.value = 'over'
  clearTimeout(popTimer)
  clearInterval(countdownTimer)
  activeHole.value = null
  if (score.value > best.value) {
    best.value = score.value
    localStorage.setItem(BEST_KEY, String(score.value))
  }
}

function onBoardClick() {
  if (gameState.value !== 'running') start()
}

onBeforeUnmount(() => {
  clearTimeout(popTimer)
  clearInterval(countdownTimer)
})
</script>

<template>
  <div class="whack" @click="onBoardClick">
    <GameStatRow :stats="stats" />

    <div class="board">
      <button
        v-for="i in HOLE_COUNT"
        :key="i"
        class="hole"
        :class="{ up: activeHole === i - 1 }"
        @click="whack(i - 1)"
      >
        <div class="peek">
          <CatIcon :width="30" :height="24" body-fill="#f5ebec" eye-fill="#c15b74" mouth="dot" :mouth-radius="2.4" />
        </div>
      </button>
    </div>

    <GameOverlay
      v-if="gameState !== 'running'"
      :title="gameState === 'over' ? content.whack.gameOverText : undefined"
      :hint="gameState === 'over' ? content.whack.restartHint : content.whack.startHint"
    />
  </div>
</template>

<style scoped>
.whack {
  position: relative; padding: 1.4rem; border-radius: 18px;
  border: 1px solid var(--glass-line); background: rgba(8, 3, 4, 0.5);
  display: flex; align-items: center; justify-content: center; min-height: 260px;
}

.board { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.7rem; }

.hole {
  position: relative; width: 60px; height: 44px; padding: 0; cursor: pointer;
  border: none; border-radius: 10px 10px 4px 4px; background: rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 6px 10px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}

.peek {
  position: absolute; left: 50%; bottom: -6px; transform: translate(-50%, 100%);
  transition: transform 0.15s ease-out;
}
.hole.up .peek { transform: translate(-50%, 0); }
</style>
