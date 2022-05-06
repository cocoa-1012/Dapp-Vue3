<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});
const a_class = "text-primary dark:text-white text-sm mx-5 font-semibold";
const count = ref(0);
</script>

<template>
  <div
    class="
      fixed
      flex
      justify-between
      items-center
      w-screen
      bg-white
      dark:bg-primary
      shadow-md shadow-grayshadow
      dark:shadow-cyan
      z-50
    "
  >
    <img src="/src/assets/images/logo.png" alt="Image" class="w-20 h-20 ml-8" />
    <div class="routers">
      <router-link to="/">
        <span :class="a_class">Home</span>
      </router-link>
      <router-link to="/swap">
        <span :class="a_class">Swap</span>
      </router-link>
      <router-link to="/governance">
        <span :class="a_class"> Governance </span>
      </router-link>
      <router-link to="/fiat-on-ramp">
        <span :class="a_class"> Fiat-On-Ramp </span>
      </router-link>
      <router-link to="/farming">
        <span :class="a_class">Farming</span>
      </router-link>
    </div>
    <div class="flex items-center">
      <div class="w-11 h-11 hover:cursor-pointer" @click="toggleTheme">
        <img
          v-if="userTheme === 'dark'"
          src="/src/assets/images/day.png"
          alt="Image"
        />
        <img v-else src="/src/assets/images/night.png" alt="Image" />
      </div>

      <button
        id="show-modal"
        class="
          w-36
          h-8
          rounded-2xl
          uppercase
          text-xs
          font-semibold
          text-white
          dark:text-primary
          bg-primary
          dark:bg-white
          mx-8
        "
      >
        connect wallet
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userTheme: "light",
    };
  },
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },
  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light") {
        this.setTheme("dark");
      } else {
        this.setTheme("light");
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
      this.$emit("change-theme", theme);
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark";
      } else {
        return "light";
      }
    },
  },
};
</script>

