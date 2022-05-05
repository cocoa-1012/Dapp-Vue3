<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="navbar">
    <img src="/src/assets/images/logo.png" alt="Image" class="logo" />
    <div class="routers">
      <router-link to="/">Home</router-link>
      <router-link to="/swap">Swap</router-link>
      <router-link to="/governance">Governance</router-link>
      <router-link to="/fiat-on-ramp">Fiat-On-Ramp</router-link>
      <router-link to="/farming">Farming</router-link>
    </div>
    <div class="connect">
      <div class="switch" @click="toggleTheme">
        <img
          v-if="userTheme === 'dark-theme'"
          src="/src/assets/images/day.png"
          alt="Image"
        />
        <img v-else src="/src/assets/images/night.png" alt="Image" />
      </div>

      <button id="show-modal" class="connect_button">connect wallet</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userTheme: "light-theme",
    };
  },
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },
  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
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
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
  },
};
</script>


<style scoped>
.navbar {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color-primary);
  width: 100vw;
}
.routers a {
  color: var(--text-primary-color);
}
.connect {
  display: flex;
  align-items: center;
}
.connect_button {
  width: 129px;
  height: 28px;
  background-color: var(--background-color-button);
  border-radius: 15px;
  text-transform: uppercase;
  color: var(--button-text-color);
  font-style: normal;
  line-height: 16px;
  align-items: center;
  font-weight: 400;
  font-size: 11px;
  margin-right: 100px;
  border: none;
}
.switch {
  width: 45px;
  height: 45px;
  margin-right: 36px;
  margin-left: 300px;
}
.switch:hover {
  cursor: pointer;
}
.logo {
  width: 90px;
  height: 90px;
  margin-right: 92px;
}
a {
  color: #ffffff;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  font-style: normal;
  align-items: center;
  text-transform: capitalize;
  margin-left: 45px;
}
</style>
