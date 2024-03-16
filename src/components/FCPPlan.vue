<script setup>
import FCPButton from "./FCPButton.vue";

import Programs_Offered_image from "@/assets/img/Programs-Offered-image.jpg";
import Teachers_image from "@/assets/img/Teachers-image.jpg";

const planingContent = [
  {
    cn: "工人靈命塑造",
    en: "Spiritial Life and Character Formation",
    icon: "FCP-icon-Spiritual Life and Character Formation",
  },
  {
    cn: "跨文化認識",
    en: "Understanding Cross Cultural Mission",
    icon: "FCP-icon-Understanding Cross Cultural Mission",
  },
  {
    cn: "語言學習與操練",
    en: "Language Learning & Practice",
    icon: "FCP-icon-Language Learning",
  },
  {
    cn: "穆宣事工發展",
    en: "Developing Ministries in the Islamic Context",
    icon: "FCP-icon-Developing Ministries",
  },
  {
    cn: "宣教團隊建造",
    en: "Missional team Development and Leadership",
    icon: "FCP-icon-Missional Team Development",
  },
  {
    cn: "一對一教練",
    en: "Diciple Making",
    icon: "FCP-icon-Disciple Making",
  },
  {
    cn: "海外實習",
    en: "Overseas Internship",
    icon: "FCP-icon-Overseas internship",
  },
];
</script>

<template>
  <div class="u-mb60px">
    <div class="u-mb16px u-relative u-pl60px">
      <FCPIcon
        name="FCP-mark(o)"
        class="u-w-84px u-h-84px u-absolute u-left--12px u-top--24px"
      />

      <p class="u-c-fcp-blue u-text-60px u-font-bold u-pt40px">全面計劃方向</p>
    </div>

    <div
      class="u-grid u-grid-cols-2 u-grid-rows-4 u-grid-gap-x-32px u-grid-gap-y-24px u-pl60px"
    >
      <div
        v-for="content in planingContent"
        class="u-col-span-1 u-flex u-flex-row u-items-center u-justify-start u-h100px u-flex-gap-16px"
      >
        <FCPIcon class="u-h100%" :name="content.icon" />

        <div class="u-flex u-flex-col u-items-start u-c-fcp-blue u-text-24px">
          <span class="u-font-bold">{{ content.cn }}</span>
          <span>{{ content.en }}</span>
        </div>
      </div>

      <FCPButton class="">
        <div>
          <span class="u-font-bold u-text-30px u-tracking-0.05em">
            看更多内容
          </span>
          <FCPIcon name="arrow_circle_right" class="u-ml16px" />
        </div>
      </FCPButton>
    </div>
  </div>

  <div class="u-mb60px">
    <div class="u-mb16px u-relative u-pl60px">
      <FCPIcon
        name="FCP-mark(o)"
        class="u-w-84px u-h-84px u-absolute u-left--12px u-top--24px"
      />

      <p class="u-c-fcp-blue u-text-60px u-font-bold u-pt40px">提供多元學制</p>
    </div>

    <div class="u-flex u-flex-row u-w100% u-h600px">
      <div
        class="u-bg-fcp-blue u-flex-grow u-flex u-flex-col u-justify-between u-px5% u-pt10% u-pb5% u-rounded-[200px_0_0_0] u-h100%"
      >
        <span
          class="u-c-fcp-green u-text-60px u-lh-70px u-tracking-0.05em u-font-unbounded"
        >
          Programs<br />Offered
        </span>

        <p class="u-tracking-0.025em">
          <span class="u-text-36px u-c-fcp-gray u-font-bold"
            >歡迎您依照自己的屬性，來參與
          </span>
          <span class="u-text-36px u-c-fcp-green u-font-bold">
            ——FCP穆宣工人團隊
          </span>
        </p>
      </div>
      <div class="u-wmax u-hmax">
        <img :src="Programs_Offered_image" alt="" />
      </div>
    </div>
  </div>

  <div class="u-mb60px">
    <div class="u-mb16px u-relative u-pl60px">
      <FCPIcon
        name="FCP-mark(o)"
        class="u-w-84px u-h-84px u-absolute u-left--12px u-top--24px"
      />

      <p class="u-c-fcp-blue u-text-60px u-font-bold u-pt40px">專業師資團隊</p>
    </div>

    <div class="u-flex u-flex-row u-w100% u-h600px">
      <div
        class="u-bg-fcp-green u-flex-grow u-flex u-flex-col u-justify-between u-px5% u-pt10% u-pb5% u-rounded-[200px_0_0_0] u-h100%"
      >
        <span
          class="u-c-fcp-blue u-text-60px u-lh-70px u-tracking-0.05em u-font-unbounded"
        >
          Teachers
        </span>

        <p class="u-tracking-0.025em">
          <span class="u-text-36px u-c-fcp-gray u-font-bold"
            >集結海内外的資深穆宣工人老師——
          </span>
          <span class="u-text-36px u-c-fcp-blue u-font-bold">
            以專業引您進禾場
          </span>
        </p>
      </div>
      <div class="u-wmax u-hmax">
        <img :src="Teachers_image" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
