<template>
  <div
    class="u-flex u-flex-row u-justify-between u-h-72px u-pl-12px u-bg-#3E3E40"
  >
    <img :src="FCP_LOGO" alt="" srcset="" class="u-cursor-pointer" />
    <div
      class="u-flex u-flex-row u-items-center u-justify-center u-flex-gap-x-48px u-w-100%"
    >
      <p class="u-c-white u-font-unbounded menuItem">About FCP</p>
      <p class="u-c-white u-font-unbounded menuItem">Programs</p>
      <p class="u-c-white u-font-unbounded menuItem">Events</p>
      <p class="u-c-white u-font-unbounded menuItem">Resources</p>
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
