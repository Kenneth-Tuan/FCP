<template>
  <div class="u-flex u-flex-col u-justify-start u-h100% u-mxauto">
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
    <div class="u-w100% u-relative">
      <div
        class="u-c-white u-text-56px u-font-unbounded u-fw900 u-left-50% u-top-10% u-translate-x--50% u-absolute u-z-1 u-flex u-flex-col u-items-center u-justify-center u-text-nowrap"
      >
        <p>WALK WITH <span class="u-c-yellow">FCP</span></p>
        <p>ON YOUR CALLING WAY</p>
      </div>
      <q-btn
        round
        push
        @click="$router.push({ name: 'Events' })"
        padding="10px"
        class="u-absolute u-backdrop-blur-2 u-z-1 u-top-50% u-left-5% u-wmax u-hmax"
      >
        <div id="test" class="u-text-36px u-font-bold u-c-white u-w220px">
          點我瞭解報名資訊 · JOIN FCP ·
        </div>
      </q-btn>
      <div
        class="u-w100% u-h100% u-absolute u-bg-gradient-to-t u-from-white u-to-fcp-black u-opacity-20"
      ></div>
      <img :src="CTA" class="u-w-100%" />
    </div>
  </div>
</template>

<script setup lang="js">

import { Vue3Marquee } from 'vue3-marquee'
import CircleType from 'circletype'

import FCPCarousel from '@/components/FCPCarousel.vue'
import CTA from '@/assets/img/CTA-image.png'
import MainDescription from '@/components/MainDescription.vue'
import FCPSchoolInfo from '@/components/FCPSchoolInfo.vue'
import FCPPlan from '@/components/FCPPlan.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const text = new CircleType(document.querySelector('#test'))
})
</script>

<style lang="scss" scoped>
.left-tags {
  writing-mode: vertical-lr;
}
</style>
