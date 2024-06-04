<script setup>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
</script>

<template>
  <div class="u-h100% u-flex u-flex-col u-justify-start">
    <Header />
    <slot />

    <!-- <Footer /> -->
  </div>
</template>
