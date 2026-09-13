<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { useContent } from '../content/useContent'

const { content } = useContent()

const lightboxIndex = ref<number | null>(null)

function open(i: number) {
  lightboxIndex.value = i
}
function close() {
  lightboxIndex.value = null
}
function next() {
  if (lightboxIndex.value === null) return
  lightboxIndex.value = (lightboxIndex.value + 1) % content.value.gallery.items.length
}
function prev() {
  if (lightboxIndex.value === null) return
  const len = content.value.gallery.items.length
  lightboxIndex.value = (lightboxIndex.value - 1 + len) % len
}

function onKeydown(e: KeyboardEvent) {
  if (lightboxIndex.value === null) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

watch(lightboxIndex, (val) => {
  if (val !== null) {
    window.addEventListener('keydown', onKeydown)
    document.body.style.overflow = 'hidden'
  } else {
    window.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = ''
  }
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section id="gallery" class="container">
    <div class="section-head"><div class="title-row"><h2>{{ content.gallery.sectionTitle }}</h2></div></div>
    <p class="subtitle">{{ content.gallery.subtitle }}</p>

    <div class="masonry">
      <button v-for="(item, i) in content.gallery.items" :key="item.image" class="gallery-card" @click="open(i)">
        <img :src="item.image" :alt="item.caption" loading="lazy" />
        <p class="gallery-caption">{{ item.caption }}</p>
      </button>
    </div>

    <Teleport to="body">
      <div v-if="lightboxIndex !== null" class="lightbox" @click.self="close">
        <button class="lightbox-close" aria-label="close" @click="close">&times;</button>
        <button class="lightbox-nav prev" aria-label="previous" @click="prev">&#8592;</button>
        <figure class="lightbox-figure">
          <img :src="content.gallery.items[lightboxIndex].image" :alt="content.gallery.items[lightboxIndex].caption" />
          <figcaption>{{ content.gallery.items[lightboxIndex].caption }}</figcaption>
        </figure>
        <button class="lightbox-nav next" aria-label="next" @click="next">&#8594;</button>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.subtitle { color: var(--ink-soft); font-size: 0.9rem; max-width: 60ch; margin-bottom: 1.6rem; margin-top: -1rem; }

.masonry {
  display: flex; flex-wrap: nowrap; align-items: flex-start; gap: 1.1rem;
  overflow-x: auto; overflow-y: hidden; padding: 0.3rem 0.3rem 1rem;
  scroll-snap-type: x proximity;
}

.gallery-card {
  flex: 0 0 auto; display: inline-flex; flex-direction: column; align-items: center; gap: 0.7rem;
  border-radius: 16px; border: 1px solid var(--glass-line); background: var(--glass-fill);
  padding: 0.7rem; cursor: zoom-in; text-align: center; font: inherit; color: inherit;
  scroll-snap-align: start;
  transition: border-color 0.2s, transform 0.2s, background 0.2s;
}
.gallery-card:hover { border-color: var(--rose-glow); background: var(--glass-fill-strong); transform: translateY(-3px); }
.gallery-card img { display: block; height: 220px; width: auto; max-width: 60vw; border-radius: 10px; }
.gallery-caption { font-size: 0.78rem; color: var(--ink-soft); max-width: 260px; }

@media (max-width: 720px) {
  .gallery-card img { height: 170px; max-width: 58vw; }
}

.lightbox {
  position: fixed; inset: 0; z-index: 200; display: flex; align-items: center; justify-content: center;
  background: rgba(5, 2, 2, 0.88); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  padding: 4rem 1rem 2rem;
}
.lightbox-figure { display: flex; flex-direction: column; align-items: center; gap: 0.9rem; max-width: min(90vw, 900px); }
.lightbox-figure img { max-width: 100%; max-height: 78vh; width: auto; height: auto; border-radius: 12px; box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.7); }
.lightbox-figure figcaption { font-size: 0.9rem; color: var(--ink-soft); text-align: center; }

.lightbox-close {
  position: absolute; top: 1.2rem; right: 1.5rem; width: 42px; height: 42px; border-radius: 50%;
  border: 1px solid var(--glass-line); background: var(--glass-fill); color: var(--ink); font-size: 1.6rem;
  line-height: 1; cursor: pointer;
}
.lightbox-close:hover { border-color: var(--rose-glow); background: var(--glass-fill-strong); }

.lightbox-nav {
  position: absolute; top: 50%; transform: translateY(-50%); width: 46px; height: 46px; border-radius: 50%;
  border: 1px solid var(--glass-line); background: var(--glass-fill); color: var(--ink); font-size: 1.3rem;
  cursor: pointer;
}
.lightbox-nav:hover { border-color: var(--rose-glow); background: var(--glass-fill-strong); }
.lightbox-nav.prev { left: 1rem; }
.lightbox-nav.next { right: 1rem; }
@media (max-width: 640px) { .lightbox-nav { display: none; } }
</style>
