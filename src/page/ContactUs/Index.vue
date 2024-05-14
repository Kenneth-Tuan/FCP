<template>
  <div class="u-mxauto u-pt50px">
    <div class="u-w100% u-hmax u-relative u-mb60px">
      <div class="u-c-fcp-gray u-absolute u-top-45% u-left-10%">
        <p class="u-flex u-flex-row u-items-center u-justify-start">
          <span class="u-font-bold u-tracking-0.2em">聯絡我們&nbsp;</span>
          <q-separator class="u-w100px u-bg-fcp-gray" size="1.7px" />
        </p>
        <span class="u-font-unbounded u-text-22px">CONTACT US</span>
      </div>
      <img :src="Banner" alt="" class="u-w100%" />
    </div>

    <div class="u-px60px u-mb60px">
      <FCPSubtitle
        subtitleMsg="聯絡資訊｜留言表單"
        description="Get in Touch"
        class="u-mb36px"
      />

      <div class="u-flex u-justify-center u-flex-gap-x-16px u-mb48px">
        <div
          class="u-bg-fcp-gray-1 u-c-white u-rounded-48px u-aspect-ratio-1 u-py5% u-w320px"
          :class="{
            'hover:u-bg-fcp-blue u-transition-all u-duration-300ms u-ease-in-out':
              'animation',
            'u-flex u-flex-col u-items-center u-flex-gap-y-16px': 'layout',
          }"
        >
          <FCPIcon
            name="location_on_white_48dp"
            class="u-c-white u-w84px u-h84px"
            color="#fff"
          />
          <p
            class="u-text-36px u-flex u-flex-col u-items-center u-fw900 u-tracking-0.2em"
          >
            <span>辦公室地址</span>
            <span>ADDRESS</span>
          </p>
          <q-separator class="u-w100px u-bg-fcp-gray" size="1.5px" />
          <p class="u-text-24px u-flex u-flex-col u-items-center">
            <span>待更新</span>
            <span>（預備搬遷中）</span>
          </p>
        </div>
        <div
          class="u-bg-fcp-gray-1 u-c-white u-rounded-48px u-aspect-ratio-1 u-py5% u-w320px"
          :class="{
            'hover:u-bg-fcp-blue u-transition-all u-duration-300ms u-ease-in-out':
              'animation',
            'u-flex u-flex-col u-items-center u-flex-gap-y-16px': 'layout',
          }"
        >
          <FCPIcon
            name="phone_white_48dp"
            class="u-c-white u-w84px u-h84px"
            color="#fff"
          />
          <p
            class="u-text-36px u-flex u-flex-col u-items-center u-fw900 u-tracking-0.2em"
          >
            <span>電話</span>
            <span>PHONE</span>
          </p>
          <q-separator class="u-w100px u-bg-fcp-gray" size="1.5px" />
          <p class="u-text-24px u-flex u-flex-col u-items-center">
            <span>02-23518797</span>
            <span>0952-067030</span>
            <span>（請洽Karen傳道）</span>
          </p>
        </div>
        <div
          class="u-bg-fcp-gray-1 u-c-white u-rounded-48px u-aspect-ratio-1 u-py5% u-w320px"
          :class="{
            'hover:u-bg-fcp-blue u-transition-all u-duration-300ms u-ease-in-out':
              'animation',
            'u-flex u-flex-col u-items-center u-flex-gap-y-16px': 'layout',
          }"
        >
          <FCPIcon
            name="alternate_email_white_48dp"
            class="u-c-white u-w84px u-h84px"
            color="#fff"
          />
          <p
            class="u-text-36px u-flex u-flex-col u-items-center u-fw900 u-tracking-0.2em"
          >
            <span>電郵</span>
            <span>EMAIL</span>
          </p>
          <q-separator class="u-w100px u-bg-fcp-gray" size="1.5px" />
          <p class="u-text-24px u-flex u-flex-col u-items-center">
            <span>equip.fcp</span>
            <span>@gmail.com</span>
          </p>
        </div>
      </div>

      <q-separator class="u-w100% u-bg-fcp-gray u-mb48px" size="1.5px" />

      <div
        class="u-c-fcp-blue u-w70% u-mxauto u-flex u-flex-col u-items-center"
      >
        <FCPIcon
          name="question_answer_white_48dp"
          color="#6c8994"
          class="u-w84px u-h84px"
        />
        <p class="u-text-24px u-fw600 u-tracking-0.2em">留言表單</p>
        <p class="u-text-24px u-fw600 u-tracking-0.2em u-mb24px">MESSAGE US</p>
        <p class="u-mb24px u-tracking-0.2em u-fw600">
          您有疑問或向申請FCP嗎？歡迎使用下面的表格留言給我們：
        </p>
        <div
          class="u-grid u-grid-cols-2 u-grid-rows-4 u-grid-gap-16px u-text-18px u-c-fcp-black u-fw500 u-mb24px"
        >
          <label class="u-col-span-1">
            <span>稱呼/名字 (required)</span>
            <q-input outlined color="#6c8994"></q-input>
          </label>
          <label class="u-col-span-1">
            <span>稱謂 (ex. 牧師、傳道、弟兄、姊妹...)</span>
            <q-input outlined color="#6c8994"></q-input>
          </label>
          <label class="u-col-span-2">
            <span>Email (required)</span>
            <q-input outlined color="#6c8994"></q-input>
          </label>
          <label class="u-col-span-2">
            <span>標題 (required)</span>
            <q-input outlined color="#6c8994"></q-input>
          </label>
          <label class="u-col-span-2">
            <span>留言框 (required)</span>
            <q-input outlined color="#6c8994"></q-input>
          </label>
        </div>

        <q-btn
          push
          square
          v-ripple
          class="u-px60px u-py20px u-rounded-[30px_0_30px_0] u-bg-fcp-blue"
        >
          <span class="u-text-36px u-fw900 u-c-white">送出表單</span>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import Banner from "@/assets/img/events/events_page.png"; // temp
import FCPSubtitle from "@/components/FCPSubtitle.vue";
</script>

<style lang="scss" scoped></style>
