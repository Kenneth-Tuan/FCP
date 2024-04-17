<script setup>
import { ref, watch } from "vue";
import { debounce } from "quasar";

const menu = ref(false);
const menuOver = ref(false);
const listOver = ref(false);

function checkMenu() {
  if (menuOver.value || listOver.value) {
    menu.value = true;
  } else {
    menu.value = false;
  }
}

watch([menuOver, listOver], debounce(checkMenu, 300));
</script>

<template>
  <q-btn-dropdown
    v-model="menu"
    @mouseover.native="menuOver = true"
    @mouseout.native="menuOver = false"
    class="u-text-nowrap"
  >
    <q-list
      class="u-bg-#3E3E40 u-c-white"
      @mouseover.native="listOver = true"
      @mouseout.native="listOver = false"
    >
      <slot></slot>
    </q-list>
  </q-btn-dropdown>
</template>

<style lang="scss" scoped></style>
