<template>
  <div class="single-product">
    <div class="img-container">
      <img :src="getImage(product.img)" alt="" />
      <!-- <div v-if="product.sale" class="sale">-50%</div> -->
    </div>
    <div class="product-content">
      <h6 class="name">
        {{ product.name }}
      </h6>
      <!-- <div class="rating">
        <span class="price">
          {{ product.price }}
        </span>
        <span class="icon">
          <img :src="getImage(product.rating)" alt="" />
        </span>
      </div> -->
    </div>
  </div>
</template>

<script setup>
// import { defineProps } from "vue";
defineProps({
  product: {
    type: Object,
  },
});
// new URL('./logo.png', import.meta.url).href
const getImage = (src) => {
  return new URL(src, import.meta.url).href;
};
</script>

<style scoped>
.img-container{
  width: 50%; /* Make images responsive */
  object-fit: fit; /* Ensure the image covers the area without distortion */
  border-radius: 4px; /* Optional: Round image corners */
  margin-bottom: 10px; /* Space between the image and other content */
  margin-left: 39px;
}
.single-product .img-container {
  position: relative;
 }


.single-product .product-content h6 {
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  opacity: 0.6;
  font-style: normal;
  color: #2A2B2C;
}

</style>
