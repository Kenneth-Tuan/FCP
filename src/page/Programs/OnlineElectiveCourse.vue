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
          <span class="u-c-fcp-yellow">線上</span>
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
      <img :src="FreeElectiveCourse" alt="" class="u-w100%" />
    </div>

    <div class="u-pl60px">
      <FCPSubtitle
        subtitleMsg="報名資訊"
        description="Registration Information"
        class="u-mb36px"
      />

      <div class="u-pl30px u-mb48px">
        <div class="u-flex u-flex-row u-items-center u-mb24px">
          <p class="u-font-bold u-text-24px">{{ "招生對象" }}</p>
          <q-separator
            class="u-bg-fcp-black u-rotate--45 u-w26px"
            size="1.5px"
          />
        </div>
        <div class="u-mb36px u-pl30px u-text-18px u-font-bold">
          <li>
            已領受對穆斯林宣教異象，尚未接受過穆宣訓練、想更清楚如何預備自己的弟兄姐妹
          </li>
          <li>每周願意分別出1個時段委身上課者(周三晚上7:00~10:00)</li>
        </div>

        <div class="u-flex u-flex-row u-items-center u-mb24px">
          <p class="u-font-bold u-text-24px">{{ "報考資格" }}</p>
          <q-separator
            class="u-bg-fcp-black u-rotate--45 u-w26px"
            size="1.5px"
          />
        </div>
        <div class="u-mb36px u-pl30px u-text-18px u-font-bold">
          <li>年滿18嵗，專科以上學歷，已重生得救，並獲教會推薦</li>
          <li>穩定健康的教會生活，並活出美好的生命見證</li>
          <li>曾參加過宣教心視野、EWI培訓者優先錄取</li>
        </div>

        <div class="u-flex u-flex-row u-items-center u-mb24px">
          <p class="u-font-bold u-text-24px">{{ "訓練内容概要" }}</p>
          <q-separator
            class="u-bg-fcp-black u-rotate--45 u-w26px"
            size="1.5px"
          />
        </div>
        <div class="u-mb36px u-pl30px u-text-18px u-font-bold">
          <li>一年(兩學期)課程，班級/學年制，需完成作業與課程要求</li>
          <li>每學年兩次實體聚集(團隊連結、工場分享等)</li>
          <li>兩次資深宣教士一對一談話輔導</li>
          <li>參與一次跨文化短宣(自由報名，全勤者可申請短宣獎學金)</li>
          <li>完成一年訓練後，報考全時間訓練免報名費</li>
        </div>

        <!-- 訓練費用項目 -->
        <div class="u-flex u-flex-row u-items-center u-mb24px">
          <p class="u-font-bold u-text-24px">{{ "訓練費用" }}</p>
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
              <p class="u-font-heavy u-text-36px">報名費</p>
              <p>含行政費</p>
            </div>
            <p
              class="u-c-fcp-blue u-font-bold u-text-24px u-text-center u-p16px"
            >
              NT$500
            </p>
          </div>

          <div
            class="u-border-solid u-border-fcp-blue u-border-1px u-rounded-[0_36px_0_0] u-overflow-hidden"
          >
            <div
              class="u-h120px u-pt16px u-px32px u-bg-fcp-blue u-flex u-flex-col u-items-center u-justify-start u-c-white"
            >
              <p class="u-font-heavy u-text-36px">一學年26周課程訓練費</p>
              <p>*以上學費不含跨文化短宣費用</p>
            </div>
            <p
              class="u-c-fcp-blue u-font-bold u-text-24px u-lh-24px u-text-center u-pb16px u-h70px"
            >
              <span class="u-line-through u-text-18px">(原價NT$16,000)</span
              ><br />
              7/15前報名繳費
              <span class="u-c-fcp-yellow"> 享早鳥價 NT$12,000 </span>
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
      <div class="u-pl30px u-mb24px u-relative">
        <p class="u-font-bold u-text-24px">如何申請報名？</p>
        <div class="u-pl30px u-text-18px u-font-bold">
          <li>報名費：NT$500</li>
          <li>郵寄書面文件至：</li>
          <div class="u-pl25px">
            <p>臺北郵政84-34號信箱</p>
            <p>(前線穆宣工人訓練中心 收)</p>
          </div>
          <li>報名需繳交文件：</li>
          <div class="u-mb16px u-pl32px">
            <p>1.最近半身脫帽1寸照片1張</p>
            <p>
              2.報名申請表
              <span
                class="u-c-fcp-blue u-cursor-pointer"
                @click="downloadApplicationForm()"
                >(點我下載)</span
              >
            </p>
            <p>
              3.二份推薦信
              <span
                class="u-c-fcp-blue u-cursor-pointer"
                @click="downloadRecommendationLetter()"
                >(點我下載)</span
              >
            </p>
            <p class="u-pl8px">
              (*其中一封需為所屬教會牧者；緘封口請推薦人簽名密封)
            </p>
            <p>4.報名繳費憑證影本(附有匯款日期、賬號末五碼)</p>
          </div>

          <div
            class="u-p16px u-bg-fcp-gray u-c-fcp-black u-rounded-[24px_0_0_0] u-overflow-hidden"
          >
            <span>*請於報名截止5/31前，寄出以上面文件(以郵戳日期為憑)</span>
          </div>
        </div>

        <div
          class="u-py16px u-px22px u-absolute u-left-40% u-top-7% u-bg-fcp-yellow u-rounded-[36px] u-c-fcp-black u-font-bold u-text-18px"
        >
          <p class="u-text-24px u-text-center">報名費匯款賬號</p>
          <q-separator size="1px" class="u-mb8px u-mx8px" />
          <div class="u-flex u-flex-col u-flex-gap-y-8px">
            <p>帶路國際商貿咨詢顧問有限公司</p>
            <p>中國信托商業銀行華山分行(代碼822)</p>
            <p>帳號：271-5400-72314</p>
            <p class="u-c-white">*請注明「姓名FCP」並收妥憑證</p>
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
import FreeElectiveCourse from "@/assets/img/programs/programs-3.jpg";
import FCPSubtitle from "@/components/FCPSubtitle.vue";
import FAQ from "@/components/FAQ.vue";
import router from "@/router";
import {
  scrollToSpecificTag,
  downloadApplicationForm,
  downloadRecommendationLetter,
} from "@/utils/misc";
</script>

<style lang="scss" scoped></style>
