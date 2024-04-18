<template>
  <div>
    <div class="u-mb16px u-relative u-pl60px">
      <FCPIcon
        name="FCP-mark(o)"
        :class="[
          {
            'u-w-84px u-h-84px': 'dimension',
            'u-absolute u-left--12px u-top--24px': 'position',
          },
        ]"
      />

      <p
        :class="[
          {
            'u-pt40px': 'spacing',
            'u-text-60px u-font-bold ': 'text',
          },
          `u-c-fcp-blue`,
        ]"
      >
        {{ title }}
      </p>
    </div>

    <div
      :class="{
        '': 'dimension',
        'u-flex lg:u-flex-row sm:u-flex-col-reverse': 'layout',
        'u-rounded-[20%_0_0_0] u-overflow-hidden': 'shape',
      }"
    >
      <div
        :class="[
          {
            'u-p2%': 'spacing',
            'u-flex u-flex-col u-justify-between u-flex-gap-y-3%': 'layout',
          },
          `u-bg-fcp-blue`,
        ]"
      >
        <span
          class="u-text-60px u-lh-70px u-tracking-0.05em u-font-unbounded"
          :class="`u-c-fcp-green`"
        >
          {{ subtitle }}
        </span>

        <slot name="description"></slot>

        <div class="u-mxauto">
          <q-btn
            @click="$router.push({ name: routeTargetName })"
            class="btnSecondStyle u-bg-fcp-yellow"
            padding="12px 16px"
            flat
            rounded
          >
            <div class="u-flex u-flex-row u-flex-gap-x-8px u-items-center">
              <span class="u-text-24px u-c-white">點我了解更多</span>
              <p
                class="u-bg-fcp-green u-c-white u-rounded-100% u-w28px u-h28px u-text-24px"
              >
                +
              </p>
            </div>
          </q-btn>
        </div>
      </div>

      <img :src="image" alt="" class="u-w100% u-h100%" />
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
});
</script>

<style lang="scss" scoped>
.btnSecondStyle {
  // border: 2px solid #6c8994;
  // border: 2px solid #efbf81;
}
</style>
