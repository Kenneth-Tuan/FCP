<template>
  <div class="u-pt50px">
    <div class="u-w100% u-hmax u-relative u-mb60px">
      <div
        class="u-c-fcp-gray u-absolute u-top-45% u-left-50% u-translate--50%"
      >
        <p class="u-flex u-flex-row u-items-center u-justify-start">
          <span class="u-font-bold u-tracking-0.2em">學制介紹&nbsp;</span>
          <q-separator class="u-w100px u-bg-fcp-gray" size="1px" />
        </p>
        <p class="u-flex u-flex-row u-text-48px u-pl24px u-fw900">
          <span class="u-c-fcp-yellow">實體</span>
          全修班
        </p>
      </div>

      <q-btn
        padding="20px"
        class="u-absolute u-bottom-10% u-left-50% u-translate--50% u-bg-fcp-green u-rounded-[24px_0_24px_0]"
        @click="scrollToSpecificTag('#howToRegister')"
      >
        <span class="u-c-fcp-blue u-font-bold u-text-36px">申請報名</span>
      </q-btn>
      <img :src="InPersonFullCoursePoster" alt="" class="u-w100%" />
    </div>

    <div class="u-pl60px">
      <FCPSubtitle
        subtitleMsg="報名資訊"
        description="Registration Information"
        class="u-mb36px"
      />

      <RegistrationInfoCard
        title="招生對象"
        :description="[
          '招收人數：第一節最多12人',
          '已領受對穆斯林宣教異象，但尚未接受過穆宣訓練者',
          '希望申請加入前線差會的工人（非必要條件）',
        ]"
      >
      </RegistrationInfoCard>

      <RegistrationInfoCard
        title="報考資格"
        :description="[
          '年滿18嵗，專科以上學歷，已重生得救，並獲教會推薦',
          '穩定健康的教會生活，並活出美好的生命見證',
          '具基本英語能力（GEPT初級程度）',
          '具基本神學裝備（系統神學、聖經神學）',
          '曾參加過宣教心視野、EWI培訓者優先錄取',
        ]"
      >
        <template #remarks>
          <p class="u-text-18px u-font-bold u-pl30px u-pr30px">
            *如無接受過基礎神學裝備，亦可報考，惟錄取後需參加「學前線上培訓班」（約2個月，每周1次，酌收服務成本）
          </p>
        </template>
      </RegistrationInfoCard>

      <q-separator class="u-bg-fcp-gray u-w100% u-mb36px" size="1px" />

      <div class="u-pl30px u-pb24px u-flex u-flex-row">
        <div class="u-flex u-flex-col u-mr60px">
          <div class="u-flex u-flex-row u-items-center u-mb24px">
            <p class="u-font-bold u-text-24px">{{ "訓練時間" }}</p>
            <q-separator
              class="u-bg-fcp-black u-rotate--45 u-w26px"
              size="1.5px"
            />
          </div>
          <div
            class="u-pl30px u-mb24px u-text-18px u-font-bold u-flex u-flex-col u-flex-gap-y-8px"
          >
            <p>新生訓練 | 2024 9/23-9/27</p>
            <p>開學日 | 2024 10/1</p>
            <p>海外實習 | 2025 2/17-5/18</p>
            <p>結業典禮 | 2025 5/25</p>
          </div>
          <div class="u-flex u-flex-row u-items-center u-mb24px">
            <p class="u-font-bold u-text-24px">{{ "訓練地點" }}</p>
            <q-separator
              class="u-bg-fcp-black u-rotate--45 u-w26px"
              size="1.5px"
            />
          </div>
          <div
            class="u-pl30px u-mb24px u-text-18px u-font-bold u-flex u-flex-col u-flex-gap-y-8px"
          >
            <p>花蓮靈糧堂</p>
            <p>(花蓮市中美路148號)</p>
          </div>
        </div>
        <div
          class="u-mt30px u-hmin u-rounded-[0_48px_48px_48px] u-overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58323.65157031715!2d121.5466537486328!3d23.98771670000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34689fd6a7b0e2bd%3A0xaefbbfef82e7c5ec!2z6Iqx6JOu6Z2I57On5aCC!5e0!3m2!1szh-TW!2stw!4v1711178086392!5m2!1szh-TW!2stw"
            width="400"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <q-separator class="u-bg-fcp-gray u-w100% u-mb36px" size="1px" />

      <div class="u-mb36px">
        <!-- 訓練内容特色 -->
        <div class="u-flex u-flex-row u-items-center u-mb24px">
          <p class="u-font-bold u-text-24px">{{ "訓練内容特色" }}</p>
          <q-separator
            class="u-bg-fcp-black u-rotate--45 u-w26px"
            size="1.5px"
          />
        </div>
        <div class="u-mb36px u-pl30px u-text-18px u-font-bold">
          <li class="u-c-fcp-yellow">七個月全時間培訓</li>
          <p class="u-ml25px">
            四個月課室訓練、二個月海外實習、一個月回顧加强課程
          </p>
          <li class="u-c-fcp-yellow">
            400小時課程、100小時語言學習、兩個月海外實習
          </li>
          <li class="u-c-fcp-yellow">一對一自身宣教士教練輔導</li>
          <p class="u-ml25px">結業前完成量身定制、可實踐的「穆宣生涯計劃書」</p>
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
              class="u-w196px u-h120px u-pt16px u-px8px u-bg-fcp-blue u-flex u-flex-col u-items-center u-justify-start u-c-white"
            >
              <p class="u-font-heavy u-text-36px">報名費</p>
              <p>含行政費 | 心理測評費</p>
            </div>
            <p
              class="u-c-fcp-blue u-font-bold u-text-24px u-text-center u-p16px"
            >
              NT$1,500
            </p>
          </div>
          <div
            class="u-border-solid u-border-fcp-blue u-border-1px u-rounded-[0_36px_0_0] u-overflow-hidden"
          >
            <div
              class="u-w196px u-h120px u-pt16px u-px8px u-bg-fcp-blue u-flex u-flex-col u-items-center u-justify-start u-c-white"
            >
              <p class="u-font-heavy u-text-36px">訓練學費</p>
              <p>含注冊費 | 語言學習費</p>
            </div>
            <p
              class="u-c-fcp-blue u-font-bold u-text-24px u-text-center u-p16px"
            >
              NT$100,000
            </p>
          </div>
          <div
            class="u-border-solid u-border-fcp-blue u-border-1px u-rounded-[0_36px_0_0] u-overflow-hidden"
          >
            <div
              class="u-w196px u-h120px u-pt16px u-px8px u-bg-fcp-blue u-flex u-flex-col u-items-center u-justify-start u-c-white"
            >
              <p class="u-font-heavy u-text-36px">海外實習費</p>
              <p class="u-lh-18px u-text-center">
                另有獎學金申請<br />辦法可申請
              </p>
            </div>
            <p
              class="u-c-fcp-blue u-font-bold u-text-24px u-text-center u-p16px"
            >
              NT$120,000
            </p>
          </div>
          <div
            class="u-border-solid u-border-fcp-blue u-border-1px u-rounded-[0_36px_0_0] u-overflow-hidden"
          >
            <div
              class="u-w196px u-h120px u-pt16px u-px8px u-bg-fcp-blue u-flex u-flex-col u-items-center u-justify-start u-c-white"
            >
              <p class="u-font-heavy u-text-36px">報名費</p>
              <p>含行政費 | 心理測評費</p>
            </div>
            <p
              class="u-c-fcp-blue u-font-bold u-text-24px u-text-center u-p16px"
            >
              NT$60,000/年
            </p>
          </div>
        </div>
      </div>

      <FCPSubtitle
        id="howToRegister"
        subtitleMsg="申請辦法"
        description="How to Register?"
        class="u-mb36px"
      />

      <div class="u-pl30px u-mb24px u-relative">
        <p class="u-font-bold u-text-24px">如何申請報名？</p>
        <div class="u-pl30px u-text-18px u-font-bold">
          <li>報名費：NT$1,500</li>
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

      <div class="u-flex u-flex-col u-flex-gap-y-16px u-mb36px">
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
            @click="$router.push({ name: 'ContactUs' })"
            class="u-rounded-[36px_0_36px_0] u-bg-fcp-blue"
            padding="12px 32px"
          >
            <span class="u-c-white u-text-24px u-tracking-0.2em u-font-heavy"
              >聯絡我們</span
            >
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InPersonFullCoursePoster from "@/assets/img/programs/Programs-1.jpg";
import FCPSubtitle from "@/components/FCPSubtitle.vue";
import RegistrationInfoCard from "@/components/RegistrationInfoCard.vue";
import FAQ from "@/components/FAQ.vue";
import {
  scrollToSpecificTag,
  downloadApplicationForm,
  downloadRecommendationLetter,
} from "@/utils/misc.js";
</script>

<style lang="scss" scoped></style>
