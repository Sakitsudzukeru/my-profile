<script setup lang="ts">
import { useContent } from '../content/useContent'
import StrawberryCat from './icons/StrawberryCat.vue'
import FactIcon from './icons/FactIcon.vue'
import CatIcon from './icons/CatIcon.vue'

const { content } = useContent()
</script>

<template>
  <div id="about">
    <div class="section-head"><h2>{{ content.aboutSectionTitle }}</h2></div>
    <div class="panel about-row">
      <div class="polaroid">
        <svg viewBox="0 0 100 100">
          <rect width="100" height="100" fill="#2e0813" />

          <!-- shoulders / top -->
          <path d="M27 92 Q25 58 40 53 L60 53 Q75 58 73 92Z" fill="#c15b74" />

          <!-- long hair draping past the shoulders -->
          <path d="M35 24 Q29 28 29 44 Q28 58 31 72 Q32 82 38 87 Q35 68 33 50 Q31 34 37 26Z" fill="#6d1226" />
          <path d="M65 24 Q71 28 71 44 Q72 58 69 72 Q68 82 62 87 Q65 68 67 50 Q69 34 63 26Z" fill="#6d1226" />

          <!-- neck -->
          <rect x="45" y="47" width="10" height="11" rx="3" fill="#f5ebec" />

          <!-- head -->
          <ellipse cx="50" cy="36" rx="16" ry="17" fill="#f5ebec" />

          <!-- blush -->
          <circle cx="40" cy="40" r="2.6" fill="#c15b74" opacity="0.55" />
          <circle cx="60" cy="40" r="2.6" fill="#c15b74" opacity="0.55" />

          <!-- happy closed eyes -->
          <path d="M41 34 Q44 37 47 34" stroke="#6d1226" stroke-width="1.5" fill="none" stroke-linecap="round" />
          <path d="M53 34 Q56 37 59 34" stroke="#6d1226" stroke-width="1.5" fill="none" stroke-linecap="round" />

          <!-- cheerful grin -->
          <path d="M45 43 Q50 47.5 55 43" stroke="#6d1226" stroke-width="1.6" fill="none" stroke-linecap="round" />

          <!-- bangs -->
          <path d="M34 26 Q31 13 50 12 Q69 13 66 26 Q66 18 50 17 Q34 18 34 26Z" fill="#6d1226" />

          <!-- little bow -->
          <path d="M56 13 60 16 57 19Z" fill="#cba36a" />
          <path d="M64 13 60 16 63 19Z" fill="#cba36a" />
          <circle cx="60" cy="16" r="1.2" fill="#8a6a3a" />
        </svg>
      </div>
      <div class="about-body">
        <p class="about-text">{{ content.aboutText }}</p>
        <ul class="fact-list">
          <li v-for="fact in content.aboutFacts" :key="fact.text">
            <FactIcon :name="fact.icon" />
            <span>{{ fact.text }}</span>
          </li>
        </ul>

        <div class="personal-block">
          <StrawberryCat :size="72" />
          <ul class="fact-list">
            <li v-for="fact in content.personalFacts" :key="fact.text">
              <CatIcon v-if="fact.icon === 'cat'" :width="15" :height="12" body-fill="#c15b74" eye-fill="#150609" />
              <FactIcon v-else :name="fact.icon" />
              <span>{{ fact.text }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="panel education-panel">
      <h3 class="edu-heading">{{ content.educationSectionTitle }}</h3>
      <div class="edu-list">
        <div v-for="edu in content.education" :key="edu.institution" class="edu-item">
          <div class="edu-period">{{ edu.period }}</div>
          <div class="edu-main">
            <div class="edu-institution">{{ edu.institution }}</div>
            <div class="edu-degree">{{ edu.degree }}</div>
            <div class="edu-credential">{{ edu.credential }}</div>
            <div class="edu-note">{{ edu.note }}</div>
          </div>
        </div>
      </div>
      <div v-if="content.courses.length" class="edu-courses">
        <div class="courses-label">{{ content.coursesLabel }}</div>
        <div class="course-tags">
          <span v-for="course in content.courses" :key="course" class="course-tag">{{ course }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.panel {
  border-radius: 20px; padding: 1.8rem;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
  border: 1px solid var(--glass-line); backdrop-filter: blur(14px);
}
.about-row { display: flex; gap: 1.4rem; align-items: flex-start; }
.about-body { flex: 1; min-width: 0; }
.polaroid { width: 110px; flex-shrink: 0; background: var(--paper); padding: 8px 8px 20px; border-radius: 4px; transform: rotate(-4deg); box-shadow: 0 14px 30px -14px rgba(0, 0, 0, 0.6); }
.polaroid svg { display: block; width: 100%; }
.about-text { color: var(--ink-soft); font-size: 0.88rem; line-height: 1.6; }
.fact-list { list-style: none; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
.fact-list li { font-size: 0.86rem; color: var(--ink-soft); display: flex; align-items: flex-start; gap: 0.55rem; }
.fact-list li svg { flex-shrink: 0; margin-top: 0.2rem; color: var(--gold); }
.fact-list li span { min-width: 0; }

.personal-block {
  display: flex; align-items: center; gap: 1.1rem; margin-top: 1.3rem; padding-top: 1.3rem;
  border-top: 1px dashed var(--glass-line);
}
.personal-block .fact-list { margin-top: 0; flex: 1; min-width: 0; }

.education-panel { margin-top: 1.2rem; }
.edu-heading {
  font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--gold);
  text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 1.1rem;
}
.edu-list { display: flex; flex-direction: column; gap: 1rem; }
.edu-item { display: flex; gap: 1.1rem; align-items: baseline; }
.edu-period { flex-shrink: 0; width: 9.5em; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--ink-dim); }
.edu-institution { font-weight: 700; font-size: 0.92rem; color: var(--ink); }
.edu-degree { font-size: 0.84rem; color: var(--ink-soft); margin-top: 0.15rem; }
.edu-credential { font-size: 0.78rem; color: var(--gold); margin-top: 0.15rem; }
.edu-note { font-size: 0.78rem; color: var(--ink-dim); margin-top: 0.2rem; }

.edu-courses { margin-top: 1.2rem; padding-top: 1.1rem; border-top: 1px dashed var(--glass-line); }
.courses-label {
  font-family: 'JetBrains Mono', monospace; font-size: 0.68rem; color: var(--gold);
  text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.7rem;
}
.course-tags { display: flex; flex-direction: column; gap: 0.5rem; }
.course-tag {
  font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: var(--ink-soft);
  border: 1px solid var(--glass-line); background: var(--glass-fill);
  padding: 0.3rem 0.7rem; border-radius: 10px;
}

@media (max-width: 640px) {
  .edu-item { flex-direction: column; gap: 0.3rem; }
  .edu-period { width: auto; }
  .about-row { flex-direction: column; }
  .personal-block { flex-direction: column; align-items: flex-start; }
}
</style>
