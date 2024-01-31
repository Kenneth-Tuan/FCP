<template>
  <div class="u-flex u-flex-col u-justify-start">
    <FCPCarousel />
    <section
      name="main-content"
      class="u-flex u-flex-row u-justify-center u-items-start u-flex-nowrap"
    >
      <div
        class="left-tags u-font-unbounded u-c-fcp-gray u-text-60px u-text-nowrap u-pl-16px"
      >
        <span v-for="n in 3">
          Visioning &#8226; Partnering &#8226; Fulfilling &#8226;</span
        >
      </div>
      <section class="u-w-100%">
        <MainDescription />
        <FCPSchoolInfo />
      </section>
    </section>
    <img :src="CTA" class="u-w-100%" />
  </div>
</template>

<script setup lang="js">

import FCPCarousel from '@/components/FCPCarousel.vue'
import CTA from '@/assets/img/CTA-image.png'
import MainDescription from '@/components/MainDescription.vue'
import FCPSchoolInfo from '@/components/FCPSchoolInfo.vue'
</script>

<style lang="scss" scoped>
.left-tags {
  writing-mode: vertical-lr;
}
</style>
