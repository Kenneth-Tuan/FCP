<template>
  <div class="u-relative u-overflow-hidden">
    <!-- <p class="moving-text u-w100%">test test test</p> -->

    <q-carousel
      v-model="slide"
      transition-prev="fade"
      transition-next="fade"
      transition-duration="200"
      :autoplay="true"
      swipeable
      animated
      control-color="black"
      control-type="push"
      navigation-icon="radio_button_unchecked"
      arrows
      :navigation="false"
      infinite
      height="max-content"
      class="u-aspect-ratio-16/9"
    >
      <q-carousel-slide
        @click="$router.push({ name: 'Events' })"
        :name="1"
        :img-src="banner1"
        class="u-aspect-ratio-16/9 u-cursor-pointer"
      />
      <q-carousel-slide
        @click="$router.push({ name: 'Events' })"
        :name="2"
        :img-src="banner2"
        class="u-aspect-ratio-16/9 u-cursor-pointer"
      />
      <q-carousel-slide
        @click="$router.push({ name: 'Events' })"
        :name="3"
        :img-src="banner3"
        class="u-aspect-ratio-16/9 u-cursor-pointer"
      />
      <q-carousel-slide
        @click="$router.push({ name: 'Events' })"
        :name="4"
        :img-src="banner4"
        class="u-aspect-ratio-16/9 u-cursor-pointer"
      />
    </q-carousel>

    <!-- <q-btn
      @click="$router.push({ name: 'Events' })"
      class="u-rounded-[0_24px] u-bg-fcp-blue u-absolute u-bottom-5% u-left-75% u-translate-x--50%"
      padding="8px"
      flat
    >
      <div class="u-flex u-flex-gap-x-8px u-items-center">
        <span class="u-c-white u-text-24px ">了解更多</span>
        <div
          class="u-bg-fcp-yellow u-c-white u-rounded-100% u-w24px u-h24px u-text-24px u-lh-18px"
        >
          +
        </div>
      </div>
    </q-btn> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import banner1 from "@/assets/img/WEB-MAIN.png";
import banner4 from "@/assets/img/WEB-MAIN-完成使命.png";
import banner3 from "@/assets/img/WEB-MAIN-看見異象.png";
import banner2 from "@/assets/img/WEB-MAIN-夥伴同行.png";

const slide = ref(1);
</script>

<style lang="scss" scoped>
.moving-text:hover {
  animation-play-state: paused;
}

/* The animation */
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* media query to enable animation for only those who want it */
@media (prefers-reduced-motion: no-preference) {
  .moving-text {
    animation: marquee 5s linear infinite;
  }
}
</style>
