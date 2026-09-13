<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useContent } from '../../content/useContent'
import GameOverlay from './GameOverlay.vue'
import GameStatRow from './GameStatRow.vue'

const { content } = useContent()

const BEST_KEY = 'cat-runner-best'

const GROUND_MARGIN = 30
const GRAVITY = 2200
const JUMP_VELOCITY = -760
const CAT_WIDTH = 44
const CAT_HEIGHT = 38
const CAT_X = 46
const BASE_SPEED = 260
const MAX_SPEED = 620
const SPEED_RAMP_PER_SECOND = 10
const HITBOX_INSET = 7
const PHYSICS_STEP = 1 / 60

type GameState = 'idle' | 'running' | 'over'

interface Obstacle {
  x: number
  prevX: number
  width: number
  height: number
}

const wrapperEl = ref<HTMLDivElement | null>(null)
const canvasEl = ref<HTMLCanvasElement | null>(null)

const gameState = ref<GameState>('idle')
const score = ref(0)
const best = ref(Number(localStorage.getItem(BEST_KEY)) || 0)

let ctx: CanvasRenderingContext2D | null = null
let cssWidth = 600
let cssHeight = 200
let dpr = 1

let catImage: HTMLImageElement
let ballImage: HTMLImageElement
let imagesReady = false

let catY = 0
let catVelocity = 0
let distance = 0
let runTime = 0
let speed = BASE_SPEED
let nextSpawnAt = 0
let obstacles: Obstacle[] = []
let rafId = 0
let lastTime = 0
let resizeObserver: ResizeObserver | null = null

const CAT_HEAD_PATH = 'M14 30 Q10 10 22 8 L20 2 L28 8 Q32 6 36 8 L44 2 L42 8 Q54 10 50 30 Q50 40 32 40 Q14 40 14 30Z'
const CAT_TAIL_PATH = 'M50 28 Q62 20 60 34 Q56 38 48 34Z'

function loadSvgImage(svg: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
  })
}

async function loadSprites() {
  const catSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="50" viewBox="0 0 64 50">
    <path d="${CAT_HEAD_PATH}" fill="#f5ebec"/>
    <circle cx="24" cy="24" r="2.4" fill="#150609"/>
    <circle cx="40" cy="24" r="2.4" fill="#150609"/>
    <path d="${CAT_TAIL_PATH}" fill="#f5ebec"/>
  </svg>`
  const ballSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
    <circle cx="11" cy="11" r="9" fill="#cba36a"/>
    <path d="M3 8 Q11 13 19 8 M3 14 Q11 9 19 14 M11 2 Q6 11 11 20 M11 2 Q16 11 11 20" stroke="#150609" stroke-width="0.8" fill="none" opacity="0.4"/>
  </svg>`
  const [cat, ball] = await Promise.all([loadSvgImage(catSvg), loadSvgImage(ballSvg)])
  catImage = cat
  ballImage = ball
  imagesReady = true
}

function groundY() {
  return cssHeight - GROUND_MARGIN
}

function resetRun() {
  catY = groundY() - CAT_HEIGHT
  catVelocity = 0
  distance = 0
  runTime = 0
  speed = BASE_SPEED
  nextSpawnAt = 400
  obstacles = []
  score.value = 0
}

function randomGap() {
  const minGap = speed * 0.9
  const maxGap = speed * 1.6
  return minGap + Math.random() * (maxGap - minGap)
}

function startRun() {
  resetRun()
  gameState.value = 'running'
  lastTime = performance.now()
  rafId = requestAnimationFrame(loop)
}

function jump() {
  if (gameState.value === 'idle' || gameState.value === 'over') {
    startRun()
    return
  }
  const onGround = catY >= groundY() - CAT_HEIGHT - 0.5
  if (onGround) catVelocity = JUMP_VELOCITY
}

function endRun() {
  gameState.value = 'over'
  cancelAnimationFrame(rafId)
  if (score.value > best.value) {
    best.value = score.value
    localStorage.setItem(BEST_KEY, String(score.value))
  }
}

function updatePhysics(dt: number) {
  catVelocity += GRAVITY * dt
  catY += catVelocity * dt
  const floor = groundY() - CAT_HEIGHT
  if (catY > floor) {
    catY = floor
    catVelocity = 0
  }

  runTime += dt
  speed = Math.min(MAX_SPEED, BASE_SPEED + runTime * SPEED_RAMP_PER_SECOND)
  distance += speed * dt
  const flooredScore = Math.floor(distance * 0.1)
  if (flooredScore !== score.value) score.value = flooredScore

  for (const obstacle of obstacles) {
    obstacle.prevX = obstacle.x
    obstacle.x -= speed * dt
  }
  obstacles = obstacles.filter((o) => o.x + o.width > -10)

  if (distance >= nextSpawnAt) {
    const size = 18 + Math.random() * 8
    obstacles.push({ x: cssWidth + size, prevX: cssWidth + size, width: size, height: size })
    nextSpawnAt = distance + randomGap()
  }

  const catRect = {
    x: CAT_X + HITBOX_INSET,
    y: catY + HITBOX_INSET,
    w: CAT_WIDTH - HITBOX_INSET * 2,
    h: CAT_HEIGHT - HITBOX_INSET * 2,
  }
  for (const obstacle of obstacles) {
    // swept on X so a fast-moving obstacle can't skip past the cat between frames
    const sweptLeft = obstacle.x + 3
    const sweptRight = obstacle.prevX + obstacle.width - 3
    const obsRect = {
      x: sweptLeft,
      y: groundY() - obstacle.height + 3,
      w: sweptRight - sweptLeft,
      h: obstacle.height - 6,
    }
    const overlap =
      catRect.x < obsRect.x + obsRect.w &&
      catRect.x + catRect.w > obsRect.x &&
      catRect.y < obsRect.y + obsRect.h &&
      catRect.y + catRect.h > obsRect.y
    if (overlap) {
      endRun()
      return
    }
  }
}

function draw() {
  if (!ctx) return
  ctx.clearRect(0, 0, cssWidth, cssHeight)

  ctx.strokeStyle = 'rgba(193, 91, 116, 0.35)'
  ctx.lineWidth = 2
  ctx.setLineDash([8, 10])
  ctx.lineDashOffset = -distance
  ctx.beginPath()
  ctx.moveTo(0, groundY() + 1)
  ctx.lineTo(cssWidth, groundY() + 1)
  ctx.stroke()
  ctx.setLineDash([])

  if (imagesReady) {
    const squash = catVelocity < -200 ? 1.08 : catVelocity > 200 ? 0.92 : 1
    ctx.save()
    const cx = CAT_X + CAT_WIDTH / 2
    const cy = catY + CAT_HEIGHT
    ctx.translate(cx, cy)
    ctx.scale(-1, squash)
    ctx.translate(-cx, -cy)
    ctx.drawImage(catImage, CAT_X, catY, CAT_WIDTH, CAT_HEIGHT)
    ctx.restore()

    for (const obstacle of obstacles) {
      const ocx = obstacle.x + obstacle.width / 2
      const ocy = groundY() - obstacle.height / 2
      ctx.save()
      ctx.translate(ocx, ocy)
      ctx.rotate((distance % 360) * (Math.PI / 45))
      ctx.drawImage(ballImage, -obstacle.width / 2, -obstacle.height / 2, obstacle.width, obstacle.height)
      ctx.restore()
    }
  }
}

function loop(now: number) {
  let remaining = Math.min((now - lastTime) / 1000, 0.25)
  lastTime = now
  if (gameState.value !== 'running') return
  while (remaining > 0 && gameState.value === 'running') {
    const step = Math.min(remaining, PHYSICS_STEP)
    updatePhysics(step)
    remaining -= step
  }
  if (gameState.value === 'running') {
    draw()
    rafId = requestAnimationFrame(loop)
  }
}

function resizeCanvas() {
  const canvas = canvasEl.value
  const wrapper = wrapperEl.value
  if (!canvas || !wrapper) return
  cssWidth = wrapper.clientWidth
  cssHeight = 200
  dpr = window.devicePixelRatio || 1
  canvas.width = cssWidth * dpr
  canvas.height = cssHeight * dpr
  canvas.style.width = `${cssWidth}px`
  canvas.style.height = `${cssHeight}px`
  ctx = canvas.getContext('2d')
  ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
  catY = groundY() - CAT_HEIGHT
  draw()
}

function onKeydown(e: KeyboardEvent) {
  if (e.code === 'Space' || e.code === 'ArrowUp') {
    e.preventDefault()
    jump()
  }
}

function onPointerDown() {
  wrapperEl.value?.focus()
  jump()
}

onMounted(async () => {
  resizeCanvas()
  resizeObserver = new ResizeObserver(() => resizeCanvas())
  if (wrapperEl.value) resizeObserver.observe(wrapperEl.value)
  await loadSprites()
  draw()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  resizeObserver?.disconnect()
})

const stats = computed(() => [
  { label: content.value.common.scoreLabel, value: score.value },
  { label: content.value.common.bestLabel, value: best.value },
])
</script>

<template>
  <div ref="wrapperEl" class="runner" tabindex="0" @keydown="onKeydown" @pointerdown="onPointerDown">
    <canvas ref="canvasEl"></canvas>

    <GameStatRow :stats="stats" />

    <GameOverlay
      v-if="gameState !== 'running'"
      :title="gameState === 'over' ? content.runner.gameOverText : undefined"
      :hint="gameState === 'over' ? content.runner.restartHint : content.runner.startHint"
    />
  </div>
</template>

<style scoped>
.runner {
  position: relative; outline: none; cursor: pointer; user-select: none;
  border-radius: 18px; overflow: hidden; border: 1px solid var(--glass-line);
  background: rgba(8, 3, 4, 0.5);
}
.runner canvas { display: block; width: 100%; }
</style>
