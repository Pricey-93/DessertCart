<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import type { Product } from './types';
  import ProductList from './components/ProductList.vue'
  import Footer from './components/Footer.vue'
  import OrderCart from './components/OrderCart.vue';

  async function fetchData(): Promise<Product[]> {
    let response;

    try {
      response = await fetch('./data.json');
      return response.json();
    }
    catch (error) {
      console.error(error);
    }

    return [];
  }

  const products = ref<Product[]>([]);

  onMounted(async () => {
    products.value = await fetchData();
    console.log(products.value);
  });

</script>

<template>
  <main id="product-menu">
    <h1 id="title">Desserts</h1>

    <section id="product-section">
      <ProductList v-if="products" :products="products" />
      <div v-else>
        Loading...
      </div>
    </section>

    <section id="order-cart-section">
      <OrderCart />
    </section>

  </main>
  
  <Footer />

</template>

<style scoped>
  #title {
    grid-area: "title";
  }
  #product-menu {
    display: grid;
    grid-template-areas:
    "title"
    "product-section"
    "order-cart-section";
    background-color: var(--rose-100);
    padding: 2rem;
    gap: 2rem;
  }
  #product-section {
    grid-area: product-section;
  }
  #order-cart-section {
    grid-area: order-cart-section;
  }
  @media only screen and (min-width: 1024px) {
    #product-menu {
      grid-template-areas: 
      "title order-cart-section"
      "product-section order-cart-section";
      grid-template-columns: auto 300px;
    }
  }

</style>
