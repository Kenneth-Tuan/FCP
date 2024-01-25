<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
});

function getComponent(name) {
  if (name)
    return defineAsyncComponent(() => {
      return import(`@/assets/icons/${name}.svg`);
    });
}
</script>

<template>
  <component :is="getComponent(name)" class="iconClass" />
</template>

<style scoped>
.iconClass {
  fill: v-bind(color);
}
</style>
