<template>
    <div class="product-box">
      <img :src="product.image" alt="Product Image" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <router-link :to="`/privacy/${privacy.id}`" class="button">View Details</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  