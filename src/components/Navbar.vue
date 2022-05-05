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
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/swap">Swap</router-link>
      <router-link to="/governance">Governance</router-link>
      <router-link to="/fiat-on-ramp">Fiat-On-Ramp</router-link>
      <router-link to="/farming">Farming</router-link>
    </div>
    <div class="connect">
      <div>
        <img src="/src/assets/images/day.png" alt="Image" class="switch" />
      </div>

      <button id="show-modal" class="connect_button">connect wallet</button>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.connect {
  display: flex;
  align-items: center;
}
.connect_button {
  width: 129px;
  height: 28px;
  background-color: #ffffff;
  border-radius: 15px;
  text-transform: uppercase;
  color: #080a3e;
  font-style: normal;
  line-height: 16px;
  align-items: center;
  font-weight: 400;
  font-size: 11px;
  margin-right: 100px;
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
