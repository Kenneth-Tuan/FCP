<template>
  <div>
    <q-carousel
      v-model="slide"
      transition-prev="jump-right"
      transition-next="jump-left"
      swipeable
      animated
      control-color="black"
      prev-icon="arrow_left"
      next-icon="arrow_right"
      navigation-icon="radio_button_unchecked"
      navigation
      padding
      arrows
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
