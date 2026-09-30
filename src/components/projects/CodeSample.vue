<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ProjectCode } from '../../content/types'
import SocialIcon from '../icons/SocialIcon.vue'

const props = defineProps<{ code: ProjectCode; githubUrl?: string }>()

const activeLangIndex = ref(0)

const activeHtml = computed(() => {
  if (props.code.kind === 'single') return props.code.html
  return props.code.tabs[activeLangIndex.value].html
})
</script>

<template>
  <div class="code-panel">
    <div class="code-topbar">
      <span class="dot"></span><span class="dot"></span><span class="dot"></span>
      <span v-if="code.kind === 'single'" class="filename">{{ code.filename }}</span>
      <div v-else class="lang-tabs">
        <button
          v-for="(tab, i) in code.tabs"
          :key="tab.label"
          class="lang-tab"
          :class="{ active: i === activeLangIndex }"
          @click="activeLangIndex = i"
        >{{ tab.label }}</button>
      </div>
      <a v-if="githubUrl" class="github-btn" :href="githubUrl" target="_blank" rel="noopener noreferrer" title="GitHub">
        <SocialIcon id="github" /> GitHub
      </a>
    </div>
    <pre v-html="activeHtml"></pre>
  </div>
</template>

<style scoped>
.code-panel {
  background: rgba(8, 3, 4, 0.5); border-radius: 18px; overflow: hidden;
  border: 1px solid var(--glass-line); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
.code-topbar { display: flex; align-items: center; gap: 0.4rem; padding: 0.6rem 1rem; border-bottom: 1px solid var(--glass-line); }
.code-topbar .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--ink-dim); opacity: 0.5; }
.code-topbar .filename { margin-left: 0.5rem; font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: var(--ink-dim); }
.code-panel pre {
  padding: 1.1rem 1.2rem; overflow-x: auto; overflow-y: auto; max-height: 420px;
  font-family: 'JetBrains Mono', monospace; font-size: 0.73rem; line-height: 1.65; color: var(--ink); margin: 0;
}
.code-panel pre :deep(.kw) { color: var(--garnet-glow); }
.code-panel pre :deep(.fn) { color: var(--gold); }
.code-panel pre :deep(.str) { color: #d9b98f; }
.code-panel pre :deep(.cm) { color: var(--ink-dim); font-style: italic; }
.code-panel pre :deep(.num) { color: var(--ink-soft); }

.lang-tabs { display: flex; gap: 0.3rem; }
.lang-tab {
  font-family: 'JetBrains Mono', monospace; font-size: 0.66rem; font-weight: 700;
  padding: 0.2rem 0.55rem; border-radius: 999px; cursor: pointer;
  border: 1px solid var(--glass-line); background: transparent; color: var(--ink-dim);
}
.lang-tab.active { background: var(--glass-fill-strong); color: var(--ink); }

.github-btn {
  margin-left: auto; display: inline-flex; align-items: center; gap: 0.35rem; flex-shrink: 0;
  font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; font-weight: 700;
  padding: 0.3rem 0.65rem; border-radius: 999px; text-decoration: none;
  border: 1px solid var(--glass-line); background: var(--glass-fill); color: var(--ink-soft);
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.github-btn:hover { color: var(--ink); border-color: var(--rose-glow); background: var(--glass-fill-strong); }
</style>
