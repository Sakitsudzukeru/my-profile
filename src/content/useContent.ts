import { computed, ref } from 'vue'
import type { Locale } from './types'
import { buildContent } from './build'

const STORAGE_KEY = 'site-locale'

function detectInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'ru' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

const locale = ref<Locale>(detectInitialLocale())
const content = computed(() => buildContent(locale.value))

function setLocale(next: Locale) {
  locale.value = next
  localStorage.setItem(STORAGE_KEY, next)
}

export function useContent() {
  return { locale, content, setLocale }
}
