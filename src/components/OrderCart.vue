<script setup lang="ts">

defineProps<{ }>()

</script>

<template>
  <aside>
    <h2>Your Cart(0)</h2>
    <img src="/public/assets/images/illustration-empty-cart.svg" />
    <p>Your added items will appear here</p>
  </aside>
</template>

<style scoped>
  aside {
    background-color: var(--rose-50);
    border-radius: 8px;
    padding: 1rem;    
    text-align: center;
  }
  h2 {
    text-align: left;
  }
</style>