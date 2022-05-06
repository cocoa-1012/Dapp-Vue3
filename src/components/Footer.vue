<script setup>
import { ref } from "vue";

const props = defineProps({
  theme: {
    type: String,
    default: "",
  },
});
const p_class =
  "text-sm text-primary dark:text-white font-semibold text-left mb-3";
const data_night = [
  {
    id: 1,
    src: "n-face.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
  {
    id: 2,
    src: "n-tele.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
  {
    id: 3,
    src: "n-twit.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
  {
    id: 4,
    src: "n-ytb.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
  {
    id: 5,
    src: "n-medi.png",
    linkTo: "https://majestic-owl.netlify.app",
  },

  {
    id: 6,
    src: "n-inst.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
  {
    id: 7,
    src: "n-disc.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
  {
    id: 8,
    src: "n-link.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
];

const data_day = [
  {
    id: 1,
    src: "d-face.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
  {
    id: 2,
    src: "d-tele.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
  {
    id: 3,
    src: "d-twit.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
  {
    id: 4,
    src: "d-ytb.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
  {
    id: 5,
    src: "d-medi.png",
    linkTo: "https://majestic-owl.netlify.app",
  },

  {
    id: 6,
    src: "d-inst.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
  {
    id: 7,
    src: "d-disc.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
  {
    id: 8,
    src: "d-link.png",
    linkTo: "https://majestic-owl.netlify.app",
  },
];

const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};

const count = ref(0);
</script>

<template>
  <div class="flex">
    <div class="mr-20">
      <div>
        <img src="/src/assets/images/footer-logo.png" alt="Image" />
      </div>
      <div
        class="
          flex
          items-center
          text-primary
          dark:text-white
          capitalize
          text-xs
          max-w-[260px]
          text-left
        "
      >
        Ibiza Token is a Web3 ecosystem that counts on the utility token $IBZ,
        the NFT marketplace, and the IbizaPay mobile application and aims to
        turn Ibiza into a “crypto island” benchmark by connecting local
        businesses and artists to a global audience and increasing the adoption
        of blockchain technology by citizens and institutions.
      </div>
    </div>
    <div>
      <div>
        <p :class="p_class">Follow Us</p>
        <div
          class="flex items-center justify-between"
          v-if="props.theme === 'dark'"
        >
          <a
            v-for="item in data_night"
            :key="item.id"
            :href="item.linkTo"
            target="_blank"
          >
            <img :src="getImageUrl(item.src)" alt="Image" class="logo" />
          </a>
        </div>
        <div class="flex items-center justify-between" v-else>
          <a
            v-for="item in data_day"
            :key="item.id"
            :href="item.linkTo"
            target="_blank"
          >
            <img :src="getImageUrl(item.src)" alt="Image" class="logo" />
          </a>
        </div>
      </div>

      <div class="mt-14">
        <p :class="p_class">Subscribe To The Newsletter</p>
        <div>
          <input
            class="bg-gray dark:bg-white rounded w-48 h-7"
            type="text"
            placeholder="Email"
          />
          <button
            class="
              h-7
              text-sm
              bg-secondary
              dark:bg-white:
              rounded-md
              text-white
              dark:text-white
              mx-4
              px-3
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::placeholder {
  font-size: 10px;
  font-style: italic;
  color: #080a32;
  padding-left: 10px;
  text-align: left;
  align-items: center;
}
</style>
