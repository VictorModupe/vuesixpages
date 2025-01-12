<template>
  <nav>
    <div class="nav-inner">
      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="" />
      </div>
      <!-- Links -->
      <div class="links">
        <router-link to="/home"> HOME </router-link>
        <router-link to="/features"> FEATURES </router-link>
        <router-link to="/commissions"> COMMISSIONS </router-link>
        <router-link to="/about"> AICHAT </router-link>
        <router-link to="/faq"> FAQ </router-link>
        <router-link to="/privacy"> PRIVACY </router-link>
      </div>
      <!-- Icons -->
      <div class="button-group">
        <button class="lbutton">Login</button>
        <button class="button">Get Started</button>
      </div>
    </div>
  </nav>
</template>


<script setup></script>

<style scoped>
.links{
  display: flex;
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  opacity: 0.6;
  transition: 0.3s;
  margin-right: 32px;
  cursor: pointer;
}
nav {
  border-bottom: 2px solid #f8f8f8;
}
nav .nav-inner {
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(1440px - 170px);
  width: 100%;
  margin: auto;
}
.nav-inner .links a {
  margin: 0px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #121212;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
}
.nav-inner .links a:hover {
  border-color: #121212;
}
.lbutton{
  display: flex;
  padding: 10px 16px;

  border-radius: 4px;
  background-color: #EEF2FF;
  border: #0081C5 2px;
  color: #0081C5;
}
.button{
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 1vw;
  background-color: #0081C5;
  border: #0081C5 1px;
  color: #fff;
}
.button-group {
  display: flex;
  gap: 10px; /* Adjust spacing between buttons */
}
.icons{
    display: flex;
    align-items: center;
}
.icons span {
  margin: 0 13px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
