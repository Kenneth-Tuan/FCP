<script setup>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
</script>

<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView></RouterView>
  </component>
</template>

<style scoped></style>
