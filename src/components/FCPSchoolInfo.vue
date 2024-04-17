<template>
  <div
    class=""
    :class="{
      'u-bg-fcp-green-1': 'color',
      'u-p5% ': 'spacing',
      'lg:u-rounded-72px md:u-rounded-60px sm:u-rounded-48px': 'shape',
      'u-flex u-flex-col u-flex-gap-y-36px': 'layout',
      'u-relative': 'position',
    }"
  >
    <FCPIcon
      name="FCP-mark(green)"
      class="u-w108px u-h108px u-absolute u-left-80px u-top--54px"
      fill="u-c-fcp-green-1"
    />

    <div class="u-c-fcp-blue">
      <p class="lg:u-text-48px md:u-text-36px sm:u-text-24px u-font-heavy">
        前線穆宣工人訓練學校
      </p>
      <p class="lg:u-text-24px md:u-text-12px">
        *亦稱「前線穆宣訓練中心」/「穆訓」
      </p>
    </div>

    <FCPSubtitle subtitleMsg="FCP的使命" description="Our Mission" />

    <div class="u-flex u-justify-center u-items-center">
      <div class="u-aspect-ratio-1 u-w20% u-min-w24px u-mr-48px">
        <img :src="FCP_LOGO_CIRCLE" alt="" class="u-w100% u-aspect-ratio-1" />
      </div>
      <div
        class="u-flex u-flex-col u-justify-center u-flex-gap-y-10% u-items-start"
      >
        <div>
          <p class="u-c-black u-text-24px u-font-bold">
            <span class="u-c-fcp-blue">裝備</span>並<span class="u-c-fcp-blue"
              >差派</span
            >基督的門徒進入穆宣禾場，<br class="lg:u-block sm:u-hidden" /><span
              class="u-c-fcp-blue"
              >以愛和尊重</span
            >邀請穆斯林群體跟隨耶穌基督。
          </p>
        </div>

        <p class="u-c-white u-text-18px u-font-unbounded">
          Equip and empower disciples of Jesus to invite all Muslim peoples,<br
            class="lg:u-block sm:u-hidden"
          />
          with love and respect to follow Jesus.
        </p>
      </div>
    </div>

    <div
      class="u-w100% u-bg-fcp-gray u-flex u-justify-between u-px5% u-rounded-[60px_0]"
    >
      <div class="u-w30% u-flex u-flex-row u-items-center u-justify-center">
        <img :src="FTWSB_LOGO" alt="" class="u-w80% u-h-80%" />
      </div>
      <q-separator spaced inset vertical color="white" size="2px" />
      <div class="u-w30%">
        <img :src="HLLLT_LOGO" alt="" class="u-w-100% u-h-100%" />
      </div>
      <q-separator spaced inset vertical color="white" size="2px" />
      <div class="u-w30% u-flex u-flex-row u-items-center u-justify-center">
        <img :src="BIRS_LOGO" alt="" class="u-w-80% u-h-80%" />
      </div>
    </div>

    <FCPSubtitle
      subtitleMsg="FCP的4大目標"
      description="Our Program Descripion"
    />

    <div
      :class="{
        'u-flex u-flex-gap-x-24px u-justify-center': 'layout',
        'u-font-bold lg:u-text-32px md:u-text-24px sm:u-text-14px': 'text',
      }"
    >
      <div
        v-for="item in programDescription"
        :class="{
          'md:u-rounded-[72px_0_0_0] sm:u-rounded-[16px_0_0_0]': 'shape',
          'u-flex u-flex-col u-justify-start u-items-start': 'layout',
          'u-overflow-hidden': 'display',
        }"
      >
        <div class="u-overflow-hidden u-flex u-items-center u-justify-center">
          <img :src="item.img" alt="" class="u-w100%" />
        </div>
        <div
          class="u-w100% u-bg-fcp-yellow u-text-center u-flex u-items-center u-justify-center lg:u-p16px md:u-p8px sm:u-p4px"
        >
          {{ item.title }}
        </div>
      </div>
    </div>

    <FCPSubtitle
      subtitleMsg="FCP穆宣工人的培訓特色"
      description="Why Choose FCP?"
    />

    <div
      class="u-flex u-flex-row u-justify-center u-items-center u-flex-gap-x-24px"
    >
      <div
        v-for="item in contentOfWhyChooseFcp"
        :key="item.month"
        class="u-p4% u-w25% u-aspect-ratio-1 u-overflow-hidden u-bg-fcp-black u-rounded-[15%]"
        :class="{
          'u-flex u-flex-col u-items-center u-justify-center': 'layout',
          ' u-group hover:u-bg-fcp-blue u-transition-all u-duration-300ms u-ease-in-out':
            'animation',
        }"
      >
        <p class="u-c-fcp-green">
          <span
            :class="{ 'lg:u-text-48px md:u-text-32px sm:u-text-16px': 'text' }"
            >{{ item.month }}</span
          >
          <span
            class="u-text-32px"
            :class="{ 'lg:u-text-32px md:u-text-22px sm:u-text-12px': 'text' }"
            >個月</span
          >
        </p>
        <p
          class="u-c-white u-text-center"
          :class="{
            'lg:u-text-48px md:u-text-32px sm:u-text-12px': 'text',
            'group-hover:u-font-heavy u-transition-all u-duration-300ms u-ease-in-out':
              'animation',
          }"
          v-html="item.description"
        ></p>
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

const programDescription = [
  {
    title: "發展以實戰培訓訓練模式",
    img: PROGRAM_DESCRIPTION_1,
  },
  {
    title: "建立師徒傳承的生命關係",
    img: PROGRAM_DESCRIPTION_2,
  },
  {
    title: "建構跨越環境的使徒團隊",
    img: PROGRAM_DESCRIPTION_3,
  },
  {
    title: "突破伊斯蘭處境建立教會",
    img: PROGRAM_DESCRIPTION_4,
  },
];
</script>
