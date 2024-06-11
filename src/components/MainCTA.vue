<script setup>
import { onMounted } from "vue";
// import CircleType from "circletype";

import CTA from "@/assets/img/CTA-image.png";

// onMounted(() => {
//   const text = new CircleType(document.querySelector("#test"));
// });
</script>

<template>
  <div class="u-w100% u-relative">
    <div
      class="u-c-white lg:u-text-56px md:u-text-36px sm:u-text-18px u-font-unbounded u-fw900 u-left-50% u-top-10% u-translate-x--50% u-absolute u-z-1 u-flex u-flex-col u-items-center u-justify-center u-text-nowrap"
    >
      <p>WALK WITH <span class="u-c-yellow">FCP</span></p>
      <p>ON YOUR CALLING WAY</p>
    </div>

    <!-- <q-btn
      round
      push
      @click="$router.push({ name: 'Events' })"
      padding="10px"
      class="u-absolute u-backdrop-blur-2 u-z-1 u-bottom-0 u-left-10% u-translate--50% u-aspect-ratio-1"
      :class="{ 'lg:u-block sm:u-hidden': 'display' }"
    >
      <div id="test" class="u-text-36px u-font-bold u-c-white u-w220px">
        點我瞭解報名資訊 · JOIN FCP ·
      </div>
    </q-btn> -->
    <div class="u-absolute u-z-1 u-bottom-1% u-left-50% u-translate--50%">
      <q-btn
        rounded
        push
        padding="10px 24px"
        class="u-backdrop-blur-10"
        @click="$router.push({ name: 'full_course' })"
      >
        <p
          class="lg:u-text-36px lg:u-lh-36px sm:u-text-18px u-font-bold u-c-white u-text-nowrap"
        >
          點我瞭解報名資訊 <br />· JOIN FCP ·
        </p>
      </q-btn>
    </div>

    <div
      class="u-w100% u-h100% u-absolute u-bg-gradient-to-t u-from-white u-to-fcp-black u-opacity-20"
    ></div>
    <img :src="CTA" class="u-w100%" />
  </div>
</template>

<style lang="scss" scoped></style>
