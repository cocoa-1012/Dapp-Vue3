<script setup>
import { ref } from "vue";

defineProps({
  linkTo: String,
  src: String,
});

const count = ref(0);
</script>

<template>
  <a class="footer" href="{{linkTo}}" target="_blank">
    <img src="{{src}}" alt="Image" class="logo" />
    {{ src }}
  </a>
</template>

<style scoped>
.footer {
  display: flex;
}
.footer_desc {
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: 400;
  color: #ffffff;
  width: 256px;
  font-size: 11px;
  text-align: left;
}
a {
  color: #42b983;
}
</style>
