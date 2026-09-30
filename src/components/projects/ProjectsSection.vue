<script setup lang="ts">
import { ref } from 'vue'
import { useContent } from '../../content/useContent'
import CatIcon from '../icons/CatIcon.vue'
import SocialIcon from '../icons/SocialIcon.vue'
import CodeSample from './CodeSample.vue'
import ProjectResult from './ProjectResult.vue'

const { content } = useContent()
const activeIndex = ref(0)
</script>

<template>
  <section id="work" class="container">
    <div class="cat-scatter spin-l" style="top: 10px; right: 4vw;">
      <CatIcon body-fill="#cba36a" eye-fill="#150609" />
    </div>
    <div class="section-head">
      <div class="title-row">
        <h2>{{ content.projectsSectionTitle }}</h2>
        <CatIcon :width="22" :height="18" body-fill="#d97b93" eye-fill="#150609" />
      </div>
    </div>

    <div class="showcase">
      <div class="showcase-tabs">
        <button
          v-for="(project, i) in content.showcaseProjects"
          :key="project.id"
          class="showcase-tab"
          :class="{ active: i === activeIndex }"
          @click="activeIndex = i"
        >{{ project.tabLabel }}</button>
      </div>

      <div
        v-for="(project, i) in content.showcaseProjects"
        :key="project.id"
        class="showcase-panel"
        :class="{ active: i === activeIndex, 'has-side-panel': !project.code }"
      >
        <div class="showcase-head">
          <span class="status">{{ project.status }}</span>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="stack-row"><span v-for="tech in project.stack" :key="tech">{{ tech }}</span></div>
        </div>

        <a
          v-if="!project.code && project.githubUrl"
          class="github-panel"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon id="github" />
          <p>{{ content.codeOnGithubText }}</p>
          <span class="github-panel-link">GitHub →</span>
        </a>
        <a v-else-if="!project.code" class="github-panel" href="#gallery">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="8.5" cy="9.5" r="1.5" />
            <path d="m4 17 4.5-4.5a2 2 0 0 1 2.8 0L15 16m2-2 1-1a2 2 0 0 1 2.8 0L21 14" />
          </svg>
          <p>{{ content.seeGalleryText }}</p>
        </a>
        <div v-else class="showcase-cols">
          <CodeSample :code="project.code" :github-url="project.githubUrl" />
          <ProjectResult v-if="project.result" :result="project.result" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.showcase {
  border-radius: 24px; padding: 2rem;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.015));
  border: 1px solid var(--glass-line); backdrop-filter: blur(18px);
}
.showcase-tabs { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.8rem; }
.showcase-tab {
  font-family: 'JetBrains Mono', monospace; font-size: 0.78rem;
  padding: 0.55rem 1.1rem; border-radius: 999px; cursor: pointer;
  border: 1px solid var(--glass-line); background: var(--glass-fill); color: var(--ink-soft);
  transition: all 0.2s;
}
.showcase-tab:hover { color: var(--ink); }
.showcase-tab.active {
  background: linear-gradient(180deg, var(--rose-glow), var(--rose));
  color: #fff5f6; border-color: transparent; font-weight: 700;
}
.showcase-panel { display: none; }
.showcase-panel.active { display: block; animation: panel-in 0.35s ease; }
.showcase-panel.has-side-panel.active {
  display: grid; grid-template-columns: 1fr 280px; gap: 2rem; align-items: center;
}
@media (max-width: 760px) {
  .showcase-panel.has-side-panel.active { grid-template-columns: 1fr; }
}
@keyframes panel-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

.showcase-head .status {
  font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--gold);
  border: 1px solid var(--glass-line); padding: 0.25rem 0.65rem; border-radius: 999px;
  display: inline-block; margin-bottom: 0.9rem; background: rgba(203, 163, 106, 0.08);
}
.showcase-head h3 { font-weight: 700; font-size: 1.4rem; margin-bottom: 0.7rem; }
.showcase-head p { color: var(--ink-soft); line-height: 1.6; max-width: 60ch; margin-bottom: 1.1rem; font-size: 0.96rem; }

.stack-row { display: flex; gap: 0.35rem; flex-wrap: wrap; margin-bottom: 1rem; }
.stack-row span { font-family: 'JetBrains Mono', monospace; font-size: 0.64rem; color: var(--ink-dim); border: 1px solid var(--glass-line); padding: 0.16rem 0.5rem; border-radius: 999px; }

.showcase-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.5rem; }
@media (max-width: 860px) { .showcase-cols { grid-template-columns: 1fr; } }

.github-panel {
  height: 100%;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.9rem;
  border-radius: 18px; border: 1px solid var(--glass-line); background: rgba(8, 3, 4, 0.5);
  padding: 1.8rem 1.2rem; text-decoration: none; color: var(--ink-soft); text-align: center;
  transition: border-color 0.2s, color 0.2s;
}
.github-panel:hover { border-color: var(--rose-glow); color: var(--ink); }
.github-panel svg { width: 30px; height: 30px; }
.github-panel p { font-size: 0.9rem; max-width: 28ch; }
.github-panel-link {
  font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; font-weight: 700; color: var(--rose-glow);
}
</style>
