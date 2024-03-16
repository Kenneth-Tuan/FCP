<template>
  <div class="u-w600px u-aspect-ratio-3/4 u-flex u-flex-col u-items-center">
    <div
      class="u-group u-w100% u-h50% u-overflow-hidden u-aspect-ratio-4/3 u-rounded-[100px_0_0_0] u-bg-fcp-blue u-relative u-cursor-pointer u-mb24px"
    >
      <div
        class="u-bg-fcp-black u-absolute u-bottom-0 u-c-white u-w100% u-text-center u-py1%"
        :class="{
          ' group-hover:u-opacity-100 u-transition-all u-duration-300ms u-ease-in-out u-opacity-0':
            'animation',
        }"
      >
        <span class="u-font-unbounded u-text-36px u-tracking-0.2em">
          Read Post
        </span>
      </div>
      <img :src="postImg" alt="" class="u-w100%" />
    </div>

    <div
      class="u-h50% u-px16px u-flex u-flex-col u-items-start u-justify-start u-overflow-hidden u-c-fcp-black"
      :class="{
        postCardMask: 'mask',
      }"
    >
      <span class="u-text-24px u-font-bold">· {{ type || "招生資訊" }} ·</span>
      <span class="u-text-36px u-font-bold">{{
        title || "2024第一屆招生正式開跑"
      }}</span>
      <span class="u-text-20px u-font-bold">{{
        description ||
        "如果你已經領受穆宣異象，但還沒有接受過穆宣培訓，歡迎加入這個專為穆宣及你「量身打造」的專業培訓計畫！如果你已經領受穆宣異象，但還沒有接受過穆宣培訓，歡迎加入這個專為穆宣及你「量身打造」的專業培訓計畫！如果你已經領受穆宣異象，但還沒有接受過穆宣培訓，歡迎加入這個專為穆宣及你「量身打造」的專業培訓計畫！如果你已經領受穆宣異象，但還沒有接受過穆宣培訓，歡迎加入這個專為穆宣及你「量身打造」的專業培訓計畫！如果你已經領受穆宣異象，但還沒有接受過穆宣培訓，歡迎加入這個專為穆宣及你「量身打造」的專業培訓計畫！如果你已經領受穆宣異象，但還沒有接受過穆宣培訓，歡迎加入這個專為穆宣及你「量身打造」的專業培訓計畫！如果你已經領受穆宣異象，但還沒有接受過穆宣培訓，歡迎加入這個專為穆宣及你「量身打造」的專業培訓計畫！如果你已經領受穆宣異象，但還沒有接受過穆宣培訓，歡迎加入這個專為穆宣及你「量身打造」的專業培訓計畫！如果你已經領受穆宣異象，但還沒有接受過穆宣培訓，歡迎加入這個專為穆宣及你「量身打造」的專業培訓計畫！如果你已經領受穆宣異象，但還沒有接受過穆宣培訓，歡迎加入這個專為穆宣及你「量身打造」的專業培訓計畫！如果你已經領受穆宣異象，但還沒有接受過穆宣培訓，歡迎加入這個專為穆宣及你「量身打造」的專業培訓計畫！"
      }}</span>
    </div>
  </div>
</template>

<script setup>
import postImg from "@/assets/img/events/postImg.jpeg";

const props = defineProps({
  postImg: String,
  tyle: String,
  title: String,
  description: String,
});
</script>

<style lang="scss" scoped>
.postCardMask {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  mask: linear-gradient(180deg, #000 50%, transparent);
}
</style>
