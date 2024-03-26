<template>
  <div
    class="u-bg-fcp-gray hover:u-bg-fcp-yellow u-w100% u-hmax u-p2% u-rounded-[35px_0_0_0] u-flex u-flex-row u-items-center u-transition-all u-duration-300ms u-ease-in-out"
  >
    <div class="u-c-black u-w20%">
      <span class="u-text-22px u-font-unbounded u-fw900">
        {{ date?.year || "2024" }}
      </span>
      <p class="u-lh-36px u-tracking-0.2em">
        <span class="u-font-unbounded u-fw900 u-text-36px">
          {{ date?.month || "3" }}
        </span>
        <span class="u-text-22px u-font-bold">月</span>
        <span class="u-font-unbounded u-fw900 u-text-36px">
          {{ date?.day || "24" }}
        </span>
        <span class="u-text-22px u-font-bold">日</span>
        <span class="u-text-22px u-font-bold">
          ({{ date?.dayOfWeek || "六" }})
        </span>
      </p>
    </div>

    <q-separator class="u-bg-white u-mr24px" size="3px" vertical />

    <div class="u-flex-1 u-flex u-flex-col u-items-start u-justify-between">
      <span class="u-c-black u-text-28px u-fw600">
        {{ description || "2024年招生説明會 —— 北部地區（實體&線上同步）" }}
      </span>

      <div class="u-flex u-flex-row u-flex-gap-16px u-text-24px">
        <p class="u-flex u-flex-row u-items-center">
          <FCPIcon name="calendar" class="u-w48px u-h48px u-mr8px" />
          <span>{{ date?.amOrpm || "早上" }}</span>
          <span>{{ date?.time || "10:00 - 12:00" }}</span>
        </p>
        <p class="u-flex u-flex-row u-items-center">
          <FCPIcon name="location" class="u-w48px u-h48px u-mr8px" />
          <span>{{ location || "臺北基督之家" }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  date: Object,
  description: String,
  location: String,
});
</script>

<style lang="scss" scoped></style>
