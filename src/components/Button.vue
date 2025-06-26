<script setup lang="ts">
defineProps<{callback: () => void }>()
</script>

<template>
  <button type="button" v-on:click="callback">
    <slot />
  </button>
</template>