<script setup lang="ts">
defineProps<{ stats: { label: string; value: number | string }[] }>()
</script>

<template>
  <div class="stat-row">
    <span v-for="s in stats" :key="s.label">{{ s.label }}: {{ s.value }}</span>
  </div>
</template>

<style scoped>
.stat-row {
  position: absolute; top: 0.8rem; right: 1rem; display: flex; gap: 1rem;
  font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: var(--ink-dim);
}
</style>
