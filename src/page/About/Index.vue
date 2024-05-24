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

        <p>
          團隊事奉在穆宣場域多年，兩件重要的事呈現在眼前：一是穆宣禾場真的極為龐大，而19億穆斯林的禾場正在經歷聖靈大能的作為，一波波穆斯林歸主浪潮正在發生著，許多穆斯林渴望歸向基督。但另一件挑戰是，莊稼熟了卻缺少收割莊稼的工人
        </p>

        <!-- YT -->
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import FCPSubtitle from "@/components/FCPSubtitle.vue";
import Banner from "@/assets/img/about/about_page.png";
import FCPButton from "@/components/FCPButton.vue";
</script>

<style lang="scss" scoped>
.left-tags {
  writing-mode: vertical-lr;
}
</style>
