<script setup>
import Programs_Offered_image from "@/assets/img/Programs-Offered-image.jpg";
import Teachers_image from "@/assets/img/Teachers-image.jpg";
import MainDescription2 from "@/components/MainDescription2.vue";
import ComprehensivePlanningDirection from "@/components/ComprehensivePlanningDirection.vue";
</script>

<template>
  <div class="u-mb60px">
    <ComprehensivePlanningDirection />
  </div>

  <MainDescription2
    title="提供多元學制"
    subtitle="Programs Offered"
    :image="Programs_Offered_image"
    routeTargetName="full_course"
    bgColor="blue"
    fontColor="green"
  >
    <template #description>
      <p class="u-tracking-0.025em">
        <span class="u-text-36px u-c-fcp-gray u-font-bold">
          歡迎您依照自己的屬性，來參與
        </span>
        <span class="u-text-36px u-c-fcp-green u-font-bold">
          ——FCP穆宣工人團隊
        </span>
      </p>
    </template>
  </MainDescription2>

  <MainDescription2
    title="專業師資團隊"
    subtitle="Teachers"
    :image="Teachers_image"
    routeTargetName="teachers"
    bgColor="green"
    fontColor="blue"
  >
    <template #description>
      <p class="u-tracking-0.025em">
        <span class="u-text-36px u-c-fcp-gray u-font-bold"
          >集結海内外的資深穆宣工人老師——
        </span>
        <span class="u-text-36px u-c-fcp-blue u-font-bold">
          以專業引您進禾場
        </span>
      </p>
    </template>
  </MainDescription2>
</template>

<style lang="scss" scoped></style>
