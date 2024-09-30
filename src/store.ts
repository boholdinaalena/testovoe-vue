import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { ValueCheckboxType } from "./types/checkboxTypes";

export const useAppStore = defineStore("app", () => {
  const name = ref("");
  const selected = ref<ValueCheckboxType[]>([]);

  const getName = computed(() => name.value);
  const getSelected = computed(() => selected.value);

  const setSelected = (arr: ValueCheckboxType[]) => {
    selected.value = arr;
  };

  const setName = (val: string) => {
    name.value = val;
  };

  return {
    name,
    selected,
    getName,
    getSelected,
    setSelected,
    setName,
  };
});
