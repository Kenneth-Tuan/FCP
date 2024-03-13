<template>
  <div
    class="u-flex u-flex-col u-justify-start u-h100% u-mxauto"
    :class="{ 'u-w1440px': 'lg' }"
  >
    <FCPCarousel />
    <section
      name="main-content"
      class="u-flex u-flex-row u-justify-center u-items-start u-flex-nowrap u-h100%"
    >
      <div style="height: 100%; width: max-content">
        <Vue3Marquee
          :vertical="true"
          :gradient="true"
          :gradient-color="[255, 255, 255]"
          gradient-length="30%"
        >
          <span
            class="left-tags u-font-unbounded u-c-fcp-gray u-text-60px u-text-nowrap"
          >
            Visioning &#8226; Partnering &#8226; Fulfilling &#8226;
          </span>
        </Vue3Marquee>
      </div>
      <section class="u-w-100%">
        <MainDescription />
        <FCPSchoolInfo />
        <FCPPlan />
      </section>
    </section>
    <img :src="CTA" class="u-w-100%" />
  </div>
</template>

<script setup lang="js">

import { Vue3Marquee } from 'vue3-marquee'

import FCPCarousel from '@/components/FCPCarousel.vue'
import CTA from '@/assets/img/CTA-image.png'
import MainDescription from '@/components/MainDescription.vue'
import FCPSchoolInfo from '@/components/FCPSchoolInfo.vue'
import FCPPlan from '@/components/FCPPlan.vue'
</script>

<style lang="scss" scoped>
.left-tags {
  writing-mode: vertical-lr;
}
</style>
