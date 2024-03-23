<template>
  <div class="u-pl30px u-mb36px u-flex u-flex-col u-items-start u-c-fcp-black">
    <div class="u-flex u-flex-row u-items-center u-mb24px">
      <p class="u-font-bold u-text-24px">{{ title || "招生對象" }}</p>
      <q-separator class="u-bg-fcp-black u-rotate--45 u-w26px" size="1.5px" />
    </div>
    <div class="u-pl30px u-mb24px u-text-18px u-font-bold">
      <li v-for="info in description">
        {{ info || "招收人數：第一節最多12人" }}
      </li>
    </div>

    <div
      class="u-ml30px u-pt8px u-bg-fcp-gray u-c-fcp-gray-1 u-rounded-[24px_0_0_0] u-overflow-hidden"
    >
      <slot name="remarks"> </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: Array,
});
</script>

<style lang="scss" scoped></style>
