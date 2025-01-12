<template>
    <div>
      <!-- <Banner /> -->
      <!-- <CatagoryProducts
        :tabs="womentabs"
        :title="womentitle"
        :products="womenProducts"
      /> -->
      <CatagoryProducts
        :tabs="tabs"
        :title="mentitle"
        :products="products"
      />
      <Benefits />
      <Footer />
    </div>
  </template>
  <script setup>
  import CatagoryProducts from "../components/CatagoryProducts.vue";
  import { ref } from "vue";
  import Benefits from "../components/Benefits.vue"
  import Footer from "../components/Footer.vue";
  
  const tabs = ref([
    "HOME",
    "ABOUT",
    "FEATURES",
    "MOST VIEWED",
    "FEATURED PRODUCTS",
  ]);
  
  const products = ref([
    {
      img: "../assets/images/car.png",
      name: `Local Car Dealers, Repair Shops`,
    },
    {
      img: "../assets/images/treats.png",
      name: `Pet Stores`,
    },
    {
      img: "../assets/images/gym.png",
      name: `Gyms`,
    },
    {
      img: "../assets/images/makeup.png",
      name: `Salons & Cosmetic Shops`,
    },
    {
      img: "../assets/images/music.png",
      name: `Local Bands`,
    }, {
      img: "../assets/images/man.png",
      name: `Coaches/Consultant`,
    },
    {
      img: "../assets/images/food.png",
      name: `Local Restaurant`,
    },
    {
      img: "../assets/images/travel.png",
      name: `Travel Advisors`,
    },
    {
      img: "../assets/images/doctor.png",
      name: `Dentists`,
    },
    {
      img: "../assets/images/hose.png",
      name: `Plumbers`,
    },
    {
      img: "../assets/images/rent.png",
      name: `Real Estate Sales`,
    },
    {
      img: "../assets/images/station.png",
      name: `Retail Stores`,
    },
  
  ]);
  const womentitle = ref("Womens");
  const mentitle = ref("Men");
  </script>
  