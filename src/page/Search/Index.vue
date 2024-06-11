<script setup>
import { storeToRefs } from "pinia";

import { useSearchStore } from "@/stores/search";

const searchStore = useSearchStore();
const { search, onBlur } = searchStore;
const { searchValidation } = storeToRefs(searchStore);

async function onSearch() {
  try {
    search.loading = true;
    const isValid = await searchValidation.value.$validate();
    if (isValid) await new Promise((resolve) => setTimeout(resolve, 2000)); // for testing
  } catch (error) {
  } finally {
    search.loading = false;
  }
}

async function keypressHandler(e) {
  if (e.key === "Enter" && !search.loading) await onSearch();
}

const vInputHelper = {
  mounted: (el) => {
    const targetEl = el.querySelector("input");
    targetEl.addEventListener("keydown", keypressHandler);
  },
  beforeUnmount: (el) => {
    const targetEl = el.querySelector("input");
    targetEl.removeEventListener("keydown", keypressHandler);
  },
};
</script>

<template>
  <div
    class="poster u-flex-grow u-pt50px u-flex u-flex-col u-justify-center u-items-center u-flex-gap-y-16px u-pt24px u-overflow-hidden"
    :class="[
      //   'u-bg-[rbga(0,0,0,0.6)]',
      //   'u-bg-blend-multiply',
      //   'u-bg-[url(/src/assets/img/search/search_page_poster.jpeg)]',
      //   'u-bg-cover',
      //   'u-bg-center',
    ]"
  >
    <q-select
      v-model="search.criteria"
      v-input-helper
      @blur="onBlur"
      class="lg:u-w600px sm:u-w80% u-mb8px"
      :loading="search.loading"
      :disable="search.loading"
      :error="searchValidation?.$error"
      :error-message="searchValidation?.$errors?.[0]?.$message"
      dark
      input-debounce="0"
      hide-dropdown-icon
      rounded
      outlined
      use-input
      use-chips
      multiple
      label-slot
    >
      <template v-slot:prepend>
        <div class="u-flex u-items-center u-h100%">
          <!-- <q-icon
            name="search"
            size="40px"
            class="lg:u-block sm:u-hidden u-w48px u-cursor-pointer"
            color="grey-2"
            @click="onSearch"
          />
          <q-icon
            name="search"
            size="30px"
            class="sm:u-block lg:u-hidden u-w36px u-cursor-pointer"
            color="grey-2"
            @click="onSearch"
          /> -->

          <q-btn
            flat
            round
            size="16px"
            color="grey-2"
            icon="search"
            @click="onSearch"
          />

          <q-separator
            inset
            vertical
            :color="searchValidation?.$error ? 'red-6' : 'grey-2'"
            class="u-mx4px"
            size="1px"
          />
        </div>
      </template>

      <template v-slot:label>
        <p
          class="u-fw600 u-text-24px"
          :class="`${
            searchValidation?.$error ? 'u-c-#F40E0E' : 'u-c-fcp-gray'
          }`"
        >
          Search...
        </p>
      </template>

      <!-- <template v-slot:hint>
        <template v-for="(tag, index) in search.tags" :key="index">
          <q-chip
            v-if="!search.criteria.includes(tag)"
            @click="search.criteria.push(tag)"
            :disable="search.criteria.length >= 3"
            outline
            clickable
            color="grey-2"
            text-color="grey-2"
          >
            {{ tag }}
          </q-chip>
        </template>
      </template> -->
    </q-select>

    <div class="lg:u-w600px sm:u-w80%">
      <template v-for="(tag, index) in search.tags" :key="index">
        <q-chip
          v-if="!search.criteria.includes(tag)"
          @click="search.criteria.push(tag)"
          :disable="search.criteria.length >= 3 || !!search.loading"
          outline
          clickable
          color="grey-2"
          text-color="grey-2"
          class="u-backdrop-blur-10"
        >
          {{ tag }}
        </q-chip>
      </template>
    </div>

    <div class="u-grid u-grid-cols-3 u-grid-gap-32px">
      <div class="u-border-1 u-border-solid">
        <div class="u-aspect-ratio-1 u-w300px u-h300px">
          <q-img class="u-h100% u-w100%"></q-img>
        </div>
        <q-btn
          outline
          rounded
          push
          class="u-border-color-fcp-yellow! u-mxauto"
          >{{ `Read Post | 閱讀更多` }}</q-btn
        >
        <q-separator class="u-bg-fcp-yellow" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// :deep() {
//   .q-field--auto-height {
//     .q-field__control {
//         min-height: 80px;
//     }
//   }
//   .q-field--outlined.q-field--rounded .q-field__control {
//     border-radius: 40px;
//   }

//   .q-field--auto-height.q-field--labeled .q-field__control-container {
//     padding-top: 0;
//   }
// }

.poster {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: multiply;
  background-image: url("/src/assets/img/search/search_page_poster.jpeg");
  background-size: cover;
  background-position: center center;
}
</style>
