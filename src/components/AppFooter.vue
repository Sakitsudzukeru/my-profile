<script setup lang="ts">
import { useContent } from '../content/useContent'
import CatIcon from './icons/CatIcon.vue'
import StickyNote from './StickyNote.vue'
import SocialIcon from './icons/SocialIcon.vue'
import FactIcon from './icons/FactIcon.vue'

const { content } = useContent()
</script>

<template>
  <footer id="contact">
    <div class="cat-fly" style="top: -30px; right: 20px; animation-duration: 4s;">
      <CatIcon :width="28" :height="22" body-fill="#d97b93" eye-fill="#150609" mouth="dot" :mouth-radius="2.3" />
    </div>
    <div class="cat-scatter spin-l" style="top: -18px; left: -10px;">
      <CatIcon :width="56" :height="44" body-fill="#c15b74" eye-fill="#150609" />
    </div>
    <div class="cat-scatter spin-r" style="bottom: -8px; right: 8vw;">
      <CatIcon body-fill="#f5ebec" eye-fill="#c15b74" />
    </div>

    <div>
      <div class="big">{{ content.footer.headingBefore }}<br>{{ content.footer.headingAfter }}<span>{{ content.footer.headingHighlight }}</span></div>
      <div class="meta">
        <span><SocialIcon id="email" /> {{ content.footer.email }}</span>
        <span><FactIcon name="pin" /> {{ content.footer.location }}</span>
      </div>
    </div>

    <StickyNote rotate="l">{{ content.footer.stickyLine1 }}<br>{{ content.footer.stickyLine2 }}</StickyNote>
  </footer>

  <div class="footer-bottom">{{ content.footerBottom }}</div>

  <div class="cat-zerog">
    <CatIcon :width="38" :height="30" body-fill="#f5ebec" eye-fill="#150609" :eye-cy="21" mouth="dot" :mouth-cy="28" :mouth-radius="2" />
  </div>
</template>

<style scoped>
footer {
  position: relative; z-index: 1; margin: 0 auto 2rem; max-width: 1360px; width: calc(100% - 12vw); padding: 2.6rem 6vw; border-radius: 24px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.015));
  border: 1px solid var(--glass-line); backdrop-filter: blur(18px);
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem;
}
.big { font-weight: 800; font-size: 1.5rem; text-transform: uppercase; }
.big span { color: var(--rose-glow); }
.meta { margin-top: 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: var(--ink-soft); display: flex; flex-direction: column; gap: 0.3rem; }
.meta span { display: inline-flex; align-items: center; gap: 0.4rem; }
.meta svg { color: var(--rose-glow); }
.footer-bottom { text-align: center; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: var(--ink-dim); padding-bottom: 2rem; }
</style>
