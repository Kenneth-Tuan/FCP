<script setup>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
</script>

<template>
  <div class="u-flex u-flex-col">
    <Header />
    <slot class="u-flex-grow" />
    <Footer />
  </div>
</template>
