<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from "vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

const themeValue = ref("");
const changeTheme = (theme) => {
  themeValue.value = theme;
};
</script>

<template>
  <Navbar msg="Hello Vue 3 + Vite" @change-theme="changeTheme" />
  <marquee class="text-[#ff0000] font-bold text-3xl">
    <div class="flex space-x-4">
      <div>
        <img
          src="/src/assets/images/faker.png"
          alt="Image"
          class="w-20 h-20 ml-8"
        />
        <p>This is Faker. Please be careful all the time.</p>
      </div>

      <div>
        <p>
          Hi. WooBin? Patryk? Are you a real human? Please pay for the project.
        </p>
        <p>
          You should pay for the project definitely. I don't care with your
          client.
        </p>
      </div>
    </div>
  </marquee>
  <div class="show_background">
    <router-view />
    <Footer msg="Hello" :theme="themeValue" />
  </div>
</template>

<style>
:root {
  --background-color-primary: #fff;
  --background-color-secondary: #f3f3f3;
  --button-text-color: #fff;
  --background-color-button: #00032a;
  --text-primary-color: #00032a;
  --background-color-input: #aaaab6;
  --background-image: url("./assets/images/d-background.png");
  --shadow-color-navbar: 1px 1px 10px #d1d5db;
  --shadow-color-box: 0 0 30px #d1d5db;
}

/* Define styles for the root window with dark - mode preference */
:root.dark {
  --background-color-primary: #00032a;
  --background-color-secondary: #080a3e;
  --button-text-color: #080a3e;
  --background-color-button: #fff;
  --text-primary-color: #fff;
  --background-color-input: #00032a;
  --background-image: url("./assets/images/n-background.png");
  /* --shadow-color-navbar: 1px 1px 10px #06b6d4; */
  --shadow-color-box: 5px 5px 3px #06b6d499;
}

#app {
  background-color: var(--background-color-primary);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.show_background {
  display: flex;
  margin-top: 120px;
  flex-direction: column;
  align-items: center;
  min-width: 98.5vw;
  padding-bottom: 100px;
  background-image: var(--background-image);
  background-size: 100% auto;
  background-repeat: no-repeat;
}
</style>
