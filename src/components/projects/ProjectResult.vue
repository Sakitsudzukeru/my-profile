<script setup lang="ts">
import type { ProjectResult } from '../../content/types'
import StickyNote from '../StickyNote.vue'
import CatRunnerGame from '../game/CatRunnerGame.vue'
import MemoryGame from '../game/MemoryGame.vue'
import WhackAMole from '../game/WhackAMole.vue'

defineProps<{ result: ProjectResult }>()

const gameKinds = ['game', 'memory', 'whack']
</script>

<template>
  <div class="result-panel" :class="{ 'result-live': result.kind === 'live', 'result-game': gameKinds.includes(result.kind) }">
    <div v-if="result.kind === 'console'" class="result-console">
      <div
        v-for="(line, i) in result.lines"
        :key="i"
        class="rline"
        :class="{ rwarn: line.tone === 'warn', rok: line.tone === 'ok' }"
      >
        <span v-if="line.symbolAccent" class="rprompt">{{ line.symbol }}</span>
        <template v-else>{{ line.symbol }}</template>
        {{ line.text }}
      </div>
    </div>

    <div v-else-if="result.kind === 'stats'" class="result-stats">
      <div v-for="s in result.stats" :key="s.label" class="rstat">
        <span class="rnum">{{ s.num }}</span>
        <span class="rlabel">{{ s.label }}</span>
      </div>
    </div>

    <div v-else-if="result.kind === 'chat'" class="result-chat">
      <div class="rbubble">{{ result.bubble }}</div>
      <div class="rmeta">{{ result.meta }}</div>
    </div>

    <StickyNote v-else-if="result.kind === 'live'" rotate="r">{{ result.text }}</StickyNote>

    <CatRunnerGame v-else-if="result.kind === 'game'" />
    <MemoryGame v-else-if="result.kind === 'memory'" />
    <WhackAMole v-else-if="result.kind === 'whack'" />
  </div>
</template>

<style scoped>
.result-panel {
  background: rgba(8, 3, 4, 0.5); border-radius: 18px; border: 1px solid var(--glass-line);
  padding: 1.4rem; display: flex; flex-direction: column; justify-content: center; min-height: 100%;
}
.result-panel.result-live { align-items: center; }
.result-panel.result-game { padding: 0; }

.result-console { font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; line-height: 2; }
.rline { color: var(--ink-soft); }
.rline .rprompt { color: var(--rose-glow); margin-right: 0.4rem; }
.rline.rwarn { color: var(--gold); }
.rline.rok { color: #8fd9b6; }

.result-stats { display: flex; flex-direction: column; gap: 1.1rem; }
.rstat { display: flex; flex-direction: column; }
.rnum { font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 1.3rem; color: var(--ink); }
.rlabel { font-size: 0.78rem; color: var(--ink-dim); }

.result-chat .rbubble {
  background: var(--paper); color: var(--void); padding: 0.9rem 1.1rem; border-radius: 14px 14px 14px 4px;
  font-size: 0.92rem; line-height: 1.5; margin-bottom: 0.8rem;
}
.result-chat .rmeta { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--ink-dim); }
</style>
