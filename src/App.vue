<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar msg="Hello Vue 3 + Vite" />
  <div class="show_background">
    <router-view />
    <Footer msg="Hello" />
  </div>
</template>

<style>
#app {
  background-color: #00032a;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.show_background {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 98.5vw;
  padding-bottom: 100px;
  background-image: url("./assets/images/d-background.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
}
</style>
