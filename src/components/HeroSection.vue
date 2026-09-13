<script setup lang="ts">
import { useContent } from '../content/useContent'
import CatIcon from './icons/CatIcon.vue'
import StickyNote from './StickyNote.vue'

const { content } = useContent()
</script>

<template>
  <div class="hero container">
    <div>
      <span class="hero-eyebrow">{{ content.hero.eyebrow }}</span>
      <h1><span class="line-white">{{ content.hero.titleWhite }}</span> <span class="line-pink">{{ content.hero.titlePink }}</span></h1>
      <div class="cta-row">
        <a class="btn solid" href="#work">{{ content.hero.ctaPrimary }}</a>
      </div>
    </div>

    <div class="hero-visual">
      <div class="cat-fly" style="top: -36px; right: 46px; animation-duration: 4.5s;">
        <CatIcon
          body-fill="#cba36a"
          eye-shape="line"
          eye-fill="#150609"
          mouth="smile"
          mouth-width="wide"
          mouth-color="#150609"
        />
      </div>

      <div class="terminal">
        <div class="terminal-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="path">about.py</span></div>
        <pre><span class="prompt">&gt;&gt;&gt;</span> <span class="key">print</span>(<span class="val">about_me</span>)
<span class="str">"""</span>
{{ content.hero.subtitle }}
<span class="str">"""</span>
<span class="prompt">&gt;&gt;&gt;</span> <span class="cursor-cat"><CatIcon :width="16" :height="13" body-fill="#d97b93" eye-fill="#150609" :eye-radius="2.4" /></span></pre>
      </div>

      <div class="sticker-1"><StickyNote rotate="l">{{ content.hero.sticker1 }}</StickyNote></div>
      <div class="sticker-2"><StickyNote rotate="r" alt>{{ content.hero.sticker2 }}</StickyNote></div>
      <div class="sticker-3 cat-doodle">
        <CatIcon
          :width="52"
          :height="42"
          body-fill="#f5ebec"
          :body-opacity="0.9"
          eye-fill="#c15b74"
          mouth="smile"
          :mouth-stroke-width="1.3"
          mouth-color="#c15b74"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero { position: relative; z-index: 1; padding: 3.5rem 6vw 2rem; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 2.5rem; align-items: center; min-height: calc(100vh - 68px); }

.hero-eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: var(--gold); margin-bottom: 1rem; display: block; }

.hero h1 { font-weight: 800; font-size: clamp(2rem, 4.4vw, 3.1rem); line-height: 1.08; letter-spacing: -0.01em; text-transform: uppercase; }
.hero h1 .line-pink { color: var(--rose-glow); }

.cta-row { margin-top: 1.5rem; display: flex; gap: 0.8rem; flex-wrap: wrap; }
.btn { position: relative; font-weight: 700; font-size: 0.88rem; padding: 0.8rem 1.4rem; border-radius: 10px; text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem; }
.btn.solid { background: linear-gradient(180deg, var(--rose-glow), var(--rose)); color: #fff5f6; box-shadow: 0 14px 26px -12px rgba(193, 91, 116, 0.5); }

.hero-visual { position: relative; }

.terminal {
  border-radius: 14px; overflow: hidden; border: 1px solid var(--glass-line);
  background: rgba(8, 3, 4, 0.6); backdrop-filter: blur(14px);
  box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.7);
}
.terminal-bar { display: flex; align-items: center; gap: 0.4rem; padding: 0.6rem 1rem; border-bottom: 1px solid var(--glass-line); }
.terminal-bar .dot { width: 9px; height: 9px; border-radius: 50%; background: var(--ink-dim); opacity: 0.5; }
.terminal-bar .path { margin-left: 0.6rem; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--ink-dim); }
.terminal pre { padding: 1.3rem 1.4rem; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; line-height: 1.85; color: var(--ink-soft); white-space: pre-wrap; word-break: break-word; }
.terminal :deep(.prompt) { color: var(--rose-glow); }
.terminal :deep(.key) { color: var(--gold); }
.terminal :deep(.val) { color: var(--ink); }
.terminal :deep(.str) { color: var(--ink-dim); }

.sticker-1 { position: absolute; top: -48px; left: -34px; z-index: 2; }
.sticker-2 { position: absolute; bottom: -20px; right: 30px; z-index: 2; }
.sticker-3 { position: absolute; bottom: 60px; right: -24px; z-index: 2; }

@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; }
  .hero-visual { margin-top: 3rem; }
  .sticker-1 { left: 4px; }
}
</style>
