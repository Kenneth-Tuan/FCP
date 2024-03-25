<template>
  <q-expansion-item :label="title">
    <template v-slot:header="{ expanded }">
      <q-item-section avatar>
        <p class="u-font-unbounded u-text-24px u-c-red">Q.</p>
      </q-item-section>

      <q-item-section>
        Item {{ expanded ? "expanded" : "collapsed" }}
      </q-item-section>
    </template>

    <q-card class="u-border-solid u-border-gray u-border-width-[0_0_0_2px]">
      <q-card-section class="u-flex u-flex-row u-flex-nowrap u-items-center">
        <q-item-section avatar>
          <p class="u-font-unbounded u-text-24px u-c-gray">A.</p>
        </q-item-section>
        <p class="u-c-gray">
          {{
            content ||
            "lorum ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          }}
        </p>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script setup>
const props = defineProps({
  title: String,
  content: String,
});
</script>

<style lang="scss" scoped>
:deep(.q-item) {
  border-left: 2px solid red;
}
</style>
