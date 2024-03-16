<template>
  <div class="u-mxauto u-w1366px">
    <div class="u-wmax u-hmax u-relative u-mb60px">
      <div class="u-c-fcp-gray u-absolute u-top-45% u-left-10%">
        <p class="u-flex u-flex-row u-items-center u-justify-start">
          <span class="u-font-bold u-tracking-0.2em">訓練介紹&nbsp;</span>
          <q-separator class="u-w100px u-bg-fcp-gray" size="1.7px" />
        </p>
        <span class="u-font-unbounded u-text-22px">PROGRAMS</span>
      </div>
      <img :src="Banner" alt="" />
    </div>

    <div class="u-pl60px u-mb60px">
      <FCPSubtitle
        subtitleMsg="FCP工人訓練方向"
        description="Training Contents"
        class="u-mb36px"
      />

      <KCarousel :items="main">
        <!-- <template #item="{ cn, en, icon }"> // for testing
          <div class="item">
            <div class="">
              <FCPIcon :name="icon || 'FCP-icon-Developing Ministries'" />
              <p>
                <span>{{ cn || "工人領命塑造" }}</span>
                <span>
                  {{ en || "Spiritual Life and Character Formation" }}
                </span>
              </p>
            </div>
          </div>
        </template> -->
        <template #item="{ title, en, icon, description, index }">
          <div class="u-relative u-h400px">
            <div
              class="u-absolute u-top-0 u-left-0 u-bg-fcp-yellow u-w30% u-aspect-ratio-1 u-z-1 u-flex u-flex-col u-justify-center u-items-center u-rounded-[0_30%_0_30%]"
            >
              <div
                class="u-flex u-flex-col u-justify-center u-items-center u-relative"
              >
                <div
                  class="u-c-white u-text-30px u-font-unbounded u-absolute u-top--5 u-left--5"
                >
                  #{{ index + 1 }}
                </div>
                <FCPIcon
                  :name="icon"
                  class="u-w70% u-aspect-ratio-1 u-p5% u-rounded-100% u-bg-white u-mb24px"
                />
                <span class="u-c-white u-font-bold u-text-36px">{{
                  title || "工人靈命塑造"
                }}</span>
              </div>
            </div>
            <div class="u-bottom-0 u-right-0 u-bg-fcp-green u-w80%">
              <p>
                <q-separator class="u-bg-fcp-yellow" size="3px" vertical />
                <span>
                  {{ en || "Spiritual Life and Character Formation" }}
                </span>
              </p>
              <span>
                {{ description }}
              </span>
            </div>
          </div>
        </template>
      </KCarousel>
    </div>
  </div>
</template>

<script setup>
import FCPSubtitle from "@/components/FCPSubtitle.vue";
import Banner from "@/assets/img/programs/programs_page.png";
import KCarousel from "@/components/KCarousel.vue";

const items = [
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

const main = [
  {
    index: 0,
    title: "工人靈命塑造",
    en: "Spiritial Life and Character Formation",
    icon: "FCP-icon-Spiritual Life and Character Formation",
    description:
      "Spiritual Life and Character Formation is a core value of FCP. We believe that the spiritual life of a worker is the foundation of his or her ministry. We aim to help workers to grow in their spiritual life and character, and to develop a deep and intimate relationship with God. We also aim to help workers to develop a Christ-like character, and to be a person of integrity, humility, and love.",
  },
  {
    index: 1,
    title: "跨文化認識",
    en: "Understanding Cross Cultural Mission",
    icon: "FCP-icon-Understanding Cross Cultural Mission",
    description:
      "Understanding Cross Cultural Mission is a core value of FCP. We believe that understanding the culture and religion of the people to whom we are sent is essential for effective ministry. We aim to help workers to understand the culture and religion of the people to whom they are sent, and to develop a deep and intimate relationship with them. We also aim to help workers to develop a Christ-like character, and to be a person of integrity, humility, and love.",
  },
  {
    index: 2,
    title: "語言學習與操練",
    en: "Language Learning & Practice",
    icon: "FCP-icon-Language Learning",
    description:
      "Language Learning & Practice is a core value of FCP. We believe that learning the language of the people to whom we are sent is essential for effective ministry. We aim to help workers to learn the language of the people to whom they are sent, and to develop a deep and intimate relationship with them. We also aim to help workers to develop a Christ-like character, and to be a person of integrity, humility, and love.",
  },
  {
    index: 3,
    title: "穆宣事工發展",
    en: "Developing Ministries in the Islamic Context",
    icon: "FCP-icon-Developing Ministries",
    description:
      "Developing Ministries in the Islamic Context is a core value of FCP. We believe that understanding the culture and religion of the people to whom we are sent is essential for effective ministry. We aim to help workers to understand the culture and religion of the people to whom they are sent, and to develop a deep and intimate relationship with them. We also aim to help workers to develop a Christ-like character, and to be a person of integrity, humility, and love.",
  },
  {
    index: 4,
    title: "宣教團隊建造",
    en: "Missional team Development and Leadership",
    icon: "FCP-icon-Missional Team Development",
    description:
      "Missional team Development and Leadership is a core value of FCP. We believe that understanding the culture and religion of the people to whom we are sent is essential for effective ministry. We aim to help workers to understand the culture and religion of the people to whom they are sent, and to develop a deep and intimate relationship with them. We also aim to help workers to develop a Christ-like character, and to be a person of integrity, humility, and love.",
  },
  {
    index: 5,
    title: "一對一教練",
    en: "Diciple Making",
    icon: "FCP-icon-Disciple Making",
    description:
      "Diciple Making is a core value of FCP. We believe that understanding the culture and religion of the people to whom we are sent is essential for effective ministry. We aim to help workers to understand the culture and religion of the people to whom they are sent, and to develop a deep and intimate relationship with them. We also aim to help workers to develop a Christ-like character, and to be a person of integrity, humility, and love.",
  },
  {
    index: 6,
    title: "海外實習",
    en: "Overseas Internship",
    icon: "FCP-icon-Overseas internship",
    description:
      "Overseas Internship is a core value of FCP. We believe that understanding the culture and religion of the people to whom we are sent is essential for effective ministry. We aim to help workers to understand the culture and religion of the people to whom they are sent, and to develop a deep and intimate relationship with them. We also aim to help workers to develop a Christ-like character, and to be a person of integrity, humility, and love.",
  },
];
</script>

<style lang="scss" scoped></style>
