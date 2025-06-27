<script setup lang="ts">
import { useCart } from "../store/cart";
import type { Product } from "../types";
import Button from "./Button.vue";
const {add, createCartItem} = useCart();

defineProps<{ product: Product}>()

</script>

<template>

<Button class="add-to-cart-button" :callback="() => add(createCartItem(product))">
  <img src="/assets/images/icon-add-to-cart.svg" /> 
  <span>Add to Cart</span>
</Button>

</template>

<style scoped>
img {
  vertical-align: middle;
  margin-right: 5px;
}
.add-to-cart-button {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 0.5rem;
  background-color: var(--rose-50);
  border: 1px solid var(--rose-400);
  border-radius: 24px;
  width: 50%;
  cursor: pointer;
}
.add-to-cart-button:hover {
  border-color: var(--red);
}

</style>