<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useContent } from '../content/useContent'
import SocialIcon from './icons/SocialIcon.vue'
import LangSwitch from './LangSwitch.vue'
import { downloadResumePdf } from '../resume/generateResumePdf'

const { content, locale } = useContent()

const activeHref = ref('')
let observer: IntersectionObserver | null = null

onMounted(() => {
  const ratios = new Map<string, number>()

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
      let bestId = ''
      let bestRatio = 0
      for (const [id, ratio] of ratios) {
        if (ratio > bestRatio) {
          bestRatio = ratio
          bestId = id
        }
      }
      if (bestId) activeHref.value = `#${bestId}`
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  )

  for (const link of content.value.navLinks) {
    const el = document.getElementById(link.href.slice(1))
    if (el) observer.observe(el)
  }
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <nav class="container">
    <div class="brand">
      <LangSwitch />
      <div class="logo">{{ content.logo.base }}<span>{{ content.logo.accent }}</span></div>
    </div>
    <div class="links">
      <a
        v-for="link in content.navLinks"
        :key="link.href"
        :href="link.href"
        :class="{ active: link.href === activeHref }"
      >{{ link.label }}</a>
    </div>
    <div class="nav-right">
      <a v-for="social in content.socialLinks" :key="social.id" class="icon-btn" :href="social.href" :title="social.title">
        <SocialIcon :id="social.id" />
      </a>
      <a class="cv-btn" href="#" @click.prevent="downloadResumePdf(locale)">{{ content.cvButtonLabel }}</a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: sticky; top: 0; z-index: 50;
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.1rem 6vw;
  background: rgba(11, 3, 4, 0.65);
  backdrop-filter: blur(18px) saturate(150%); -webkit-backdrop-filter: blur(18px) saturate(150%);
  border-bottom: 1px solid var(--glass-line);
  gap: 1rem; flex-wrap: wrap;
}
.brand { display: flex; align-items: center; gap: 0.9rem; }
.logo { font-weight: 800; font-size: 1.15rem; letter-spacing: -0.01em; display: flex; align-items: center; gap: 0.4rem; }
.logo span { color: var(--rose-glow); font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; }
.links { display: flex; gap: 1.4rem; font-family: 'JetBrains Mono', monospace; font-size: 0.76rem; color: var(--ink-soft); }
.links a { position: relative; color: var(--ink-soft); text-decoration: none; padding-bottom: 0.3rem; }
.links a:hover { color: var(--ink); }
.links a.active { color: var(--rose-glow); font-weight: 700; }
.links a.active::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 2px;
  background: linear-gradient(90deg, var(--rose-glow), var(--rose));
  border-radius: 999px;
}
.nav-right { display: flex; align-items: center; gap: 0.6rem; }
.icon-btn {
  width: 34px; height: 34px; border-radius: 9px; display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--glass-line); background: var(--glass-fill); color: var(--ink-soft); text-decoration: none;
}
.icon-btn:hover { color: var(--ink); background: var(--glass-fill-strong); }
.cv-btn {
  font-family: 'JetBrains Mono', monospace; font-size: 0.74rem; font-weight: 700;
  background: linear-gradient(180deg, var(--rose-glow), var(--rose)); color: #fff5f6;
  padding: 0.5rem 0.9rem; border-radius: 8px; text-decoration: none; display: flex; align-items: center; gap: 0.35rem;
}

@media (max-width: 640px) { .links { display: none; } }
</style>
