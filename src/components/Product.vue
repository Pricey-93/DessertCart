<script setup lang="ts">
import type { Product } from '../types';
import Image from './Image.vue';

defineProps<{ product: Product }>()

</script>

<template>
  <article v-if="product" class="product">
    <figure class="figure">
      <Image :image="product.image" />
    </figure>

    <div>
      <p class="category">{{ product.category }}</p>
      <h3 class="name">{{ product.name }}</h3>
      <data class="price" :value="product.price">£{{ product.price.toFixed(2) }}</data>
    </div>
  </article>
</template>

<style scoped>
  .figure {
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  .category {
    font-weight: 600;
    color: var(--rose-400);
  }
  .name {
    color: var(--rose-900);
  }
  .price {
    font-weight: 600;
    color: var(--red);
  }
</style>