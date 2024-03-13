<template>
  <div>
    <q-btn push square>
      <slot></slot>
    </q-btn>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.q-btn {
  height: 45px;
  padding: 0 24px;
  background-color: #aec9c2;
  color: white;
  border-radius: 35px 0 35px 0;
  font-size: 16px;
  font-weight: 600;
}
</style>
