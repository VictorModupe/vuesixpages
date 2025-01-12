<template>
  <div class="catagory-header">
    <!-- <div class="logo">
      <img src="../assets/images/logo.png" alt="Logo" />
    </div> -->
    <!-- <div class="tabs">
      <div
        v-for="(tab, i) in tabs"
        :key="tab"
        class="tab"
        @click="activeIndex = i"
        :class="{ active: activeIndex === i }"
      >
        {{ tab }}
      </div>
    </div> -->
    <!-- <div class="button-group">
      <button class="lbutton">Login</button>
      <button class="button">Get Started</button>
    </div> -->

  </div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  title: {
    type: String,
  },
  tabs: {
    type: [Array, Object],
  },
});
const activeIndex = ref(0);
</script>

<style scoped>
.catagory-header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 50px;
  margin-top: 5px;
}


.catagory-header h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
}
.tabs {
  display: flex;
  /* align-items: center; */
}
.lbutton{
  display: flex;
  padding: 10px 16px;
  /* margin-left: 25vw; */
  /* align-items: center; */
  border-radius: 4px;
  background-color: #EEF2FF;
  border: #0081C5 2px;
  color: #0081C5;
}
.button{
  display: flex;
  padding: 10px 16px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  margin-right: 1vw;
  background-color: #0081C5;
  border: #0081C5 1px;
  color: #fff;
}
.button:last-of-type {
    margin-right: 0;
  }
.tabs .tab {
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  opacity: 0.6;
  transition: 0.3s;
  margin-right: 32px;
  cursor: pointer;
}
.tabs .tab.active,
.tabs .tab:hover {
  opacity: 1;
}
.logo{
  width: 140px;
  height: 50px;
}
.button-group {
  display: flex;
  gap: 10px; /* Adjust spacing between buttons */
}
@media (max-width: 969px) {
  .tabs {
    display: none;
  }
}
</style>
