<template>
  <div class="u-w100%">
    <div
      class="u-mb16px u-relative"
      :class="{ 'lg:u-pl60px sm:u-pl48px': 'pos' }"
    >
      <FCPIcon
        name="FCP-mark(o)"
        :class="[
          {
            'lg:u-w84px sm:u-w60px': 'dimension',
            'u-left--16px': 'pos',
          },
          'u-aspect-ratio-1 u-absolute ',
        ]"
      />

      <p
        :class="[
          {
            'lg:u-pt40px sm:u-pt24px': 'spacing',
            'lg:u-text-60px sm:u-text-36px u-font-bold ': 'text',
          },
          `u-c-fcp-blue`,
        ]"
      >
        全面計劃方向
      </p>
    </div>

    <div
      class="u-grid lg:u-grid-cols-2 u-grid-rows-4 u-grid-gap-x-32px u-grid-gap-y-36px"
      :class="{ 'lg:u-pl60px sm:u-pl48px': 'pos' }"
    >
      <div
        v-for="content in planingContent"
        class="u-col-span-1 u-flex u-flex-row u-items-center u-justify-start u-h100px u-flex-gap-16px"
      >
        <FCPIcon class="u-w20% u-max-w100px u-min-w60px" :name="content.icon" />

        <div
          class="u-flex u-flex-col u-items-start u-c-fcp-blue u-text-24px u-lh-36px"
        >
          <span class="u-font-bold">{{ content.cn }}</span>
          <span>{{ content.en }}</span>
        </div>
      </div>

      <div class="u-flex u-items-center">
        <FCPButton @click="$router.push({ name: 'Programs' })">
          <div class="">
            <span class="u-font-bold u-text-30px u-tracking-0.05em">
              看更多内容
            </span>
            <!-- <FCPIcon name="arrow_circle_right" class="u-ml16px" /> -->
          </div>
        </FCPButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import FCPButton from "./FCPButton.vue";
import SpiritialListAndCharacterFormation from "@/assets/icons/FCP-icon-Spiritual Life and Character Formation.svg";
import UnderstandingCrossCulturalMission from "@/assets/icons/FCP-icon-Understanding Cross Cultural Mission.svg";
import LanguageLearning from "@/assets/icons/FCP-icon-Language Learning.svg";
import DevelopingMinistries from "@/assets/icons/FCP-icon-Developing Ministries.svg";
import MissionalTeamDevelopment from "@/assets/icons/FCP-icon-Missional Team Development.svg";
import DiscipleMaking from "@/assets/icons/FCP-icon-Disciple Making.svg";
import OverseasInternship from "@/assets/icons/FCP-icon-Overseas internship.svg";

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

<style lang="scss" scoped></style>
