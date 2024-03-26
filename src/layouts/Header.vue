<template>
  <div
    class="u-flex u-flex-row u-justify-between u-h-72px u-pl-12px u-bg-#3E3E40"
  >
    <img
      :src="FCP_LOGO"
      alt=""
      srcset=""
      class="u-cursor-pointer"
      @click="$router.push({ name: 'Main' })"
    />
    <div
      class="u-flex u-flex-row u-items-center u-justify-center u-flex-gap-x-48px u-w-100%"
    >
      <p class="u-c-white u-font-unbounded menuItem u-group">
        <span class="u-inline group-hover:u-hidden"> 關於我們 </span>
        <span class="u-hidden group-hover:u-inline"> About Us </span>
      </p>
      <p
        class="u-c-white u-font-unbounded menuItem u-group"
        @click="$router.push({ name: 'Programs' })"
      >
        <span class="u-inline group-hover:u-hidden"> FCP 訓練 </span>
        <span class="u-hidden group-hover:u-inline"> Programs </span>
      </p>
      <p
        class="u-c-white u-font-unbounded menuItem u-group"
        @click="$router.push({ name: 'Events' })"
      >
        <span class="u-inline group-hover:u-hidden"> 最新消息 </span>
        <span class="u-hidden group-hover:u-inline"> Events </span>
      </p>
      <p class="u-c-white u-font-unbounded menuItem u-group">
        <span class="u-inline group-hover:u-hidden"> 穆宣國度視窗 </span>
        <span class="u-hidden group-hover:u-inline"> Resource </span>
      </p>
    </div>

    <div class="u-flex u-flex-row u-justify-center">
      <div class="u-w-72px u-flex u-flex-row u-justify-center u-items-center">
        <FCPIcon name="home" color="white" class="u-cursor-pointer" />
      </div>
      <div class="u-w-72px u-flex u-flex-row u-justify-center u-items-center">
        <FCPIcon name="donate" color="white" class="u-cursor-pointer" />
      </div>
      <div class="u-w-72px u-flex u-flex-row u-justify-center u-items-center">
        <FCPIcon name="search" color="white" class="u-cursor-pointer" />
      </div>
      <div class="u-w-72px u-flex u-flex-row u-justify-center u-items-center">
        <FCPIcon name="user" color="white" class="u-cursor-pointer" />
      </div>
      <FCPIcon name="FCP-hamburger-icon" class="u-cursor-pointer" />
    </div>
  </div>
</template>

<script setup lang="js">
import FCP_LOGO from "@/assets/icons/FCP-logo-ch.png";
</script>

<style lang="scss" scoped>
.menuItem {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-bottom: 1px solid rgba(255, 255, 255, 0);

  &:hover {
    border-bottom: 1px solid rgba(255, 255, 255, 1);
  }
}
</style>
