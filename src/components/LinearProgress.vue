<template>
  <div>
    <q-linear-progress :value="progress" color="secondary" />
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted } from "vue";

const progress = ref(0);

let interval;

onMounted(() => {
  interval = setInterval(() => {
    progress.value = progress.value + 0.025;
  }, 80);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style lang="scss" scoped></style>
