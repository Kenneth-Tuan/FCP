<script setup lang="js">
import { ref } from 'vue'

import FCPSubtitle from "@/components/FCPSubtitle.vue";
import Banner from "@/assets/img/about/about_page.png";
import Poster2 from '@/assets/img/about/about_poster_2.jpeg'
import Feature1 from "@/assets/img/about/實體全修班｜七個月課程.jpeg"
import Feature2 from "@/assets/img/about/FCP課程介紹.jpeg"
import Feature3 from '@/assets/img/about/FCP五大面向課程.jpeg'
import pastor_tree from '@/assets/img/about/Pastor-Tree.jpeg'
import pastor_tsai from '@/assets/img/about/Pastor-TSAI.jpeg'
import pastor_yc from '@/assets/img/about/Pastor-YC.jpeg'


const coreValuesInfo = [
  {title: '專注', description: '專注於穆斯林歸主運動，致力在群體中建立教會。'},
  {title: '專業', description: '專業訓練裝備工人能力，穆宣禾場有效完成任務。'},
  {title: '品格', description: '看重工人生命品格門訓，工人品格與事奉生命。'},
  {title: '團隊', description: '看重工人恩慈發展配搭，恩慈相待的團隊關係。'},
  {title: '夥伴', description: '看重與教會、神學院、機構、工場團隊夥伴關係。'},
]

const slide = ref('tree')
const mentersInfo = [
  {
    tag: 'tree',
    name: '大樹 牧師',
    descriptions: ['前線差會訓練中心創辦人暨執行長', '中華福音神學院跨文化宣教博士班研究', '國立政治大學中東、中亞所研究', '為資深宣教士、穆宣訓練專員', '現任中華福音神學院穆光研訓中心主任', '台灣前線差會創辦人暨總幹事'],
    remarks: '宣教士格言：「為主不保留、不退縮、不後悔。 No Reserves, No Retreats, No Regret.」(Willan W Bordan, 1887 - 1913)',
    avatar: pastor_tree
  },
  {
    tag: 'tsai',
    name: '蔡俊杰 牧師',
    descriptions: ['前線穆宣工人訓練中心校長', '中華福音神學院神學碩士科畢業', '曾任靈糧教牧宣教神學院專任教師(1997-2005)', '花蓮靈糧堂開拓暨現任牧師'],
    remarks: '宣教士格言：「神只有一個兒子，祂卻使他成了宣教士。而我在地上的志業是搶救靈魂。」David Livingstone, 1813-1873）(Willam W Bordan, 1887-1913)',
    avatar: pastor_tsai
  },
  {
    tag: 'yc',
    name: 'YC亞馳 牧師／博士',
    descriptions: ['台灣前線差會海外部主任', '建築學士、MBA、教育腦神經科學博士', '心理諮詢師、企業領航教練'],
    remarks: '於2009年開始全職跨文化宣教事工，主要負擔為創啟地區之「未得之民、未得之地」的開荒及植堂。其先後於東南亞，中國西南部和中東等地服事，從營商、教育和NGO管道進入社區，建立關係和推動事工。',
    avatar: pastor_yc
  },
]

const oneOnOneConsultationDescription = `穆宣禾場遍佈全球、極為龐大、不同的區域使用的語言、文化、處境都有所不同，每一位穆宣工人的呼召使命與需要面對的文化處境也不同，因此所需要的預備也不盡相同；FCP希望能幫助已領受穆宣異象的您，找到最合適您量身訂製回應呼召的下一步計畫。一對一諮詢服務，不僅讓我們彼此更認識，同時能共同了解FCP訓練是否是現階段最適合您的培訓計畫。`
</script>

<template>
  <div class="u-mxauto u-pt50px">
    <div class="u-w100% u-hmax u-relative u-mb60px">
      <div class="u-c-fcp-gray u-absolute u-top-45% u-left-10%">
        <p class="u-flex u-flex-row u-items-center u-justify-start">
          <span class="u-font-bold u-tracking-0.2em">關於我們&nbsp;</span>
          <q-separator class="u-w100px u-bg-fcp-gray" size="1.7px" />
        </p>
        <span class="u-font-unbounded u-text-22px">ABOUT US</span>
      </div>

      <img :src="Banner" alt="" class="u-w100%" />
    </div>

    <div class="u-px60px u-mb60px u-flex u-flex-col u-flex-gap-y-60px">
      <div class="">
        <FCPSubtitle
          subtitleMsg="源起"
          description="Our Story"
          class="u-mb36px"
        />

        <p class="u-c-fcp-black md:u-text-24px md:u-px60px u-mb36px">
          團隊事奉在穆宣場域多年，兩件重要的事呈現在眼前：一是穆宣禾場真的極為龐大，而19億穆斯林的禾場正在經歷聖靈大能的作為，一波波穆斯林歸主浪潮正在發生著，許多穆斯林渴望歸向基督。但另一件挑戰是，莊稼熟了卻缺少收割莊稼的工人。
          <br />五年前開始跟神禱告，求主賜給我們一個可以培訓穆宣工人的訓練中心，不斷地禱告，不間斷的預備，終於，在2023年神開始啟動成就這事，我們不是做我們想做的事，而是要做神啟動的事。2024年「前線穆宣工人訓練中心」要正式運作，求主打發願意接受裝備、預備自己進入穆宣禾場的工人，一同參與成就神在穆民中的美好心意。
        </p>

        <div class="u-mxauto u-rounded-24px u-overflow-hidden">
          <div class="u-aspect-ratio-16/9">
            <iframe
              class="u-w100% u-h100%"
              src="https://www.youtube.com/embed/MwWGuNEtp98?si=hD_umUl9FEBSLcWv"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <p
            class="u-c-fcp-yellow u-bg-fcp-black u-text-center md:u-text-24px md:u-py8px u-fw700"
          >
            We equip, empower & release. <br />
            You gain hands·on, practical, cross·cultural.
          </p>
        </div>
      </div>

      <div class="u-flex u-flex-col u-justify-start u-items-center">
        <FCPSubtitle
          subtitleMsg="核心價值"
          description="Core Values"
          class="u-mb36px u-w100%"
        />
        <div
          class="u-flex u-justify-start u-flex-gap-x-24px u-flex-gap-y-16px u-flex-wrap"
        >
          <div
            v-for="(coreValueInfo, index) in coreValuesInfo"
            class="u-rounded-16px u-overflow-hidden u-c-fcp-gray"
            :class="[
              'u-w255px',
              'u-text-center',
              'u-py8px u-px24px',
              `${(index + 1) % 2 === 0 ? 'u-bg-fcp-blue' : 'u-bg-fcp-green'}`,
            ]"
          >
            <p
              class="u-fw700 u-text-24px"
              :class="[
                `${(index + 1) % 2 === 0 ? 'u-c-fcp-green' : 'u-c-fcp-blue'}`,
              ]"
            >
              {{ coreValueInfo.title }}
            </p>
            <q-separator inset class="u-bg-fcp-gray u-my8px" />
            <p class="u-fw600 u-text-18px u-break-words">
              {{ coreValueInfo.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="">
        <FCPSubtitle
          subtitleMsg="訓練特色"
          description="Our Feature"
          class="u-mb36px u-w100%"
        />
        <div class="u-flex u-flex-col u-flex-gap-16px">
          <div
            :class="[
              'u-flex',
              {
                'sm:u-flex-col md:u-flex-row u-flex-gap-16px': 'layout',
              },
            ]"
          >
            <q-img :src="Feature1" />
            <q-img :src="Feature2" />
          </div>
          <q-img :src="Feature3" />
        </div>
      </div>

      <div class="">
        <FCPSubtitle
          subtitleMsg="師資團隊"
          description="Our Mentors"
          class="u-mb36px u-w100%"
        />

        <q-carousel
          v-model="slide"
          transition-prev="jump-right"
          transition-next="jump-left"
          animated
          control-color="white"
          navigation
          swipeable
          padding
          arrows
          height="auto"
        >
          <q-carousel-slide
            v-for="menterInfo in mentersInfo"
            :index="menterInfo.tag"
            :name="menterInfo.tag"
            class="u-w100% u-p0! u-mxauto"
          >
            <q-card
              class="lg:u-max-w70% sm:u-max-w480px u-mxauto u-c-fcp-gray u-rounded-12px u-flex lg:u-flex-row sm:u-flex-col"
              style="
                background: radial-gradient(circle, #f2f2f2 0%, #d6dadb 100%);
              "
            >
              <q-card-section>
                <div class="u-rounded-[0_16px] u-py2% lg:u-min-w480px">
                  <q-img :src="menterInfo.avatar" :ratio="1" />
                </div>
              </q-card-section>

              <div class="u-flex u-flex-col u-justify-between">
                <q-card-section>
                  <p
                    class="sm:u-text-20px lg:u-text-36px u-c-fcp-blue u-fw700 u-mb8px"
                  >
                    {{ menterInfo.name }}
                  </p>
                  <div class="u-c-fcp-black lg:u-text-20px sm:u-text-12px">
                    <li v-for="description in menterInfo.descriptions">
                      {{ description }}
                    </li>
                  </div>
                </q-card-section>

                <q-card-section>
                  <div
                    class="u-flex u-flex-row u-items-start u-flex-nowrap u-justify-start u-flex-gap-x-12px"
                  >
                    <q-separator
                      inset
                      vertical
                      class="u-bg-fcp-yellow"
                      size="2px"
                    />

                    <p
                      class="sm:u-text-12px lg:u-text-20px u-c-fcp-yellow u-fw600"
                    >
                      {{ menterInfo.remarks }}
                    </p>
                  </div>
                </q-card-section>
              </div>
            </q-card>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <div
      class="u-relative u-aspect-ratio-16/9 u-flex u-flex-col u-justify-center u-items-center u-flex-gap-y-16px u-pt24px u-overflow-hidden"
    >
      <q-btn
        class="u-bg-fcp-green u-c-fcp-gray u-rounded-[30px_0] u-px24px!"
        icon-right="touch_app"
        noCaps
      >
        <p class="u-text-left">
          <span class="u-fw700 u-tracking-0.2em u-text-18px"
            >一對一諮詢預約登記表</span
          ><br />
          <span class="u-tracking-0.1em">One·on·One Consultation</span>
        </p>
      </q-btn>

      <div class="u-px5%">
        <q-separator class="u-bg-fcp-gray" size="1px" />
        <p
          class="u-px2% u-my2% u-c-fcp-gray lg:u-text-24px md:u-text-18px sm:u-text-10px"
        >
          {{ oneOnOneConsultationDescription }}
        </p>
        <q-separator class="u-bg-fcp-gray" size="1px" />
      </div>

      <q-img
        class="u-absolute u-top-0 u-left-0 u-z--1 u-opacity-80"
        :src="Poster2"
        :ratio="16 / 9"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left-tags {
  writing-mode: vertical-lr;
}
</style>
