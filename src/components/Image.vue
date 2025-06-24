<script setup lang="ts">
import { type Image } from '../types';

defineProps<{ image: Image }>()

</script>

<template>
  <picture>
    <source media="(min-width: 1200px)" :srcset="image.desktop">
    <source media="(min-width: 768px)" :srcset="image.tablet">
    <img :src="image.mobile" alt="The dessert, beautifully presented and highlighting it's mouth-watering deliciousness."/>
  </picture> 
</template>

<style scoped>
  img {
    max-width: 100%;
    display: block;
    border-radius: 8px;
  }
</style>