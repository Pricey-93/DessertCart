<script setup lang="ts">
import type { Product as IProduct } from '../types';
import Product from './Product.vue';

defineProps<{ products: IProduct[] }>()

</script>

<template>

  <ul class="product-list">
    <li v-for="product in products" :key="product.name">
      <Product :product="product" />
    </li>
  </ul>

</template>

<style scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    list-style-type: none;
  }
</style>
