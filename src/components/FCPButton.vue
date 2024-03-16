<template>
  <q-btn push square>
    <slot></slot>
  </q-btn>
</template>

<script setup></script>

<style lang="scss" scoped>
.q-btn {
  height: 60px;
  width: 300px;
  padding: 0 24px;
  background-color: #aec9c2;
  color: white;
  border-radius: 45px 0 45px 0;
  // font-size: 24px;
  // font-weight: 600;
}
</style>
