<template>
  <div
    class="u-p-48px u-flex u-flex-col u-justify-center u-items-center u-bg-#3E3E40"
  >
    <div class="u-w-100% u-flex u-flex-row">
      <div>
        <img
          :src="LOGO_SQUARE"
          alt=""
          srcset=""
          class="u-h-300px u-cursor-pointer"
        />
      </div>
      <div
        class="u-py-36px u-grid u-grid-cols-4 u-grid-rows-3 u-grid-gap-16px u-flex-1"
      >
        <div
          class="u-col-span-1 u-row-span-3 u-flex u-flex-col u-items-center u-justify-between"
        >
          <div class="u-flex u-flex-col u-w-135px">
            <p class="u-text-20px u-fw-600 u-c-#A5C6BE u-text-left">
              About FCP
            </p>
            <p class="u-text-28px u-fw-600 u-c-#FFF u-text-right">關於我們</p>
          </div>
          <div class="u-flex u-flex-col u-flex-gap-y-8px">
            <span class="u-cursor-pointer u-c-#8D8D8F">源起</span>
            <span class="u-cursor-pointer u-c-#8D8D8F">使命異象</span>
            <span class="u-cursor-pointer u-c-#8D8D8F">核心價值</span>
            <span class="u-cursor-pointer u-c-#8D8D8F">特色</span>
            <span class="u-cursor-pointer u-c-#8D8D8F">師資陣容</span>
          </div>
        </div>
        <div
          class="u-col-span-1 u-row-span-3 u-flex u-flex-col u-items-center u-justify-between"
        >
          <div class="u-flex u-flex-col u-w-135px">
            <p class="u-text-20px u-fw-600 u-c-#A5C6BE u-text-left">Programs</p>
            <p class="u-text-28px u-fw-600 u-c-#FFF u-text-right">FCP訓練</p>
          </div>
          <div class="u-flex u-flex-col u-flex-gap-y-8px">
            <span class="u-cursor-pointer u-c-#8D8D8F">課程介紹</span>
            <span class="u-cursor-pointer u-c-#8D8D8F">申請報名</span>
            <span class="u-cursor-pointer u-c-#8D8D8F">實體全修班</span>
            <span class="u-cursor-pointer u-c-#8D8D8F">遠距進修生</span>
            <span class="u-cursor-pointer u-c-#8D8D8F">招生行事曆</span>
          </div>
        </div>
        <div class="u-col-span-1 u-flex u-flex-col u-items-center">
          <div class="u-flex u-flex-col u-w-135px">
            <p class="u-text-20px u-fw-600 u-c-#A5C6BE u-text-left">Events</p>
            <p class="u-text-28px u-fw-600 u-c-#FFF u-text-right">最新消息</p>
          </div>
        </div>
        <div class="u-col-span-1 u-flex u-flex-col u-items-center">
          <div class="u-flex u-flex-col u-w-135px">
            <p class="u-text-20px u-fw-600 u-c-#A5C6BE u-text-left">
              Support Us
            </p>
            <p class="u-text-28px u-fw-600 u-c-#FFF u-text-right">奉獻支持</p>
          </div>
        </div>
        <div class="u-col-span-1 u-flex u-flex-col u-items-center">
          <div class="u-flex u-flex-col u-w-135px">
            <p class="u-text-20px u-fw-600 u-c-#A5C6BE u-text-left">Resource</p>
            <p class="u-text-28px u-fw-600 u-c-#FFF u-text-right">影音資源</p>
          </div>
        </div>
        <div class="u-col-span-1 u-flex u-flex-col u-items-center">
          <div class="u-flex u-flex-col u-w-135px">
            <p class="u-text-20px u-fw-600 u-c-#A5C6BE u-text-left">
              Contact Us
            </p>
            <p class="u-text-28px u-fw-600 u-c-#FFF u-text-right">聯絡我們</p>
          </div>
        </div>
      </div>
    </div>
    <div></div>
    <q-separator inset class="u-w-100% u-bg-#8D8D8F" />
    <div>
      <p class="u-c-#8D8D8F">{{ COPY_RIGHT }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import LOGO_SQUARE from "@/assets/img/LOGO_SQUARE.jpeg";
import LINE from "@/assets/icons/LINE.png";
import IG from "@/assets/icons/IG.png";
import FB from "@/assets/icons/FB.png";
import { COPY_RIGHT } from "@/constants/general.js";
</script>

<style lang="scss" scoped></style>
