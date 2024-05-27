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
          團隊事奉在穆宣場域多年，兩件重要的事呈現在眼前：一是穆宣禾場真的極為龐大，而19億穆斯林的禾場正在經歷聖靈大能的作為，一波波穆斯林歸主浪潮正在發生著，許多穆斯林渴望歸向基督。但另一件挑戰是，莊稼熟了卻缺少收割莊稼的工人
        </p>

        <div class="u-mxauto u-rounded-24px u-overflow-hidden">
          <div class="u-aspect-ratio-16/9">
            <iframe
              class="u-w100% u-h100%"
              src="https://www.youtube.com/embed/WYcpL6otp_Y?si=8PJRSTvCQi72Gcs2"
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

      <div class="">
        <FCPSubtitle
          subtitleMsg="核心價值"
          description="Core Values"
          class="u-mb36px"
        />
        <div class="u-grid u-grid-flow-row">
          <div
            class="u-rounded-16px u-overflow-hidden u-c-fcp-gray"
            :class="[
              { 'u-bg-fcp-green': true },
              'u-text-center',
              'u-py2% u-px5%',
            ]"
          >
            <p class="u-fw700 u-text-24px u-c-fcp-blue">title</p>
            <q-separator inset class="u-bg-fcp-gray" />
            <p class="u-fw600 u-text-18px">description</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import FCPSubtitle from "@/components/FCPSubtitle.vue";
import Banner from "@/assets/img/about/about_page.png";
import FCPButton from "@/components/FCPButton.vue";

const coreValuesList = [
  {title: '專注', description: '專注於穆斯林歸主運動，致力在群體中建立教會。'},
  {title: '專業', description: '專業訓練裝備工人能力，穆宣禾場有效完成任務。'},
  {title: '品格', description: '看重工人生命品格門訓，工人品格與事奉生命。'},
  {title: '專業', description: '專業訓練裝備工人能力，穆宣禾場有效完成任務。'},
  {title: '專業', description: '專業訓練裝備工人能力，穆宣禾場有效完成任務。'},
]
</script>

<style lang="scss" scoped>
.left-tags {
  writing-mode: vertical-lr;
}
</style>
