<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/swap">Swap</router-link>
    <router-link to="/governance">Governance</router-link>
    <router-link to="/fiat-on-ramp">Fiat-On-Ramp</router-link>
    <router-link to="/farming">Farming</router-link>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
