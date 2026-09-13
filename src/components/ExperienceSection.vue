<script setup lang="ts">
import CatIcon from './icons/CatIcon.vue'
import ExperienceTimeline from './ExperienceTimeline.vue'
import AboutPanel from './AboutPanel.vue'
</script>

<template>
  <section id="experience" class="container">
    <div class="cat-scatter spin-r" style="top: 20px; right: 2vw;">
      <CatIcon :width="42" :height="34" body-fill="#cba36a" :body-opacity="0.9" eye-fill="#150609" />
    </div>
    <div class="two-col">
      <ExperienceTimeline />
      <AboutPanel />
    </div>
  </section>
</template>

<style scoped>
.two-col { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 2.5rem; }
@media (max-width: 900px) { .two-col { grid-template-columns: minmax(0, 1fr); } }
</style>
