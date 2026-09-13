<script setup lang="ts">
const HEAD_PATH =
  'M14 30 Q10 10 22 8 L20 2 L28 8 Q32 6 36 8 L44 2 L42 8 Q54 10 50 30 Q50 40 32 40 Q14 40 14 30Z'
const TAIL_PATH = 'M50 28 Q62 20 60 34 Q56 38 48 34Z'
const SMILE_NARROW = 'M30 29 Q32 31 34 29'
const SMILE_WIDE = 'M28 30 Q32 33 36 30'
const EYE_LINE_LEFT = 'M20 24 Q24 26 28 24'
const EYE_LINE_RIGHT = 'M36 24 Q40 26 44 24'
const EYE_DIAMOND_LEFT = 'M24 20 L25.5 23 L28 24 L25.5 25 L24 28 L22.5 25 L20 24 L22.5 23Z'
const EYE_DIAMOND_RIGHT = 'M40 20 L41.5 23 L44 24 L41.5 25 L40 28 L38.5 25 L36 24 L38.5 23Z'

interface Props {
  width?: number
  height?: number
  bodyFill: string
  bodyOpacity?: number
  bodyStroke?: string
  bodyStrokeWidth?: number
  eyeShape?: 'circle' | 'line' | 'diamond' | 'none'
  eyeFill?: string
  eyeRadius?: number
  eyeCy?: number
  mouth?: 'none' | 'smile' | 'dot'
  mouthColor?: string
  mouthWidth?: 'narrow' | 'wide'
  mouthStrokeWidth?: number
  mouthCy?: number
  mouthRadius?: number
}

const props = withDefaults(defineProps<Props>(), {
  width: 30,
  height: 24,
  bodyOpacity: 1,
  eyeShape: 'circle',
  eyeFill: '#150609',
  eyeRadius: 2.2,
  eyeCy: 24,
  mouth: 'none',
  mouthWidth: 'narrow',
  mouthStrokeWidth: 1.2,
  mouthCy: 31,
  mouthRadius: 2.2,
})

const smilePath = props.mouthWidth === 'wide' ? SMILE_WIDE : SMILE_NARROW
const mouthColor = props.mouthColor ?? props.eyeFill
</script>

<template>
  <svg :width="width" :height="height" viewBox="0 0 64 50">
    <g :opacity="bodyOpacity">
      <path :d="HEAD_PATH" :fill="bodyFill" :stroke="bodyStroke" :stroke-width="bodyStroke ? bodyStrokeWidth ?? 1 : undefined" />

      <template v-if="eyeShape === 'circle'">
        <circle :cx="24" :cy="eyeCy" :r="eyeRadius" :fill="eyeFill" />
        <circle :cx="40" :cy="eyeCy" :r="eyeRadius" :fill="eyeFill" />
      </template>
      <template v-else-if="eyeShape === 'line'">
        <path :d="EYE_LINE_LEFT" :stroke="eyeFill" stroke-width="1.4" fill="none" stroke-linecap="round" />
        <path :d="EYE_LINE_RIGHT" :stroke="eyeFill" stroke-width="1.4" fill="none" stroke-linecap="round" />
      </template>
      <template v-else-if="eyeShape === 'diamond'">
        <path :d="EYE_DIAMOND_LEFT" :fill="eyeFill" />
        <path :d="EYE_DIAMOND_RIGHT" :fill="eyeFill" />
      </template>

      <path v-if="mouth === 'smile'" :d="smilePath" :stroke="mouthColor" :stroke-width="mouthStrokeWidth" fill="none" stroke-linecap="round" />
      <circle v-else-if="mouth === 'dot'" :cx="32" :cy="mouthCy" :r="mouthRadius" :fill="mouthColor" />

      <path :d="TAIL_PATH" :fill="bodyFill" />
    </g>
  </svg>
</template>
