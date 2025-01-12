<template>
  
  <section class="catagory-products">
    
    <div class="container">
      <CatagoryHeader :title="title" :tabs="tabs" />
        <div class="intro-text">
          <h3>We Have AI Programmed to Work</h3>
          <h3>
          for <span class="highlight">All These Local Niches</span>
        </h3>
      </div>
      <div class="products">
        <SingleProduct
          v-for="(product, i) in products"
          :key="i"
          :product="product"
          id="box"
        />
        
      </div>
    </div>

  </section>
</template>

<script setup>
// import { defineProps } from "vue";
import CatagoryHeader from "./CatagoryHeader.vue";
import SingleProduct from "./SingleProduct.vue";

defineProps(["title", "products", "tabs"]);
</script>

<style scoped>
.container{
  background-color: #FAFAFE;

}
#box{
  background-color: white; 
  border-radius: 8px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  padding: 16px; 
  text-align: center; 
  transition: transform 0.3s, box-shadow 0.3s; 
}
.catagory-products {
  margin-bottom: 100px;
}
.catagory-products .btn {
  height: 48px;
  background: #f8f8f8;
  border: 2px solid #f8f8f8;
  max-width: 50%;
  margin-top: 18px;
}
.intro-text {
  text-align: center;
  margin-bottom: 20px;
  font-size: 49px;
}
.intro-text h3 {
  color: #2a2b2c;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -1.12px;
  margin: 0;
}
.intro-text .highlight {
  color: #0081c5; 
  font-weight: 700;
}

.products {
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr ; 
  gap: 30px; 
  align-items: center;
  width: 75%; 
  margin: 0 auto; 
  padding: 20px; 
  border-radius: 10px;
}


@media (max-width: 969px) {
  .products {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 400px) {
  .products {
    grid-template-columns: 1fr;
  }
}
</style>
