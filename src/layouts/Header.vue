<script setup>
import { ref } from "vue";

import FCPBtnDropDown from "@/components/FCPBtnDropDown.vue";

const menuToggle = ref(false);
</script>

<template>
  <q-toolbar
    :class="{
      'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
      'u-w100% u-h36px': 'layout',
      'shadow-2 u-px8px': 'style',
      'u-fixed u-z-99': 'position',
      'u-c-white u-bg-#3E3E40': 'color',
    }"
  >
    <q-btn
      flat
      icon="menu"
      :class="{ 'md:u-hidden sm:u-block': 'display' }"
      @click="menuToggle = !menuToggle"
    />

    <q-btn
      flat
      :class="{
        'u-text-24px u-fw900': 'text',
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
      }"
      @click="$router.push({ name: 'Main' })"
      padding="0 8px"
      label="FCP"
    />

    <q-separator dark vertical inset :class="{ 'u-mx8px': 'spacing' }" />

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

    <q-space />
    <!-- <q-separator dark vertical /> -->
    <q-btn
      flat
      icon="house"
      @click="$router.push({ name: 'Main' })"
      :class="{
        'sm:u-hidden lg:u-block': 'display',
        'md:u-px4px lg:u-px12px': 'spacing',
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
      }"
    />
    <q-btn
      flat
      icon="search"
      :class="{
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
        'md:u-px4px lg:u-px12px': 'spacing',
      }"
    />
    <q-btn
      flat
      icon="volunteer_activism"
      :class="{
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
        'md:u-px4px lg:u-px12px': 'spacing',
      }"
    />
    <q-btn
      flat
      icon="person"
      :class="{
        'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
        'md:u-px4px lg:u-px12px': 'spacing',
      }"
    />
  </q-toolbar>

  <q-dialog
    v-model="menuToggle"
    :maximized="true"
    transition-show="fade"
    transition-hide="fade"
    :position="'left'"
  >
    <q-card class="u-bg-#3E3E40 text-white">
      <div class="u-h50px u-flex u-justify-start u-px8px">
        <q-btn flat icon="close" v-close-popup />
        <q-btn
          flat
          :class="{
            'u-text-24px u-fw900': 'text',
            'u-transition-all u-duration-300ms u-ease-in-out': 'animation',
          }"
          v-close-popup
          @click="$router.push({ name: 'Main' })"
          padding="0 8px"
          label="FCP"
        />
      </div>

      <q-card-section>
        <q-list
          :bordered="false"
          class="u-flex u-flex-col u-items-start u-flex-gap-y-16px u-text-left"
        >
          <q-expansion-item
            expand-icon-toggle
            v-close-popup
            :content-inset-level="1"
          >
            <template v-slot:header>
              <q-item @click="() => {}" clickable v-ripple v-close-popup>
                <q-item-section>
                  <q-item-label overline class="u-c-white"
                    >關於我們</q-item-label
                  >
                  <q-item-label caption class="u-c-white"
                    >About us</q-item-label
                  >
                </q-item-section>
              </q-item>
            </template>

            <q-item clickable v-ripple v-close-popup>
              <q-item-section>
                <q-item-label overline class="u-c-white">一對一</q-item-label>
                <q-item-label caption class="u-c-white">1 vs 1</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item expand-icon-toggle :content-inset-level="1">
            <template v-slot:header>
              <q-item
                @click="$router.push({ name: 'Programs' })"
                clickable
                v-ripple
                v-close-popup
              >
                <q-item-section>
                  <q-item-label overline class="u-c-white"
                    >FCP 訓練</q-item-label
                  >
                  <q-item-label caption class="u-c-white"
                    >Programs</q-item-label
                  >
                </q-item-section>
              </q-item>
            </template>

            <q-item
              @click="$router.push({ name: 'full_course' })"
              clickable
              v-ripple
              v-close-popup
            >
              <q-item-section>
                <q-item-label overline class="u-c-white"
                  >實體全修班</q-item-label
                >
                <q-item-label caption class="u-c-white"
                  >In Person Full Course</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item
              @click="$router.push({ name: 'online_elective_course' })"
              clickable
              v-ripple
              v-close-popup
            >
              <q-item-section>
                <q-item-label overline class="u-c-white"
                  >線上選修班</q-item-label
                >
                <q-item-label caption class="u-c-white"
                  >Online Elective Course</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item
              @click="$router.push({ name: 'free_elective_course' })"
              clickable
              v-ripple
              v-close-popup
            >
              <q-item-section>
                <q-item-label overline class="u-c-white"
                  >自由選課班</q-item-label
                >
                <q-item-label caption class="u-c-white"
                  >Free Elective Course</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-item
            @click="$router.push({ name: 'Events' })"
            clickable
            v-ripple
            v-close-popup
          >
            <q-item-section class="u-px16px">
              <q-item-label overline class="u-c-white">最新消息</q-item-label>
              <q-item-label caption class="u-c-white">Events</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple v-close-popup>
            <q-item-section class="u-px16px">
              <q-item-label overline class="u-c-white"
                >穆宣國度視窗</q-item-label
              >
              <q-item-label caption class="u-c-white">Source</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            @click="$router.push({ name: 'ContactUs' })"
            clickable
            v-ripple
            v-close-popup
          >
            <q-item-section class="u-px16px">
              <q-item-label overline class="u-c-white">聯絡我們</q-item-label>
              <q-item-label caption class="u-c-white">Contact Us</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
:deep(.q-expansion-item__container) {
  border: 0px solid black;
  .q-item__label--caption {
    color: white;
  }
}
</style>
