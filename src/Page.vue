<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import type { Product } from './types';
  import ProductList from './components/ProductList.vue'
  import Footer from './components/Footer.vue'

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

  let products = ref<Product[]>([]);

  onMounted(async () => {
    products.value = await fetchData();
    console.log(products.value);
  });

</script>

<template>
  <main id="product-menu">
    <h1>Desserts</h1>

    <section id="product-section">
      <ProductList v-if="products" :products="products" />
      <div v-else>
        Loading...
      </div>
    </section>

  </main>
  
  <Footer />

</template>

<style scoped>
  #product-menu {
    background-color: var(--rose-100);
    padding: 1rem;
  }
</style>
