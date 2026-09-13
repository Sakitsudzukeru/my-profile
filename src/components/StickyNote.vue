<script setup lang="ts">
interface Props {
  rotate?: 'l' | 'r' | 'none'
  alt?: boolean
}

withDefaults(defineProps<Props>(), {
  rotate: 'none',
  alt: false,
})
</script>

<template>
  <div class="sticky" :class="[rotate !== 'none' && `rot-${rotate}`, { alt }]">
    <slot />
  </div>
</template>
