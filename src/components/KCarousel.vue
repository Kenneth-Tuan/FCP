<template>
  <div class="carousel">
    <!-- <TransitionGroup name="slide-fade" mode="out-in"> -->
    <div
      v-show="currentImageIndex === index"
      v-for="(item, index) in items"
      :key="index"
    >
      <slot name="item" v-bind="item" />
    </div>
    <!-- </TransitionGroup> -->

    <!-- <button @click="previousImage">Previous</button>
    <button @click="nextImage">Next</button> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, provide } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const currentImageIndex = ref(0);
let timer = null;

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.items.length;
};

const previousImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + props.items.length) % props.items.length;
};

const startAutoSlide = () => {
  timer = setInterval(nextImage, 3000);
};

const stopAutoSlide = () => {
  clearInterval(timer);
};

onMounted(startAutoSlide);
onBeforeUnmount(stopAutoSlide);

provide("currentImageIndex", currentImageIndex);
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
