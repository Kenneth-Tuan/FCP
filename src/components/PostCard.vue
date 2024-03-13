<template>
  <div
    class="u-w100% u-max-w600px u-max-h400px postCard u-flex u-flex-col u-items-center u-overflow-hidden"
  >
    <div class="u-w100% u-overflow-hidden">
      <img :src="postImg" alt="" class="u-w100%" />
    </div>

    <div class="u-px16px u-flex u-flex-col u-items-start u-justify-center">
      <span>· {{ type || "招生資訊" }} ·</span>
      <span>{{ title || "2024第一屆招生正式開跑" }}</span>
      <span>{{
        description ||
        "如果你已經領受穆宣異象，但還沒有接受過穆宣培訓，歡迎加入這個專為穆宣及你「量身打造」的專業培訓計畫！"
      }}</span>
    </div>
  </div>
</template>

<script setup>
import postImg from "@/assets/img/postImg.jpeg";

const props = defineProps({
  postImg: String,
  tyle: String,
  title: String,
  description: String,
});
</script>

<style lang="scss" scoped>
.postCard {
  border-radius: 25% 0 0 0;
  background: -webkit-linear-gradient(left, transparent, #fff 55%);
  background: -o-linear-gradient(right, transparent, #fff 55%);
  background: -moz-linear-gradient(right, transparent, #fff 55%);
  background: linear-gradient(to right, transparent, #fff 55%);
}
</style>
