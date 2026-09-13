<script setup lang="ts">
import { useContent } from '../content/useContent'
import CatIcon from './icons/CatIcon.vue'

const { content } = useContent()
</script>

<template>
  <div>
    <div class="section-head">
      <h2>
        {{ content.experienceSectionTitle }}
        <span class="cat-fly heading-cat">
          <CatIcon
            :width="34"
            :height="27"
            body-fill="#f5ebec"
            eye-shape="diamond"
            eye-fill="#c15b74"
            mouth="smile"
            mouth-width="wide"
            mouth-color="#c15b74"
          />
        </span>
      </h2>
    </div>
    <div class="timeline">
      <div v-for="item in content.timeline" :key="item.title" class="timeline-item">
        <div class="when">{{ item.when }}</div>
        <h4>{{ item.title }}</h4>
        <div class="co">{{ item.company }}</div>
        <p>{{ item.description }}</p>
        <div v-if="item.highlights.length" class="highlights">
          <div v-for="highlight in item.highlights" :key="highlight.label" class="highlight">
            <div class="highlight-label">{{ highlight.label }}</div>
            <ul>
              <li v-for="bullet in highlight.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading-cat { position: relative; top: 0; display: inline-block; vertical-align: middle; animation-duration: 4.2s; }

.timeline { position: relative; padding-left: 1.6rem; }
.timeline::before { content: ""; position: absolute; left: 5px; top: 6px; bottom: 6px; width: 1px; background: var(--glass-line); }
.timeline-item { position: relative; padding-bottom: 1.8rem; }
.timeline-item::before { content: ""; position: absolute; left: -1.6rem; top: 4px; width: 9px; height: 9px; border-radius: 50%; background: var(--rose-glow); box-shadow: 0 0 0 4px rgba(193, 91, 116, 0.15); }
.timeline-item .when { font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: var(--gold); }
.timeline-item h4 { font-weight: 700; font-size: 1rem; margin: 0.3rem 0 0.15rem; }
.timeline-item .co { font-size: 0.82rem; color: var(--ink-dim); margin-bottom: 0.4rem; }
.timeline-item p { font-size: 0.85rem; color: var(--ink-soft); line-height: 1.55; }

.highlights {
  margin-top: 1rem; padding-left: 1rem; border-left: 1px solid var(--glass-line);
  display: flex; flex-direction: column; gap: 0.8rem;
}
.highlight-label { font-size: 0.8rem; font-weight: 700; color: var(--ink); margin-bottom: 0.3rem; }
.highlight ul { margin: 0; padding-left: 1.1rem; display: flex; flex-direction: column; gap: 0.3rem; }
.highlight li { font-size: 0.8rem; color: var(--ink-soft); line-height: 1.5; }
</style>
