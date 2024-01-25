<template>
  <div
    class="u-flex u-flex-row u-justify-between u-h-72px u-pl-12px u-bg-#3E3E40"
  >
    <img :src="LOGO_SQUARE" alt="" srcset="" class="u-cursor-pointer" />
    <div class="u-flex u-flex-row u-items-center u-justify-around u-w-100%">
      <p class="u-c-white menuItem">About FCP</p>
      <p class="u-c-white menuItem">Programs</p>
      <p class="u-c-white menuItem">Events</p>
      <p class="u-c-white menuItem">Resources</p>
    </div>

    <div class="u-flex u-flex-row u-justify-between">
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
      <div class="u-bg-yellow u-w-72px u-cursor-pointer"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LOGO_SQUARE from "@/assets/img/LOGO_SQUARE.jpeg";
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
