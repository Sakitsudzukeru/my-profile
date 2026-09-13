<script setup lang="ts">
import { useContent } from '../content/useContent'
import type { Locale } from '../content/types'

const { locale, setLocale } = useContent()

const locales: Locale[] = ['ru', 'en']
</script>

<template>
  <div class="lang-switch">
    <button
      v-for="l in locales"
      :key="l"
      class="lang-btn"
      :class="{ active: locale === l }"
      :aria-pressed="locale === l"
      @click="setLocale(l)"
    >{{ l.toUpperCase() }}</button>
  </div>
</template>

<style scoped>
.lang-switch {
  display: flex; gap: 0.2rem; padding: 0.2rem;
  border: 1px solid var(--glass-line); border-radius: 9px; background: var(--glass-fill);
}
.lang-btn {
  font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; font-weight: 700;
  padding: 0.3rem 0.5rem; border-radius: 6px; border: none; cursor: pointer;
  background: transparent; color: var(--ink-dim);
}
.lang-btn:hover { color: var(--ink); }
.lang-btn.active { background: var(--glass-fill-strong); color: var(--ink); }
</style>
