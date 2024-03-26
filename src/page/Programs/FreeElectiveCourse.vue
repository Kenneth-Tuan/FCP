<template>
  <div class="u-mxauto u-max-w1440px">
    <div class="u-w100% u-hmax u-relative u-mb60px">
      <div
        class="u-c-fcp-gray u-absolute u-top-45% u-left-50% u-translate--50%"
      >
        <p class="u-flex u-flex-row u-items-center u-justify-start">
          <span class="u-font-bold u-tracking-0.2em">學制介紹&nbsp;</span>
          <q-separator class="u-w100px u-bg-fcp-gray" size="1px" />
        </p>
        <p class="u-flex u-flex-row u-text-48px u-pl24px u-fw900">
          <span class="u-c-fcp-yellow">自由</span>
          選課班
        </p>
      </div>

      <q-btn
        padding="20px"
        class="u-absolute u-bottom-10% u-left-50% u-translate--50% u-bg-fcp-green u-rounded-[24px_0_24px_0]"
        @click="scrollToSpecificTag('#howToRegister')"
      >
        <span class="u-c-fcp-blue u-font-bold u-text-36px">申請報名</span>
      </q-btn>
      <img :src="OnlineElectiveCoursePoster" alt="" class="u-w100%" />
    </div>

    <div class="u-pl60px">
      <FCPSubtitle
        subtitleMsg="報名資訊"
        description="Registration Information"
        class="u-mb36px"
      />

      <div class="u-pl30px u-mb48px">
        <div class="u-flex u-flex-row u-items-center u-mb24px">
          <p class="u-font-bold u-text-24px">{{ "合適對象" }}</p>
          <q-separator
            class="u-bg-fcp-black u-rotate--45 u-w26px"
            size="1.5px"
          />
        </div>
        <div class="u-mb36px u-pl30px u-text-18px u-font-bold">
          <p class="u-w60%">
            對穆斯林宣教有負擔，願意從認識、理解、參與穆宣事工，並進而願意支持、差派穆宣工人的教會牧長、宣教同工及弟兄姊妹，這是一個為您及教會精心預備的穆宣裝備。
          </p>
        </div>

        <div class="u-flex u-flex-row u-items-center u-mb24px">
          <p class="u-font-bold u-text-24px">{{ "訓練介紹" }}</p>
          <q-separator
            class="u-bg-fcp-black u-rotate--45 u-w26px"
            size="1.5px"
          />
        </div>
        <div class="u-mb36px u-pl30px u-text-18px u-font-bold">
          <li class="">不受時間限制，依您所需，進入系統報名課程</li>
          <li>上課模式：主要為線上影音學習(不定期開放實體及線上課程報名)</li>
          <li>無需繳交作業、考試</li>
        </div>

        <!-- 訓練費用項目 -->
        <div class="u-flex u-flex-row u-items-center u-mb24px">
          <p class="u-font-bold u-text-24px">{{ "訓練費用項目" }}</p>
          <q-separator
            class="u-bg-fcp-black u-rotate--45 u-w26px"
            size="1.5px"
          />
        </div>
        <div
          class="u-flex u-flex-row u-justify-start u-items-center u-flex-gap-x-16px"
        >
          <div
            class="u-border-solid u-border-fcp-blue u-border-1px u-rounded-[0_36px_0_0] u-overflow-hidden"
          >
            <div
              class="u-h120px u-pt16px u-px32px u-bg-fcp-blue u-flex u-flex-col u-items-center u-justify-start u-c-white"
            >
              <p class="u-font-heavy u-text-36px">每門課程10 - 15小時</p>
              <p>*牧者傳道另享學費優惠</p>
            </div>
            <p
              class="u-c-fcp-blue u-font-bold u-text-24px u-text-center u-p16px"
            >
              NT$2,000
            </p>
          </div>

          <div
            class="u-border-solid u-border-fcp-blue u-border-1px u-rounded-[0_36px_0_0] u-overflow-hidden"
          >
            <div
              class="u-h120px u-pt16px u-px32px u-bg-fcp-blue u-flex u-flex-col u-items-center u-justify-start u-c-white"
            >
              <p class="u-font-heavy u-text-36px">一次選三門課程</p>
              <p>*牧者傳道另享學費優惠</p>
            </div>
            <p
              class="u-c-fcp-yellow u-font-bold u-text-24px u-text-center u-p16px"
            >
              NT$5,000
            </p>
          </div>
        </div>
      </div>

      <!-- 申請辦法 -->
      <FCPSubtitle
        id="howToRegister"
        subtitleMsg="申請辦法"
        description="How to Registar?"
        class="u-mb36px"
      />
      <div class="u-pl30px u-mb48px">
        <div class="u-flex u-flex-row u-items-center u-mb24px">
          <p class="u-font-bold u-text-24px">{{ "如何申請報名？" }}</p>
          <q-separator
            class="u-bg-fcp-black u-rotate--45 u-w26px"
            size="1.5px"
          />
        </div>
        <div class="u-pl30px u-text-18px u-font-bold">
          <li>不需報名費</li>
          <li>請填寫下方「前線穆宣工人訓練中心自由選課」google表單申請</li>
          <li>加入「FCP自由選課」line群組，即可收到最新開課訊息</li>
          <li>隨時報名您想選的課程</li>
          <div class="u-w100% u-flex u-justify-center u-mt16px">
            <q-btn
              @click="onClick"
              padding="18px 36px"
              class="u-bg-fcp-green u-rounded-[36px_0_36px_0]"
            >
              <span class="u-c-fcp-blue u-text-24px u-font-heavy">
                立即申請「自由選課」
              </span>
            </q-btn>
          </div>
        </div>
      </div>

      <FCPSubtitle
        subtitleMsg="常見問題"
        description="F.A.Q."
        class="u-mb36px"
      />

      <div class="u-pl30px u-flex u-flex-col u-flex-gap-y-16px u-mb36px">
        <FAQ />
        <FAQ />
        <FAQ />
        <FAQ />
      </div>

      <div
        class="u-w80% u-mxauto u-h300px u-relative u-rounded-[60px_0_0_0] u-overflow-hidden u-mb32px"
      >
        <div
          class="u-w100% u-h100% u-bg-gradient-to-t u-from-white u-to-fcp-blue u-opacity-100"
        ></div>
        <div
          class="u-flex u-flex-col u-items-center u-justify-start u-absolute u-z-1 u-top-25% u-left-25%"
        >
          <p
            class="u-text-center u-tracking-0.1em u-font-bold u-text-18px u-c-fcp-black"
          >
            還有更多疑問嗎？
          </p>
          <p
            class="u-text-center u-tracking-0.1em u-font-bold u-text-18px u-c-fcp-black u-mb16px"
          >
            歡迎聯繫或留言給我們
          </p>
          <q-btn
            class="u-rounded-[36px_0_36px_0] u-bg-fcp-blue"
            padding="12px 32px"
            @click="() => router.push({ name: 'ContactUs' })"
          >
            <span class="u-c-white u-text-24px u-tracking-0.2em u-font-heavy">
              聯絡我們
            </span>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import OnlineElectiveCoursePoster from "@/assets/img/programs/Programs-2.jpg";
import FCPSubtitle from "@/components/FCPSubtitle.vue";
import FAQ from "@/components/FAQ.vue";
import router from "@/router";
import { scrollToSpecificTag } from "@/utils/misc.js";
</script>

<style lang="scss" scoped></style>
