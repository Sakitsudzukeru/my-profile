<script setup lang="ts">
import { useContent } from '../content/useContent'
import CatIcon from './icons/CatIcon.vue'
import StickyNote from './StickyNote.vue'

const { content } = useContent()
</script>

<template>
  <section id="skills" class="container">
    <div class="section-head"><div class="title-row"><h2>{{ content.skillsSectionTitle }}</h2></div></div>
    <div class="stack-section">
      <div class="skill-groups">
        <div v-for="group in content.skillGroups" :key="group.label" class="skill-group">
          <div class="group-label">{{ group.label }}</div>
          <div class="tag-row">
            <span v-for="tile in group.tiles" :key="tile" class="tag">{{ tile }}</span>
          </div>
        </div>
      </div>

      <div class="scene-ball">
        <svg width="18" height="18" viewBox="0 0 22 22">
          <circle cx="11" cy="11" r="9" fill="#cba36a" />
          <path d="M3 8 Q11 13 19 8 M3 14 Q11 9 19 14 M11 2 Q6 11 11 20 M11 2 Q16 11 11 20" stroke="#150609" stroke-width="0.8" fill="none" opacity="0.4" />
        </svg>
      </div>
      <div class="scene-cat calm">
        <CatIcon :width="44" :height="35" body-fill="#f5ebec" eye-fill="#c15b74" mouth="smile" />
      </div>
      <div class="scene-cat surprised">
        <CatIcon :width="44" :height="35" body-fill="#f5ebec" eye-fill="#c15b74" :eye-radius="2.6" mouth="dot" :mouth-radius="2.4" />
      </div>

      <StickyNote rotate="r" style="width: 280px;">{{ content.skillsStickerText }}</StickyNote>
    </div>
  </section>
</template>

<style scoped>
.stack-section { position: relative; width: fit-content; display: flex; gap: 2rem; align-items: flex-start; flex-wrap: wrap; }

.skill-groups { display: flex; flex-direction: column; gap: 1.1rem; flex: 1; max-width: 620px; }
.skill-group { display: flex; flex-direction: column; gap: 0.5rem; }
.group-label {
  font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: var(--gold);
  text-transform: uppercase; letter-spacing: 0.05em;
}
.tag-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.tag {
  font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: var(--ink-soft);
  border: 1px solid var(--glass-line); background: var(--glass-fill); padding: 0.4rem 0.8rem; border-radius: 999px;
}
</style>
