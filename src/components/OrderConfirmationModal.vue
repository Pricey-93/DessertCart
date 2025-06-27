<script setup lang="ts">
import { ref } from 'vue'
import Button from './Button.vue';
import { useCart } from "../store/cart";

const { cartItems, calculateOrderTotal, clear } = useCart();
const open = ref(false);

function resetPage() {
  open.value = false;
  clear();
}

</script>

<template>
  <Button class="cta-button" v-show="cartItems.length > 0" :callback="() => open = true" >
    <span class="cta-text">Confirm Order</span>
  </Button>

  <Teleport to="body">
    <div v-if="open" class="modal-mask">

      <div class="modal-container">
        <div>
          <img src="/assets/images/icon-order-confirmed.svg" />
        </div>
        <p class="modal-title">Order <br /> Confirmed</p>
        <p class="modal-title-subtext">We hope you enjoy your food!</p>

        <div class="order-summary-container">
          <dl v-for="item in cartItems" :key="item.name">
            <div class="summary-line-container">
              <div>
                <img class="thumbnail-image" :src="item.image.thumbnail"/>
              </div>

              <div class="summary-details-container">
                <dt class="product-title">
                  {{ item.name }}
                </dt>
                <dd>
                  <span class="quantity">{{ item.quantity }}x</span>
                  <span class="price">@£{{ item.price.toFixed(2) }}</span>
                </dd>
              </div>

              <div class="summary-details-total-price-container">
                <span class="total-price">£{{ (item.price * item.quantity).toFixed(2) }}</span>
              </div>
            </div>
            <hr />
          </dl>
          <div class="order-total-container" v-show="cartItems.length > 0">
            <span>Order Total</span>
            <span class="order-total-value">£{{ calculateOrderTotal().toFixed(2) }}</span>
          </div>
        </div>

        <Button class="cta-button" v-show="cartItems.length > 0" :callback="() => resetPage()">
          <span class="cta-text">Start New Order</span>
        </Button>

      </div>
    </div>
  </Teleport>
</template>

<style scoped>
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 2px solid #ccc;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}
.modal-container {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 80vh;
  width: 100%;
  padding: 1rem;
  background-color: var(--rose-50);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-title {
  font-weight: 700;
  font-size: 2em;
}
.modal-title-subtext {
  color: var(--rose-500);
}
.order-summary-container {
  overflow-y: auto;
  border-radius: 8px;
  padding: 1rem;
  background-color: var(--rose-100);
}
.summary-line-container {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.thumbnail-image {
  height: 75px;
  width: 75px;
  border-radius: 8px;
}
.summary-details-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-overflow: ellipsis;
}
.product-title {
  color: var(--rose-900);
  font-weight: 500;
}
.quantity {
  color: var(--red);
  font-weight: 600;
}
.price {
  margin-left: 1rem;
  color: var(--rose-500);
}
.summary-details-total-price-container {
  margin-left: auto;
}
.total-price {
  color: var(--rose-900);
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
.cta-button {
  width: 100%;
  padding: 1rem;
  background-color: var(--red);
  border-radius: 24px;
  border: 0;
  text-align: center;
  cursor: pointer;
}
.cta-text {
  color: var(--rose-50);
}
@media only screen and (min-width: 1024px) {
  .modal-container {
    max-width: 50%;
    bottom: 25%;
    left: 25%;
  }
}
</style>