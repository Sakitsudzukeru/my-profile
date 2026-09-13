<script setup lang="ts">
import { computed, ref } from 'vue'
import { useContent } from '../../content/useContent'
import CatIcon from '../icons/CatIcon.vue'
import GameOverlay from './GameOverlay.vue'
import GameStatRow from './GameStatRow.vue'

const { content } = useContent()

interface CatVariant {
  bodyFill: string
  eyeShape?: 'circle' | 'line' | 'diamond'
  eyeFill: string
  eyeRadius?: number
  mouth?: 'none' | 'smile' | 'dot'
  mouthWidth?: 'narrow' | 'wide'
  mouthColor?: string
  mouthRadius?: number
  bodyStroke?: string
}

const VARIANTS: CatVariant[] = [
  { bodyFill: '#cba36a', eyeFill: '#150609' },
  { bodyFill: '#d97b93', eyeFill: '#150609', mouth: 'dot' },
  { bodyFill: '#f5ebec', eyeFill: '#c15b74', mouth: 'smile', mouthWidth: 'narrow' },
  { bodyFill: '#f5ebec', eyeFill: '#c15b74', eyeRadius: 2.6, mouth: 'dot', mouthRadius: 2.4 },
  { bodyFill: '#cba36a', eyeShape: 'line', eyeFill: '#150609', mouth: 'smile', mouthWidth: 'wide', mouthColor: '#150609' },
  { bodyFill: '#f5ebec', eyeShape: 'diamond', eyeFill: '#c15b74', mouth: 'smile', mouthWidth: 'wide', mouthColor: '#c15b74' },
  { bodyFill: '#c15b74', eyeFill: '#150609' },
  { bodyFill: '#f5ebec', bodyStroke: '#6d1226', eyeFill: '#6d1226' },
]

interface Card {
  id: number
  variant: number
  state: 'hidden' | 'flipped' | 'matched'
}

function shuffle<T>(items: T[]): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function createDeck(): Card[] {
  const variantIds = VARIANTS.map((_, i) => i)
  const pairs = shuffle([...variantIds, ...variantIds])
  return pairs.map((variant, id) => ({ id, variant, state: 'hidden' }))
}

const cards = ref<Card[]>(createDeck())
const flippedIds = ref<number[]>([])
const moves = ref(0)
const busy = ref(false)

const won = computed(() => cards.value.every((c) => c.state === 'matched'))
const stats = computed(() => [{ label: content.value.memory.movesLabel, value: moves.value }])

function flip(card: Card) {
  if (busy.value || card.state !== 'hidden' || flippedIds.value.length >= 2) return
  card.state = 'flipped'
  flippedIds.value.push(card.id)
  if (flippedIds.value.length < 2) return

  moves.value++
  const [a, b] = flippedIds.value.map((id) => cards.value.find((c) => c.id === id)!)
  if (a.variant === b.variant) {
    a.state = 'matched'
    b.state = 'matched'
    flippedIds.value = []
    return
  }

  busy.value = true
  setTimeout(() => {
    a.state = 'hidden'
    b.state = 'hidden'
    flippedIds.value = []
    busy.value = false
  }, 700)
}

function restart() {
  cards.value = createDeck()
  flippedIds.value = []
  moves.value = 0
  busy.value = false
}
</script>

<template>
  <div class="memory">
    <GameStatRow :stats="stats" />

    <div class="grid" :class="{ blurred: won }">
      <button
        v-for="card in cards"
        :key="card.id"
        class="card"
        :class="{ flipped: card.state !== 'hidden', matched: card.state === 'matched' }"
        :disabled="busy"
        @click="flip(card)"
      >
        <div class="card-inner">
          <div class="card-face card-back">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <ellipse cx="12" cy="16" rx="6" ry="5" />
              <ellipse cx="4.5" cy="9" rx="2.3" ry="3" />
              <ellipse cx="9.5" cy="5.5" rx="2.3" ry="3" />
              <ellipse cx="14.5" cy="5.5" rx="2.3" ry="3" />
              <ellipse cx="19.5" cy="9" rx="2.3" ry="3" />
            </svg>
          </div>
          <div class="card-face card-front">
            <CatIcon
              :width="28"
              :height="22"
              :body-fill="VARIANTS[card.variant].bodyFill"
              :eye-shape="VARIANTS[card.variant].eyeShape"
              :eye-fill="VARIANTS[card.variant].eyeFill"
              :eye-radius="VARIANTS[card.variant].eyeRadius"
              :mouth="VARIANTS[card.variant].mouth"
              :mouth-width="VARIANTS[card.variant].mouthWidth"
              :mouth-color="VARIANTS[card.variant].mouthColor"
              :mouth-radius="VARIANTS[card.variant].mouthRadius"
              :body-stroke="VARIANTS[card.variant].bodyStroke"
            />
          </div>
        </div>
      </button>
    </div>

    <GameOverlay v-if="won" :title="content.memory.winText" :hint="content.memory.playAgainHint" />
    <div v-if="won" class="win-catch" @click="restart"></div>
  </div>
</template>

<style scoped>
.memory {
  position: relative; padding: 1.4rem; border-radius: 18px;
  border: 1px solid var(--glass-line); background: rgba(8, 3, 4, 0.5);
  display: flex; align-items: center; justify-content: center; min-height: 260px;
}

.grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem;
  transition: filter 0.2s;
}
.grid.blurred { filter: blur(2px); }

.card {
  width: 52px; height: 52px; padding: 0; border: none; background: transparent; cursor: pointer;
  perspective: 400px;
}
.card:disabled { cursor: default; }

.card-inner {
  position: relative; width: 100%; height: 100%; transition: transform 0.35s;
  transform-style: preserve-3d;
}
.card.flipped .card-inner { transform: rotateY(180deg); }

.card-face {
  position: absolute; inset: 0; border-radius: 10px; backface-visibility: hidden;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--glass-line);
}
.card-back {
  background: linear-gradient(180deg, var(--rose-glow), var(--rose)); color: rgba(255, 255, 255, 0.85);
}
.card-front {
  background: rgba(255, 255, 255, 0.04); transform: rotateY(180deg);
}
.card.matched .card-front { background: rgba(143, 217, 182, 0.12); border-color: rgba(143, 217, 182, 0.4); }

.win-catch { position: absolute; inset: 0; cursor: pointer; }
</style>
