<script setup lang="ts">
import type { Product } from '../types';
import Image from './Image.vue';
import { useCart } from "../store/cart";
import AddToCartButton from './AddToCartButton.vue';
import QuantityUpdater from './QuantityUpdater.vue';

const {cartItems} = useCart();
defineProps<{ product: Product }>();

</script>

<template>
  <article v-if="product" class="product">

    <figure class="figure">
      <Image :image="product.image" />

      <QuantityUpdater v-if="cartItems.find(item => item.name === product.name)" :productName="product.name" />
      <AddToCartButton v-else :product="product" />

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
    position: relative;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  .category {
    font-weight: 600;
    color: var(--rose-400);
  }
  .name {
    font-size: var(--font-size-product-name);
    color: var(--rose-900);
  }
  .price {
    font-weight: 600;
    color: var(--red);
  }
</style>