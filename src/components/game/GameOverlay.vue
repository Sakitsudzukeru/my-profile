<script setup lang="ts">
defineProps<{ title?: string; hint: string }>()
</script>

<template>
  <div class="game-overlay">
    <span v-if="title" class="overlay-title">{{ title }}</span>
    <span class="overlay-hint">{{ hint }}</span>
  </div>
</template>

<style scoped>
.game-overlay {
  position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.4rem;
  background: rgba(8, 3, 4, 0.35);
}
.overlay-title { font-weight: 700; font-size: 1.1rem; color: var(--rose-glow); }
.overlay-hint { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: var(--ink-soft); }
</style>
