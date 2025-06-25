<script setup lang="ts">
import type { Product as IProduct } from '../types';
import Product from './Product.vue';

defineProps<{ products: IProduct[] }>()

</script>

<template>

  <ul>
    <li v-for="product in products" :key="product.name">
      <Product :product="product" />
    </li>
  </ul>

</template>

<style scoped>
  ul {
    list-style-type: none;
  }
  @media only screen and (min-width: 768px) {
    ul {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
    }
  }
</style>
