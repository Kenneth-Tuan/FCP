<template>
  <div class="u-mxauto u-w1366px">
    <div class="u-wmax u-hmax u-relative u-mb60px">
      <div class="u-c-fcp-gray u-absolute u-top-45% u-left-10%">
        <p class="u-flex u-flex-row u-items-center u-justify-start">
          <span class="u-font-bold u-tracking-0.2em">聯絡我們&nbsp;</span>
          <q-separator class="u-w100px u-bg-fcp-gray" size="1.7px" />
        </p>
        <span class="u-font-unbounded u-text-22px">CONTACT US</span>
      </div>
      <img :src="Banner" alt="" />
    </div>

    <div class="u-pl60px u-mb60px">
      <FCPSubtitle
        subtitleMsg="聯絡資訊 ｜ 留言表單"
        description="Get in Touch"
        class="u-mb36px"
      />

      <div class="u-grid u-grid-cols-3 u-grid-gap-x-16px">
        <div
          class="u-bg-fcp-gray u-flex u-flex-col u-items-center u-flex-gap-y-8px u-c-white u-rounded-25%"
        >
          <FCPIcon name="location_on_white_48dp" />
          <span>辦公室地址</span>
          <span>ADDRESS</span>
          <q-separator class="u-w50px u-bg-fcp-gray" size="1.5px" />
          <span>待更新</span>
          <span>（預備搬遷中）</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Banner from "@/assets/img/events/events_page.png"; // temp
</script>

<style lang="scss" scoped></style>
