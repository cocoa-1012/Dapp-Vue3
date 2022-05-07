<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Swap", href: "/swap" },
  { name: "Governance", href: "/governance" },
  { name: "Fiat-On-Ramp", href: "/fiat-on-ramp" },
  { name: "Farming", href: "/farming" },
];
defineProps({
  msg: String,
});
const a_class = "text-primary dark:text-white text-sm font-semibold";
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
    <!-- Logo -->
    <img src="/src/assets/images/logo.png" alt="Image" class="w-20 h-20 ml-8" />

    <!-- Navigations -->
    <Popover>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <nav
          class="
            relative
            flex
            items-center
            justify-between
            sm:h-10
            lg:justify-start
          "
          aria-label="Global"
        >
          <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div class="flex items-center justify-between w-full lg:w-auto">
              <div class="-mr-2 flex items-center lg:hidden">
                <PopoverButton
                  class="
                    bg-white
                    rounded-md
                    p-2
                    mx-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500 hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-indigo-500
                  "
                >
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
          </div>
          <div
            class="hidden lg:flex items-center lg:ml-10 lg:pr-4 lg:space-x-8"
          >
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="a_class"
              >{{ item.name }}</a
            >
            <!-- Change theme -->
            <div class="hidden lg:flex flex items-center">
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
                  w-40
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
                connect&nbsp;wallet
              </button>
            </div>
          </div>
        </nav>
      </div>

      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="
            absolute
            z-10
            top-0
            inset-x-0
            p-2
            transition
            transform
            origin-top-right
            lg:hidden
          "
        >
          <div
            class="
              rounded-lg
              shadow-md shadow-grayshadow
              dark:shadow-cyan
              bg-white
              dark:bg-primary
              ring-1 ring-black ring-opacity-5
              overflow-hidden
            "
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <!-- Logo -->
                <img
                  src="/src/assets/images/logo.png"
                  alt="Image"
                  class="w-auto h-16"
                />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    bg-white
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500 hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-indigo-500
                  "
                >
                  <span class="sr-only">Close main menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <!-- Navigation -->
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="a_class"
                class="
                  block
                  px-3
                  py-2
                  rounded-md
                  text-base
                  font-semibold
                  hover:text-white hover:bg-secondary
                  dark:hover:text-primary dark:hover:bg-inputbackground
                "
                >{{ item.name }}</a
              >
            </div>
            <!-- Change theme -->
            <div class="flex items-center justify-between mx-16 mb-8">
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
                  w-40
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
                connect&nbsp;wallet
              </button>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
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

