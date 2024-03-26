<template>
  <div class="u-relative">
    <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      swipeable
      animated
      control-color="black"
      navigation-icon="radio_button_unchecked"
      navigation
      padding
      height="auto"
    >
      <q-carousel-slide
        name="style"
        class="u-p-0 u-flex u-flex-row u-justify-center u-items-center"
      >
        <img :src="banner1" alt="" srcset="" class="u-w-100%" />
      </q-carousel-slide>
      <q-carousel-slide
        name="tv"
        class="u-p-0 u-flex u-flex-row u-justify-center u-items-center"
      >
        <img :src="banner2" alt="" srcset="" class="u-w-100%" />
      </q-carousel-slide>
      <q-carousel-slide
        name="layers"
        class="u-p-0 u-flex u-flex-row u-justify-center u-items-center"
      >
        <img :src="banner3" alt="" srcset="" class="u-w-100%" />
      </q-carousel-slide>
      <q-carousel-slide
        name="map"
        class="u-p-0 u-flex u-flex-row u-justify-center u-items-center"
      >
        <img :src="banner4" alt="" srcset="" class="u-w-1280px" />
      </q-carousel-slide>
    </q-carousel>

    <q-btn
      @click="$router.push({ name: 'Events' })"
      class="u-rounded-[0_24px_0_24px] u-bg-fcp-blue u-absolute u-bottom-13% u-right-12%"
      padding="8px 8px"
      flat
      rounded
    >
      <div class="u-flex u-flex-row u-flex-gap-x-8px u-items-center">
        <span class="u-c-white u-text-48px u-font-regular">了解更多</span>
        <p
          class="u-bg-fcp-yellow u-c-white u-rounded-100% u-w48px u-h48px u-text-48px u-lh-36px"
        >
          +
        </p>
      </div>
    </q-btn>
  </div>
</template>

<script setup>
import { ref } from "vue";
import banner1 from "@/assets/img/WEB-MAIN.png";
import banner4 from "@/assets/img/WEB-MAIN-完成使命.png";
import banner3 from "@/assets/img/WEB-MAIN-看見異象.png";
import banner2 from "@/assets/img/WEB-MAIN-夥伴同行.png";

const slide = ref("style");
</script>

<style lang="scss" scoped></style>
