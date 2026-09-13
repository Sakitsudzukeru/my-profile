<script setup lang="ts">
import CatIcon from './CatIcon.vue'

interface Props {
  size?: number
}

withDefaults(defineProps<Props>(), { size: 84 })
</script>

<template>
  <div class="strawberry-cat" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg class="berry" viewBox="0 0 100 100" width="100%" height="100%">
      <path d="M50 32 Q46 14 50 12 Q54 14 50 32Z" fill="#7fae82" />
      <path d="M50 32 Q42 18 34 22 Q40 30 50 32Z" fill="#7fae82" />
      <path d="M50 32 Q58 18 66 22 Q60 30 50 32Z" fill="#7fae82" />
      <path d="M50 32 Q38 24 28 30 Q36 36 50 32Z" fill="#8fc192" />
      <path d="M50 32 Q62 24 72 30 Q64 36 50 32Z" fill="#8fc192" />

      <path d="M28 40 Q16 68 50 98 Q84 68 72 40 Q50 26 28 40Z" fill="#c15b74" />

      <g fill="#cba36a" opacity="0.85">
        <ellipse cx="38" cy="50" rx="1.6" ry="2.4" transform="rotate(-15 38 50)" />
        <ellipse cx="50" cy="47" rx="1.6" ry="2.4" />
        <ellipse cx="62" cy="50" rx="1.6" ry="2.4" transform="rotate(15 62 50)" />
        <ellipse cx="32" cy="61" rx="1.6" ry="2.4" transform="rotate(-20 32 61)" />
        <ellipse cx="44" cy="59" rx="1.6" ry="2.4" transform="rotate(-5 44 59)" />
        <ellipse cx="56" cy="59" rx="1.6" ry="2.4" transform="rotate(5 56 59)" />
        <ellipse cx="68" cy="61" rx="1.6" ry="2.4" transform="rotate(20 68 61)" />
        <ellipse cx="38" cy="73" rx="1.6" ry="2.4" transform="rotate(-15 38 73)" />
        <ellipse cx="50" cy="76" rx="1.6" ry="2.4" />
        <ellipse cx="62" cy="73" rx="1.6" ry="2.4" transform="rotate(15 62 73)" />
        <ellipse cx="44" cy="86" rx="1.5" ry="2.2" transform="rotate(-10 44 86)" />
        <ellipse cx="56" cy="86" rx="1.5" ry="2.2" transform="rotate(10 56 86)" />
      </g>
    </svg>

    <div class="cat-on-top">
      <CatIcon :width="size * 0.5" :height="size * 0.39" body-fill="#f5ebec" eye-fill="#c15b74" mouth="smile" mouth-width="narrow" mouth-color="#c15b74" />
    </div>
  </div>
</template>

<style scoped>
.strawberry-cat { position: relative; }
.berry { display: block; }
.cat-on-top { position: absolute; top: 0; left: 50%; transform: translateX(-50%); }
</style>
