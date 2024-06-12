<template>
  <div class="u-flex u-flex-col u-justify-start u-h100% u-mxauto u-pt50px">
    <FCPCarousel class="u-mb24px" />
    <section
      name="main-content"
      class="u-px5% u-flex u-justify-center u-items-start u-flex-nowrap u-h100% u-mb48px"
    >
      <!-- <div style="height: 100%; width: max-content">
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
      </div> -->
      <section class="u-w100% u-flex u-flex-col u-flex-gap-y-48px">
        <MainDescription />
        <FCPSchoolInfo />
        <ComprehensivePlanningDirection />
        <MainDescription2
          title="提供多元學制"
          subtitle="Programs Offered"
          :image="Programs_Offered_image"
          routeTargetName="full_course"
        >
          <template #description>
            <p
              class="u-tracking-0.025em lg:u-text-36px sm:u-text-24px u-font-bold"
            >
              <span class="u-c-fcp-gray"> 歡迎您依照自己的屬性，來參與 </span>
              <span class="u-c-fcp-green"> —— FCP穆宣工人團隊 </span>
            </p>
          </template>
        </MainDescription2>
        <MainDescription2
          title="專業師資團隊"
          subtitle="Teachers"
          :image="Teachers_image"
          routeTargetName="AboutUs"
        >
          <template #description>
            <p
              class="u-tracking-0.025em lg:u-text-36px sm:u-text-24px u-font-bold"
            >
              <span class="u-c-fcp-gray">集結海内外的資深穆宣工人老師 </span>
              <span class="u-c-fcp-green"> —— 以專業引您進禾場 </span>
            </p>
          </template>
        </MainDescription2>
      </section>
    </section>

    <MainCTA />
  </div>
</template>

<script setup lang="js">
import FCPCarousel from '@/components/FCPCarousel.vue'
import MainDescription from '@/components/MainDescription.vue'
import FCPSchoolInfo from '@/components/FCPSchoolInfo.vue'
import Programs_Offered_image from "@/assets/img/Programs-Offered-image.jpg";
import Teachers_image from "@/assets/img/Teachers-image.jpg";
import MainDescription2 from "@/components/MainDescription2.vue";
import ComprehensivePlanningDirection from "@/components/ComprehensivePlanningDirection.vue";
import MainCTA from "@/components/MainCTA.vue";
</script>

<style lang="scss" scoped>
.left-tags {
  writing-mode: vertical-lr;
}
</style>
