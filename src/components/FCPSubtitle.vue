<script setup>
const props = defineProps({
  subtitleMsg: String,
  description: String,
});
</script>

<template>
  <div class="lg:u-pl84px md:u-pl72px sm:u-pl60px u-relative">
    <FCPIcon
      name="FCP-mark(blue)"
      :class="{
        'u-absolute lg:u-top--24px sm:u-left--12px sm:u-top--20px': 'position',
        'lg:u-w84px md:u-w72px sm:u-w60px': 'dimension',
        'u-aspect-ratio-1': 'layout',
      }"
    />
    <div class="u-flex u-flex-row u-flex-nowrap u-items-center">
      <span
        class="u-c-fcp-blue u-font-heavy u-mr-24px u-tracking-0.3em"
        :class="{
          'lg:u-text-24px sm:u-text-18px': 'text',
        }"
      >
        {{ subtitleMsg }}
      </span>
      <q-separator class="u-flex-1 u-bg-fcp-blue" size="1.5px" />
    </div>
    <p class="u-c-gray-1 lg:u-text-32px md:u-text-26px u-lh-24px u-font-heavy">
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
