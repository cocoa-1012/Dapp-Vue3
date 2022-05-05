import { createRouter, createWebHistory } from "vue-router";
import Farming from "../views/Farming.vue";
import FiatOnRamp from "../views/FiatOnRamp.vue";
import Governance from "../views/Governance.vue";
import Home from "../views/Home.vue";
import Swap from "../views/Swap.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/swap",
    name: "Swap",
    component: Swap,
  },
  {
    path: "/governance",
    name: "Governance",
    component: Governance,
  },
  {
    path: "/fiat-on-ramp",
    name: "Fiat-On-Ramp",
    component: FiatOnRamp,
  },
  {
    path: "/farming",
    name: "Farming",
    component: Farming,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
