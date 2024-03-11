<script setup>
const props = defineProps({
  subtitleMsg: String,
  description: String,
});
</script>

<template>
  <div class="u-pl-84px u-relative">
    <FCPIcon
      name="FCP-mark(blue)"
      class="u-w-84px u-h-84px u-absolute u-left--12px u-top--24px"
    />
    <div class="u-flex u-flex-row u-flex-nowrap u-items-center">
      <P class="u-c-fcp-blue u-text-24px u-font-heavy u-mr-24px">
        {{ subtitleMsg }}
      </P>
      <q-separator class="u-flex-1 u-bg-fcp-blue" size="1.5px" />
    </div>
    <p class="u-c-white u-text-36px u-lh-36px u-font-unbounded">
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
