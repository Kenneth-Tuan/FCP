<template>
  <div class="u-w100%">
    <div
      class="u-mb16px u-relative"
      :class="{ 'lg:u-pl60px sm:u-pl48px': 'pos' }"
    >
      <FCPIcon
        name="FCP-mark(o)"
        :class="[
          {
            'lg:u-w84px sm:u-w60px': 'dimension',
            'u-left--16px': 'pos',
          },
          'u-aspect-ratio-1 u-absolute ',
        ]"
      />

      <p
        :class="[
          {
            'lg:u-pt40px sm:u-pt24px': 'spacing',
            'lg:u-text-60px sm:u-text-36px u-font-bold ': 'text',
          },
          `u-c-fcp-blue`,
        ]"
      >
        {{ title }}
      </p>
    </div>

    <div
      :class="[
        {
          'u-w100%': 'dimension',
          'u-flex lg:u-flex-row sm:u-flex-col-reverse': 'layout',
          'lg:u-rounded-[60px_0_0_0] sm:u-rounded-[24px_0_0_0] ': 'shape',
        },
        'u-overflow-hidden',
      ]"
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
        <div class="u-flex-1 u-flex u-justify-start u-items-center">
          <span
            :class="[
              {
                'lg:u-text-60px lg:u-lh-70px sm:u-text-36px  u-tracking-0.05em u-font-unbounded':
                  'tx',
              },
              `u-c-fcp-green`,
            ]"
          >
            {{ subtitle }}
          </span>
        </div>

        <div class="u-w100% u-flex u-flex-col u-items-center">
          <slot name="description"></slot>

          <q-btn
            @click="$router.push({ name: routeTargetName })"
            class="btnSecondStyle u-bg-fcp-yellow u-mt8px"
            flat
            rounded
          >
            <div
              class="u-flex u-flex-row u-flex-gap-x-8px u-items-center u-p2%"
            >
              <span
                class="lg:u-text-24px sm:u-text-18px u-text-nowrap u-c-white"
                >點我了解更多</span
              >
              <p
                class="u-bg-fcp-green u-c-white u-rounded-100% u-w28px u-aspect-ratio-1 u-text-24px"
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
