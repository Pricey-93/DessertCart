<script setup lang="ts">
import { useCart } from "../store/cart";
import Button from './Button.vue';
import OrderConfirmationModal from "./OrderConfirmationModal.vue";

const { cartItems, remove, calculateOrderTotal } = useCart();
</script>

<template>
  <aside>
    <h2>Your Cart({{ cartItems.length }})</h2>

    <figure v-show="cartItems.length < 1">
      <img src="/public/assets/images/illustration-empty-cart.svg" />
      <figcaption>Your added items will appear here</figcaption>
    </figure>

    <dl v-for="(item, index) in cartItems" :key="item.name">
      <div class="cart-item-summary-container">
        <div class="cart-item-details-container">
          <dt class="product-title">{{ item.name }}</dt>
          <dd class="product-data">
            <span class="quantity">{{ item.quantity }}x</span>
            <span class="price">@£{{ item.price.toFixed(2) }}</span>
            <span class="total-price">£{{ (item.price * item.quantity).toFixed(2) }}</span>
          </dd>
        </div>
        <Button class="remove-button" :callback="() => remove(index)">
          <img src="/assets/images/icon-remove-item.svg" alt="Add Icon"/>
        </Button>
      </div>
      <hr />
    </dl>

    <div class="order-total-container" v-show="cartItems.length > 0">
      <span>Order Total</span>
      <span class="order-total-value">£{{ calculateOrderTotal().toFixed(2) }}</span>
    </div>

    <div class="carbon-neutral-banner" v-show="cartItems.length > 0">
      <img style="vertical-align:sub" src="/assets/images/icon-carbon-neutral.svg"/> This is a <b>carbon-neutral</b> delivery
    </div>

    <OrderConfirmationModal />

  </aside>
</template>

<style scoped>
  span {
    display: inline-block;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 2px solid var(--rose-100);
  }
  h2 {
    color: var(--red);
    text-align: left;
    margin-bottom: 1rem;
  }
  .remove-button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
  }
  aside {
    position: sticky;
    top: 0;
    background-color: var(--rose-50);
    border-radius: 8px;
    padding: 1rem;    
    text-align: center;
  }
  .cart-item-summary-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cart-item-details-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .product-title {
    color: var(--rose-900);
    font-weight: 700;
    text-align: left;
  }
  .product-data {
    display: flex;
    gap: 1rem;
  }
  .quantity {
    color: var(--red);
    font-weight: 600;
  }
  .price {
    color: var(--rose-500);
  }
  .total-price {
    color: var(--rose-500);
    font-weight: 600;
  }
  .order-total-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .order-total-value {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .carbon-neutral-banner {
    margin-bottom: 1rem;
    background-color: var(--rose-100);
    padding: 1rem 0.5em;
  }

</style>