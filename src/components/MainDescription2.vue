<template>
  <div class="u-mb60px">
    <div class="u-mb16px u-relative u-pl60px">
      <FCPIcon
        name="FCP-mark(o)"
        class="u-w-84px u-h-84px u-absolute u-left--12px u-top--24px"
      />

      <p class="u-text-60px u-font-bold u-pt40px" :class="`u-c-fcp-${bgColor}`">
        {{ title }}
      </p>
    </div>

    <div class="u-grid u-grid-cols-12 u-mb24px">
      <div
        class="u-rounded-[200px_0_0_0] u-overflow-hidden"
        :class="[
          {
            'u-px10% u-py20%': 'spacing',
            'u-col-span-5 u-flex u-flex-col u-justify-between': 'layout',
          },
          `u-bg-fcp-${bgColor}`,
        ]"
      >
        <span
          class="u-text-60px u-lh-70px u-tracking-0.05em u-font-unbounded"
          :class="`u-c-fcp-${fontColor}`"
        >
          {{ subtitle }}
        </span>

        <slot name="description"></slot>
      </div>

      <div class="u-col-span-7">
        <img :src="image" alt="" class="u-w100% u-h100%" />
      </div>
    </div>

    <div class="u-flex u-justify-center">
      <q-btn
        @click="$router.push({ name: routeTargetName })"
        class="btnSecondStyle"
        padding="12px 16px"
        flat
        rounded
      >
        <div class="u-flex u-flex-row u-flex-gap-x-8px u-items-center">
          <span class="u-text-24px u-c-fcp-blue">點我了解更多</span>
          <p
            class="u-bg-fcp-blue u-c-white u-rounded-100% u-w28px u-h28px u-text-24px"
          >
            +
          </p>
        </div>
      </q-btn>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  routeTargetName: String,
  title: String,
  subtitle: String,
  description: String,
  bgColor: String,
  fontColor: String,
});
</script>

<style lang="scss" scoped>
.btnSecondStyle {
  border: 2px solid #6c8994;
}
</style>
