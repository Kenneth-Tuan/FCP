<template>
  <div class="u-flex u-flex-col u-justify-start">
    <FCPCarousel />
    <section
      name="main-content"
      class="u-flex u-flex-row u-justify-center u-items-center u-flex-nowrap"
    >
      <div
        class="left-tags u-font-unbounded u-c-fcp-gray u-text-60px u-text-nowrap"
      >
        <span v-for="n in 3">
          Visioning &#8226; Partnering &#8226; Fulfilling &#8226;</span
        >
      </div>
      <section
        class="u-w-100% u-flex u-flex-row u-justify-center u-items-center"
      >
        <p class="u-flex u-flex-col u-c-fcp-blue">
          <span class="u-font-bold">我們是誰？</span>
          <span class="u-font-unbounded">Frontier</span>
          <span class="u-font-unbounded">Commission</span>
          <span class="u-font-unbounded">Practcum</span>
          <span>*簡稱FCP</span>
        </p>
        <p class="u-flex u-flex-col u-">
          <span></span>
          <span></span>
          <span></span>
        </p>
      </section>
    </section>
    <img :src="CTA" class="u-w-100%" />
  </div>
</template>

<script setup lang="js">
import { ref } from "vue";

import FCPCarousel from '@/components/FCPCarousel.vue'
import CTA from '@/assets/img/CTA-image.png'
</script>

<style lang="scss" scoped>
.left-tags {
  writing-mode: vertical-lr;
}
</style>
