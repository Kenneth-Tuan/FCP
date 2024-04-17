<script setup>
import FCPBtnDropDown from "@/components/FCPBtnDropDown.vue";
</script>

<template>
  <q-toolbar
    :class="{
      'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
      'md:u-w100% sm:u-w60px u-h36px': 'layout',
      'shadow-2 sm:u-rounded-[0_8px_8px_0] md:u-rounded-none md:u-px8px sm:u-p0px':
        'style',
      'md:u-relative sm:u-fixed u-z-99': 'position',
      'u-c-white u-bg-#3E3E40': 'color',
    }"
  >
    <q-btn flat icon="menu" :class="{ 'md:u-hidden sm:u-block': 'display' }" />
    <q-btn
      flat
      :class="{
        'u-text-24px u-fw900': 'text',
        'sm:u-hidden md:u-block': 'display',
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
      }"
      @click="$router.push({ name: 'Main' })"
      padding="0 8px"
      label="FCP"
    />

    <q-separator
      dark
      vertical
      inset
      :class="{ 'sm:u-hidden md:u-block': 'display', 'u-mx8px': 'spacing' }"
    />

    <FCPBtnDropDown
      label="關於我們"
      flat
      :class="{
        'sm:u-hidden md:u-block': 'display',
        'u-text-nowrap': 'text',
        'md:u-px4px lg:u-px16px': 'spacing',
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
      }"
    >
      <q-item clickable v-close-popup>
        <q-item-section>
          <q-item-label>一對一</q-item-label>
        </q-item-section>
      </q-item>
    </FCPBtnDropDown>

    <FCPBtnDropDown
      flat
      label="FCP 訓練"
      @click="$router.push({ name: 'Programs' })"
      :class="{
        'sm:u-hidden md:u-block': 'display',
        'u-text-nowrap': 'text',
        'md:u-px4px lg:u-px16px': 'spacing',
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
      }"
    >
      <q-item
        @click="$router.push({ name: 'full_course' })"
        clickable
        v-close-popup
      >
        <q-item-section>
          <q-item-label>實體全修班</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        @click="$router.push({ name: 'online_elective_course' })"
        clickable
        v-close-popup
      >
        <q-item-section>
          <q-item-label>線上選修班</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        @click="$router.push({ name: 'free_elective_course' })"
        clickable
        v-close-popup
      >
        <q-item-section>
          <q-item-label>自由選課班</q-item-label>
        </q-item-section>
      </q-item>
    </FCPBtnDropDown>

    <q-btn
      flat
      label="最新消息"
      @click="$router.push({ name: 'Events' })"
      :class="{
        'sm:u-hidden md:u-block': 'display',
        'u-text-nowrap': 'text',
        'md:u-px4px lg:u-px16px': 'spacing',
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
      }"
    />

    <q-btn
      flat
      label="穆宣國度視窗"
      :class="{
        'sm:u-hidden md:u-block': 'display',
        'u-text-nowrap': 'text',
        'md:u-px4px lg:u-px16px': 'spacing',
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
      }"
    />

    <q-btn
      flat
      label="聯絡我們"
      @click="$router.push({ name: 'ContactUs' })"
      :class="{
        'sm:u-hidden md:u-block': 'display',
        'u-text-nowrap': 'text',
        'md:u-px4px lg:u-px16px': 'spacing',
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
      }"
    />

    <q-space :class="{ 'sm:u-hidden md:u-block': 'display' }" />
    <!-- <q-separator dark vertical /> -->
    <q-btn
      flat
      icon="house"
      @click="$router.push({ name: 'Main' })"
      :class="{
        'sm:u-hidden md:u-block': 'display',
        'md:u-px4px lg:u-px12px': 'spacing',
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
      }"
    />
    <q-btn
      flat
      icon="search"
      :class="{
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
        'sm:u-hidden md:u-block': 'display',
        'md:u-px4px lg:u-px12px': 'spacing',
      }"
    />
    <q-btn
      flat
      icon="volunteer_activism"
      :class="{
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
        'sm:u-hidden md:u-block': 'display',
        'md:u-px4px lg:u-px12px': 'spacing',
      }"
    />
    <q-btn
      flat
      icon="person"
      :class="{
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
        'sm:u-hidden md:u-block': 'display',
        'md:u-px4px lg:u-px12px': 'spacing',
      }"
    />
  </q-toolbar>
</template>

<style lang="scss" scoped></style>
