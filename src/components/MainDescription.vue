<template>
  <div class="u-w100% u-flex u-justify-around u-items-center">
    <p class="u-flex u-flex-col u-c-fcp-blue">
      <span class="u-font-bold md:u-text-18px sm:u-text-12px">我們是誰？</span>
      <span class="u-font-unbounded md:u-text-32px sm:u-text-18px"
        >Frontiers</span
      >
      <span class="u-font-unbounded md:u-text-32px sm:u-text-18px"
        >Commission</span
      >
      <span class="u-font-unbounded md:u-text-32px sm:u-text-18px"
        >Practcum</span
      >
      <span class="md:u-text-14px sm:u-text-10px">*簡稱FCP</span>
    </p>

    <div
      :class="{
        'md:u-text-28px sm:u-text-14px u-tracking-tighter': 'text',
        'u-c-fcp-black': 'color',
        'u-flex u-flex-col u-flex-gap-y-16px': 'layout',
      }"
    >
      <div class="u-flex u-flex-nowrap u-items-center">
        <div
          class="u-square-1 u-bg-fcp-green u-mr12px u-rounded-[50%_0px_0px_0px]"
        ></div>
        <span>陪伴穆宣工人，回應呼召實現使命</span>
      </div>

      <div class="u-flex u-flex-nowrap u-items-center">
        <div
          class="u-square-1 u-bg-fcp-yellow u-mr12px u-rounded-[50%_0px]"
        ></div>
        <span>培育穆宣工人，具備完成使命能力</span>
      </div>

      <div class="u-flex u-flex-nowrap u-items-center">
        <div
          class="u-square-1 u-bg-fcp-blue u-mr12px u-rounded-[0px_0px_50%_0px]"
        ></div>
        <span>發展穆宣禾場，點燃穆宣運動火炬</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
