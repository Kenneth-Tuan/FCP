import { reactive, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export const useSearchStore = defineStore(
  "search",
  () => {
    const search = reactive({
      criteria: [],
      loading: false,
      tags: [
        "#穆宣",
        "#穆斯林",
        "#宣教士",
        "#FCP",
        "#實體全修班",
        "#線上選修班",
        "#自由選課生",
        "#招生資訊",
      ],
    });

    const rules = computed(() => ({
      search: {
        criteria: {
          required: helpers.withMessage(
            () => "Please enter a search term",
            (val) => val.length > 0
          ),
        },
      },
    }));

    const v$ = useVuelidate(rules, { search }, { $lazy: true });

    function onBlur(e) {
      const target = e.target;
      const value = target.value;
      if (
        !value ||
        !value?.trim() ||
        search.criteria.length > 2 ||
        search.criteria.includes(value.toUpperCase())
      )
        return;
      search.criteria.push(value);
    }

    return {
      search,
      searchValidation: v$,

      onBlur,
    };
  },
  {
    persist: false,
  }
);
