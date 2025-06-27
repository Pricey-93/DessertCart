<script setup lang="ts">
import { useCart } from "../store/cart";
import Button from "./Button.vue";
const { cartItems, incrementQuantity, decrementQuantity } = useCart();

defineProps<{ productName: string }>()

</script>

<template>
  <div class="button-controls">
    <Button class="quantity-button" :callback="() => decrementQuantity(productName)">
      <img src="/assets/images/icon-decrement-quantity.svg" />
    </Button>

    <span class="quantity-text">{{ cartItems.find(item => item.name === productName)?.quantity }}</span>

    <Button class="quantity-button" :callback="() => incrementQuantity(productName)">
      <img src="/assets/images/icon-increment-quantity.svg" />
    </Button>
  </div>
</template>

<style scoped>
img {
  display: block;
}
.button-controls {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 0.5rem;
  background-color: var(--red);
  border-radius: 24px;
  width: 50%;
}
.quantity-button {
  border-radius: 50%;
  border: 1px solid var(--rose-50);
  background-color: var(--red);
  padding: 0 0.25rem;
  cursor: pointer;
}
.quantity-text {
  color: var(--rose-50);
}
</style>