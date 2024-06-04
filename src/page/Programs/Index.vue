<template>
  <div class="u-pt50px">
    <div class="u-w100% u-hmax u-relative u-mb60px">
      <div class="u-c-fcp-gray u-absolute u-top-45% u-left-10%">
        <p class="u-flex u-flex-row u-items-center u-justify-start">
          <span class="u-font-bold u-tracking-0.2em">訓練介紹&nbsp;</span>
          <q-separator class="u-w100px u-bg-fcp-gray" size="1.7px" />
        </p>
        <span class="u-font-unbounded u-text-22px">PROGRAMS</span>
      </div>
      <div class="u-w100%">
        <img :src="Banner" alt="" class="u-w100%" />
      </div>
    </div>

    <div class="u-px60px u-mb60px">
      <FCPSubtitle
        subtitleMsg="FCP工人訓練方向"
        description="Training Contents"
        class="u-mb36px"
      />

      <KCarousel class="lg:u-mb120px sm:u-mb10%" :items="main">
        <template #item="{ title, en, icon, description, index }">
          <div
            class="u-relative u-h400px u-flex-row u-justify-end u-items-start"
            :class="{ 'lg:u-flex sm:u-hidden': 'display' }"
          >
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

            <div
              class="u-h400px u-mt60px u-pl180px u-pt48px u-pr24px u-pb24px u-bg-fcp-gray u-w80% u-rounded-[0_0_0_60px] u-overflow-hidden"
            >
              <p
                class="u-flex u-flex-row u-justify-start u-items-center u-mb24px"
              >
                <q-separator
                  class="u-bg-fcp-yellow u-mr16px"
                  size="8px"
                  vertical
                />
                <span
                  class="u-text-24px u-c-fcp-blue u-font-unbounded u-fw700 u-tracking-0.05em"
                >
                  {{ en || "Spiritual Life and Character Formation" }}
                </span>
              </p>

              <p class="u-c-fcp-black u-text-24px u-pl24px">
                {{ description }}
              </p>
            </div>
          </div>

          <div
            :class="{
              'sm:u-block lg:u-hidden u-overflow-hidden': 'display',
              'u-rounded-24px u-aspect-ratio-4/3': 'shape',
              'u-bg-fcp-gray': 'color',
              'u-p2% u-flex u-flex-col u-flex-gap-y-24px': 'spacing',
            }"
          >
            <div
              class="u-w80% u-mxauto u-bg-fcp-yellow u-p2% u-flex u-flex-col u-justify-start u-items-center u-rounded-24px"
            >
              <FCPIcon
                :name="icon"
                class="u-w30% u-aspect-ratio-1 u-p5% u-rounded-100% u-bg-white"
              />

              <span class="u-c-white u-font-bold u-text-24px">{{
                title || "工人靈命塑造"
              }}</span>
            </div>

            <p
              class="u-p5% u-text-18px u-c-fcp-blue u-font-unbounded u-fw700 u-tracking-0.05em u-text-center"
            >
              {{ en }}
            </p>

            <p class="u-c-fcp-black u-text-14px u-p5%">{{ description }}</p>
          </div>
        </template>
      </KCarousel>

      <div
        class="u-grid lg:u-grid-cols-2 md:u-grid-cols-1 u-grid-rows-4 u-grid-gap-24px u-items-center u-mb80px"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="u-flex u-flex-row u-items-end u-mxauto u-w100% u-group"
        >
          <div
            class="u-mr16px u-text-24px u-lh-24px u-font-unbounded u-fw900 u-c-fcp-gray"
            :class="{
              'group-hover:u-c-fcp-yellow  u-transition-all u-duration-300ms u-ease-in-out':
                'animation',
            }"
          >
            {{ index + 1 }}/
          </div>
          <div
            class="u-flex u-flex-row u-items-center u-px5% u-flex-1"
            :class="{
              'u-border-solid u-border-width-[0_0_8px_0] u-border-fcp-gray':
                'border',
              'group-hover:u-border-fcp-yellow u-transition-all u-duration-300ms u-ease-in-out':
                'animation',
            }"
          >
            <component :is="item.icon" class="u-w84px u-h84px u-mr16px" />
            <div class="u-c-fcp-blue u-flex u-flex-col u-items-start">
              <span class="u-font-heavy u-tracking-0.2em u-text-24px">{{
                item.cn || `工人靈命塑造`
              }}</span>
              <span class="u-lh-24px">{{
                item.en || " Spiritual Life and Character Formation"
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <FCPSubtitle
        subtitleMsg="FCP的學制類別"
        description="Programs OOffered by FCP"
        class="u-mb36px"
      />

      <div class="u-w100% u-flex u-flex-col u-items-center">
        <div
          class="u-w80% lg:u-h222px sm:u-min-h222px sm:u-hauto u-bg-fcp-green u-relative u-rounded-[100px_0_0_0] u-mb32px u-overflow-hidden"
        >
          <div
            class="u-pl60px u-py40px u-absolute u-z-2"
            :class="[
              {
                'u-h100% u-w100% ': 'size',
                'u-flex u-flex-col u-items-left u-justify-center': 'layout',
                'u-absolute u-z-2': 'pos',
              },
              'u-c-white md-hover:u-backdrop-blur-3 md:u-backdrop-blur-0 sm:u-backdrop-blur-3',
            ]"
          >
            <p class="u-c-white u-text-48px u-text-nowrap">
              <span>實體</span>
              <span class="u-font-bold">全修班</span>
            </p>
            <div
              class="u-flex u-flex-row u-flex-wrap u-justify-start u-c-white u-flex-gap-x-16px"
            >
              <div class="u-flex u-flex-col u-items-center u-justify-center">
                <span class="u-fw900 u-text-24px">4個月</span>
                <p class="u-bg-fcp-blue u-px8px u-text-nowrap u-fw600">
                  專業課程訓練
                </p>
              </div>

              <q-separator class="u-bg-fcp-gray" size="1px" vertical />

              <div class="u-flex u-flex-col u-items-center u-justify-center">
                <span class="u-fw900 u-text-24px">2個月</span>
                <p class="u-bg-fcp-blue u-px8px u-text-nowrap u-fw600">
                  專業課程訓練
                </p>
              </div>

              <q-separator class="u-bg-fcp-gray" size="1px" vertical />

              <div class="u-flex u-flex-col u-items-center u-justify-center">
                <span class="u-fw900 u-text-24px">1個月</span>
                <p class="u-bg-fcp-blue u-px8px u-text-nowrap u-fw600">
                  專業課程訓練
                </p>
              </div>
            </div>
          </div>

          <div class="u-h100% u-absolute u-z-1 u-top-0 u-right-0">
            <img :src="inPersonCourseImg" alt="" class="u-h100%" />
          </div>

          <div
            class="u-w100% u-bg-white u-h16px u-absolute u-z-2 u-bottom-0"
          ></div>

          <div
            class="u-absolute u-bottom-0 u-right-0 u-z-3 u-bg-white u-pt16px u-pl16px u-rounded-[30px_0_0_0]"
          >
            <q-btn
              @click="$router.push({ name: 'full_course' })"
              class="u-bg-fcp-black u-rounded-[20px_0_20px_0]"
              padding="10px 18px"
              flat
            >
              <span class="u-c-white u-text-18px u-font-bold u-tracking-0.1em">
                了解更多
              </span>
            </q-btn>
          </div>
        </div>

        <div
          class="u-w80% u-flex lg:u-flex-row lg:u-flex-gap-x-32px sm:u-flex-col sm:u-flex-gap-y-32px"
        >
          <div
            :class="[
              {
                'u-flex lg:u-flex-1 lg:u-justify-end lg:u-items-start sm:u-justify-center sm:u-items-center':
                  'layout',
                'u-relative': 'pos',
              },
              'u-bg-fcp-green u-overflow-hidden u-h220px u-rounded-[100px_0_0_0]',
            ]"
          >
            <div
              :class="[
                {
                  'u-h100% u-w100% ': 'size',
                  'u-flex u-flex-col u-items-center u-justify-center': 'layout',
                  'u-absolute u-z-2': 'pos',
                },
                'u-c-white md-hover:u-backdrop-blur-3 md:u-backdrop-blur-0 sm:u-backdrop-blur-3',
              ]"
            >
              <p class="u-text-48px">
                <span>線上</span>
                <span class="u-font-bold">選修班</span>
              </p>
              <div class="u-flex lg:u-flex-col sm:u-flex-row u-flex-gap-12px">
                <p
                  class="u-bg-fcp-blue u-px8px u-text-nowrap u-fw600 u-w115px u-text-center"
                >
                  一年兩學期制
                </p>
                <p
                  class="u-bg-fcp-blue u-px8px u-text-nowrap u-fw600 u-w115px u-text-center"
                >
                  訪宣補助
                </p>
              </div>
            </div>

            <div class="u-h100% u-absolute u-z-1 u-left-0">
              <img :src="onlineCourseImg" alt="" class="u-h100%" />
            </div>

            <div
              class="u-w100% u-bg-white u-h12px u-absolute u-z-2 u-bottom-0"
            ></div>

            <div
              class="u-absolute u-bottom-0 u-right-0 u-z-3 u-bg-white u-pt16px u-pl16px u-rounded-[30px_0_0_0]"
            >
              <q-btn
                @click="$router.push({ name: 'online_elective_course' })"
                class="u-bg-fcp-black u-rounded-[20px_0_20px_0]"
                padding="10px 18px"
                flat
              >
                <span
                  class="u-c-white u-text-18px u-font-bold u-tracking-0.1em"
                >
                  了解更多
                </span>
              </q-btn>
            </div>
          </div>

          <div
            :class="[
              {
                'u-flex lg:u-flex-1 lg:u-justify-end lg:u-items-start sm:u-justify-center sm:u-items-center':
                  'layout',
                'u-relative': 'pos',
              },
              'u-bg-fcp-green u-overflow-hidden u-h220px u-rounded-[100px_0_0_0]',
            ]"
          >
            <div
              :class="[
                {
                  'u-h100% u-w100% ': 'size',
                  'u-flex u-flex-col u-items-center u-justify-center': 'layout',
                  'u-absolute u-z-2': 'pos',
                },
                'u-c-white md-hover:u-backdrop-blur-3 md:u-backdrop-blur-0 sm:u-backdrop-blur-3',
              ]"
            >
              <p class="u-c-white u-text-48px">
                <span>自由</span>
                <span class="u-font-bold">選課生</span>
              </p>
              <div class="u-flex lg:u-flex-col sm:u-flex-row u-flex-gap-12px">
                <p
                  class="u-bg-fcp-blue u-px8px u-text-nowrap u-fw600 u-w115px u-text-center"
                >
                  無期限學習
                </p>
                <p
                  class="u-bg-fcp-blue u-px8px u-text-nowrap u-fw600 u-w115px u-text-center"
                >
                  隨處隨時進修
                </p>
              </div>
            </div>

            <div class="u-h100% u-absolute u-z-1 u-left-0">
              <img :src="freeCourseImg" alt="" class="u-h100%" />
            </div>

            <div
              class="u-w100% u-bg-white u-h12px u-absolute u-z-2 u-bottom-0"
            ></div>

            <div
              class="u-absolute u-bottom-0 u-right-0 u-z-3 u-bg-white u-pt16px u-pl16px u-rounded-[30px_0_0_0]"
            >
              <q-btn
                @click="$router.push({ name: 'free_elective_course' })"
                class="u-bg-fcp-black u-rounded-[20px_0_20px_0]"
                padding="10px 18px"
                flat
              >
                <span
                  class="u-c-white u-text-18px u-font-bold u-tracking-0.1em"
                >
                  了解更多
                </span>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";

import FCPSubtitle from "@/components/FCPSubtitle.vue";
import Banner from "@/assets/img/programs/programs_page.png";
import KCarousel from "@/components/KCarousel.vue";
import inPersonCourseImg from "@/assets/img/programs/inPersonCourse.png";
import onlineCourseImg from "@/assets/img/programs/onlineCourse.png";
import freeCourseImg from "@/assets/img/programs/freeCourse.png";

const items = computed(() => [
  {
    cn: "工人靈命塑造",
    en: "Spiritial Life and Character Formation",
    icon: defineAsyncComponent(() =>
      import(
        "@/assets/icons/FCP-icon-Spiritual Life and Character Formation.svg"
      )
    ),
  },
  {
    cn: "跨文化認識",
    en: "Understanding Cross Cultural Mission",
    icon: defineAsyncComponent(() =>
      import("@/assets/icons/FCP-icon-Understanding Cross Cultural Mission.svg")
    ),
  },
  {
    cn: "語言學習與操練",
    en: "Language Learning & Practice",
    icon: defineAsyncComponent(() =>
      import("@/assets/icons/FCP-icon-Language Learning.svg")
    ),
  },
  {
    cn: "穆宣事工發展",
    en: "Developing Ministries in the Islamic Context",
    icon: defineAsyncComponent(() =>
      import("@/assets/icons/FCP-icon-Developing Ministries.svg")
    ),
  },
  {
    cn: "宣教團隊建造",
    en: "Missional team Development and Leadership",
    icon: defineAsyncComponent(() =>
      import("@/assets/icons/FCP-icon-Missional Team Development.svg")
    ),
  },
  {
    cn: "一對一教練",
    en: "Diciple Making",
    icon: defineAsyncComponent(() =>
      import("@/assets/icons/FCP-icon-Disciple Making.svg")
    ),
  },
  {
    cn: "海外實習",
    en: "Overseas Internship",
    icon: defineAsyncComponent(() =>
      import("@/assets/icons/FCP-icon-Overseas internship.svg")
    ),
  },
]);

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
