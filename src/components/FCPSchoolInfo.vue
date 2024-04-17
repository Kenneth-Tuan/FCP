<template>
  <div
    class=""
    :class="{
      'u-bg-fcp-green-1': 'color',
      'u-py48px u-px36px': 'spacing',
      'u-rounded-72px': 'shape',
      'u-flex u-flex-col u-flex-gap-y-36px': 'layout',
      'u-relative': 'position',
    }"
  >
    <FCPIcon
      name="FCP-mark(green)"
      class="u-w108px u-h108px u-absolute u-left-80px u-top-54px"
      fill="u-c-fcp-green-1"
    />

    <div class="">
      <p class="u-c-fcp-blue u-text-48px u-font-heavy u-pl-72px">
        前線穆宣工人訓練學校
      </p>
      <p class="u-c-fcp-blue u-pl-72px u-text-24px">
        *亦稱「前線穆宣訓練中心」/「穆訓」
      </p>
    </div>

    <div class="u-pl-84px u-relative">
      <FCPIcon
        name="FCP-mark(blue)"
        class="u-w-84px u-h-84px u-absolute u-left--12px u-top--24px"
      />
      <div class="u-flex u-flex-row u-flex-nowrap u-items-center">
        <P class="u-c-fcp-blue u-text-24px u-font-heavy u-mr-24px">FCP的使命</P>
        <q-separator class="u-flex-1 u-bg-fcp-blue" size="1.5px" />
      </div>
      <p class="u-c-white u-text-36px u-lh-36px u-font-unbounded">
        Our Mission
      </p>
    </div>

    <div class="u-flex u-flex-row u-pl-72px">
      <div class="u-h-180px u-w-180px u-mr-48px">
        <img :src="FCP_LOGO_CIRCLE" alt="" class="u-w-100% u-h-100%" />
      </div>
      <div class="u-flex u-flex-col u-justify-between u-items-start u-flex-1">
        <div>
          <p class="u-c-black u-text-24px u-font-bold">
            <span class="u-c-fcp-blue">裝備</span>並<span class="u-c-fcp-blue">
              差派
            </span>
            基督的門徒進入穆宣禾場，
          </p>
          <p class="u-c-black u-text-24px u-font-bold">
            <span class="u-c-fcp-blue"> 以愛和尊重 </span>
            邀請穆斯林群體跟隨耶穌基督。
          </p>
        </div>

        <p class="u-c-white u-text-18px u-font-unbounded u-pr-108px">
          Equip and empower disciples of Jesus to invite all Muslim peoples,
          with love and respect to follow Jesus.
        </p>
      </div>
    </div>

    <div
      class="u-bg-fcp-gray u-h-max u-flex u-flex-row u-justify-between u-px-48px u-rounded-[96px_0_96px_0] u-ml-84px u-mr-60px"
    >
      <div class="u-w-30% u-flex u-flex-row u-items-center u-justify-center">
        <img :src="FTWSB_LOGO" alt="" class="u-w-80% u-h-80%" />
      </div>
      <q-separator spaced inset vertical color="white" size="2px" />
      <div class="u-w-30%">
        <img :src="HLLLT_LOGO" alt="" class="u-w-100% u-h-100%" />
      </div>
      <q-separator spaced inset vertical color="white" size="2px" />
      <div class="u-w-30% u-flex u-flex-row u-items-center u-justify-center">
        <img :src="BIRS_LOGO" alt="" class="u-w-80% u-h-80%" />
      </div>
    </div>

    <FCPSubtitle
      subtitleMsg="FCP的4大目標"
      description="Our Program Descripion"
    />

    <div class="u-grid u-grid-cols-4 u-grid-gap-36px">
      <div class="u-col-span-1 u-rounded-[72px_0_0_0] u-overflow-hidden">
        <p
          class="u-text-center u-bg-fcp-yellow u-font-bold u-text-32px u-pb16px"
        >
          <img
            :src="PROGRAM_DESCRIPTION_1"
            alt=""
            class="u-w100% u-h100% u-mb16px"
          />
          發展以實戰培訓<br />訓練模式
        </p>
      </div>
      <div class="u-col-span-1 u-rounded-[72px_0_0_0] u-overflow-hidden">
        <p
          class="u-text-center u-bg-fcp-yellow u-font-bold u-text-32px u-pb16px"
        >
          <img
            :src="PROGRAM_DESCRIPTION_2"
            alt=""
            class="u-w100% u-h100% u-mb16px"
          />
          建立師徒傳承的<br />生命關係
        </p>
      </div>
      <div class="u-col-span-1 u-rounded-[72px_0_0_0] u-overflow-hidden">
        <p
          class="u-text-center u-bg-fcp-yellow u-font-bold u-text-32px u-pb16px"
        >
          <img
            :src="PROGRAM_DESCRIPTION_3"
            alt=""
            class="u-w100% u-h100% u-mb16px"
          />
          建構跨越環境的<br />使徒團隊
        </p>
      </div>
      <div class="u-col-span-1 u-rounded-[72px_0_0_0] u-overflow-hidden">
        <p
          class="u-text-center u-bg-fcp-yellow u-font-bold u-text-32px u-pb16px"
        >
          <img
            :src="PROGRAM_DESCRIPTION_4"
            alt=""
            class="u-w100% u-h100% u-mb16px"
          />
          突破伊斯蘭處境<br />建立教會
        </p>
      </div>
    </div>

    <FCPSubtitle
      subtitleMsg="FCP穆宣工人的培訓特色"
      description="Why Choose FCP?"
    />

    <div class="u-flex u-flex-row u-justify-center u-flex-gap-x-24px">
      <div
        v-for="item in contentOfWhyChooseFcp"
        :key="item.month"
        class="u-w20% u-p24px u-aspect-ratio-1 u-bg-fcp-black u-rounded-25px u-flex u-flex-col u-items-center u-justify-start u-group hover:u-bg-fcp-blue u-transition-all u-duration-300ms u-ease-in-out"
      >
        <p class="u-c-fcp-green">
          <span class="u-text-48px">{{ item.month }}</span>
          <span class="u-text-30px">個月</span>
        </p>
        <span
          class="u-c-white u-text-48px u-text-center group-hover:u-font-heavy u-transition-all u-duration-300ms u-ease-in-out"
          v-html="item.description"
        >
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import FCP_LOGO_CIRCLE from "@/assets/icons/FCP-logo-circle.png";
import BIRS_LOGO from "@/assets/img/logo-BIRS.png";
import FTWSB_LOGO from "@/assets/img/logo-FTWSB.png";
import HLLLT_LOGO from "@/assets/img/logo-花蓮靈糧堂.png";
import PROGRAM_DESCRIPTION_1 from "@/assets/img/Programs-Description-image-1.jpg";
import PROGRAM_DESCRIPTION_2 from "@/assets/img/Programs-Description-image-2.jpg";
import PROGRAM_DESCRIPTION_3 from "@/assets/img/Programs-Description-image-3.jpg";
import PROGRAM_DESCRIPTION_4 from "@/assets/img/Programs-Description-image-4.jpg";
import FCPSubtitle from "./FCPSubtitle.vue";

const contentOfWhyChooseFcp = [
  {
    month: "7",
    description: "全時間<br />培訓",
  },
  {
    month: "4",
    description: "課程<br />訓練",
  },
  {
    month: "2",
    description: "海外<br />實習",
  },
  {
    month: "1",
    description: "回顧<br />加強",
  },
];
</script>
