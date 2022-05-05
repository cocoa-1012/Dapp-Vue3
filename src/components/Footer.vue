<script setup>
import { ref } from "vue";

const props = defineProps({
  theme: {
    type: String,
    default: "",
  },
});

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
  <div class="footer">
    <div class="description">
      <div class="footer_title">
        <img
          src="/src/assets/images/footer-logo.png"
          alt="Image"
          class="logo"
        />
        <p></p>
      </div>
      <div class="footer_desc">
        Ibiza Token is a Web3 ecosystem that counts on the utility token $IBZ,
        the NFT marketplace, and the IbizaPay mobile application and aims to
        turn Ibiza into a “crypto island” benchmark by connecting local
        businesses and artists to a global audience and increasing the adoption
        of blockchain technology by citizens and institutions.
      </div>
    </div>
    <div class="contacts">
      <div class="socials">
        <p class="follow">Follow Us</p>
        <div class="buttons" v-if="props.theme === 'dark-theme'">
          <a
            v-for="item in data_night"
            :key="item.id"
            :href="item.linkTo"
            target="_blank"
          >
            <img :src="getImageUrl(item.src)" alt="Image" class="logo" />
          </a>
        </div>
        <div class="buttons" v-else>
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

      <div class="subscribe">
        <p class="follow">Subscribe To The Newsletter</p>
        <div>
          <input class="sub_input" type="text" placeholder="Email" />
          <button class="sub_button">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
}
.description {
  margin-right: 100px;
}
.footer_desc {
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: 400;
  color: var(--text-primary-color);
  width: 256px;
  font-size: 11px;
  text-align: left;
}
.follow {
  font-size: 13px;
  color: var(--text-primary-color);
  font-weight: 500;
  align-items: center;
  text-align: left;
  text-transform: capitalize;
  margin-bottom: 12px;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.subscribe {
  margin-top: 50px;
}
.sub_button {
  background-color: #080a3e;
  border-radius: 4px;
  color: #ffffff;
  width: 66px;
  height: 26px;
  line-height: 16.45px;
  font-weight: 500;
  font-size: 11px;
  margin-left: 8px;
  border: none;
}
.sub_input {
  background-color: #c7c7ce;
  border-radius: 4px;
  width: 148px;
  height: 26px;
}
::placeholder {
  font-size: 10px;
  font-style: italic;
  color: #080a32;
  padding-left: 10px;
  text-align: left;
  align-items: center;
}
</style>
