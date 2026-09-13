<script setup lang="ts">
import type { FactIconName } from '../../content/types'

defineProps<{ name: FactIconName }>()
</script>

<template>
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
    <path v-if="name === 'bolt'" d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />

    <template v-else-if="name === 'network'">
      <circle cx="6" cy="6" r="2.1" /><circle cx="18" cy="6" r="2.1" /><circle cx="12" cy="18" r="2.1" />
      <path d="M7.8 7.5 10.6 16M16.2 7.5 13.4 16M8.1 6h7.8" />
    </template>

    <template v-else-if="name === 'rocket'">
      <path d="M12 2c2.5 2 4 5.5 4 9 0 2.5-1 4.5-2 6h-4c-1-1.5-2-3.5-2-6 0-3.5 1.5-7 4-9Z" />
      <circle cx="12" cy="9" r="1.4" />
      <path d="M8 15c-2 .5-3 2-3 5 2.5 0 4-1 4.5-3M16 15c2 .5 3 2 3 5-2.5 0-4-1-4.5-3" />
      <path d="M10.3 20h3.4l-1.7 2.2z" />
    </template>

    <template v-else-if="name === 'award'">
      <circle cx="12" cy="8" r="5" />
      <path d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5" />
    </template>

    <template v-else-if="name === 'clipboard'">
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <rect x="9" y="2.3" width="6" height="3" rx="1" />
      <path d="M9 11h6M9 15h6M9 19h4" />
    </template>

    <template v-else-if="name === 'trending'">
      <path d="M3 17 9 11l4 4 8-9" />
      <path d="M15 6h6v6" />
    </template>

    <template v-else-if="name === 'bot'">
      <rect x="5" y="8" width="14" height="11" rx="3" />
      <path d="M12 4v4" /><circle cx="12" cy="3" r="1.1" />
      <circle cx="9" cy="13.2" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13.2" r="1.2" fill="currentColor" stroke="none" />
      <path d="M9 17h6" />
    </template>

    <template v-else-if="name === 'berry'">
      <path d="M12 8c-4 0-6 3-6 6.5S9 21 12 21s6-2 6-6.5S16 8 12 8Z" />
      <path d="M12 8V5M9 5l1.5 2M15 5l-1.5 2" />
    </template>

    <template v-else-if="name === 'palette'">
      <path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-3.9-4-7-9-7Z" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7" r="1" fill="currentColor" stroke="none" />
    </template>

    <template v-else-if="name === 'pin'">
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </template>

    <path
      v-else-if="name === 'plane'"
      d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-3 2v1.5l4.5-1 4.5 1V21l-3-2v-5.5l8 2.5Z"
    />

    <template v-else-if="name === 'car'">
      <path d="M5 16 6 10a2 2 0 0 1 2-1.6h8A2 2 0 0 1 18 10l1 6" />
      <rect x="3" y="16" width="18" height="4" rx="1.5" />
      <circle cx="7.5" cy="20" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="20" r="1.3" fill="currentColor" stroke="none" />
    </template>

    <path v-else-if="name === 'sparkle'" d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
  </svg>
</template>
