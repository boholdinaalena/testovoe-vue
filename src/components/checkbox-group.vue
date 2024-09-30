<template>
  <div class="checkbox-group" role="group">
    <div v-for="checkbox in props.chekboxObject" :key="checkbox.id">
      <checkbox
        :label="checkbox.label"
        :checked="isCheckboxChecked(checkbox)"
        @update:checked="
          updateCheckedArr(checkbox.value || true, $event)
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import checkbox from "./checkbox.vue";
import { ref } from "vue";
import { useAppStore } from "../store";
import { CheckboxType, ValueCheckboxType } from "../types/checkboxTypes";

export interface Props {
  chekboxObject: Array<CheckboxType> | null;
}

const props = withDefaults(defineProps<Props>(), {
  chekboxObject: null,
});

const appStore = useAppStore();

const checkedArr = ref<ValueCheckboxType[]>([]);

const isCheckboxChecked = (checkbox: CheckboxType): boolean => {
  return checkedArr.value.includes(checkbox.value);
};

function updateCheckedArr(
  value: string | boolean,
  checked: boolean,
) {

  if (checked) {
      checkedArr.value.push(value);
  } else {
    const index = checkedArr.value.indexOf(value);
    if (index > -1) {
      checkedArr.value.splice(index, 1);
    }
  }

  appStore.setSelected([...checkedArr.value]);
}
</script>

<style>
.checkbox-group {
    display: flex;
    flex-direction: column;
    align-items: start;
}
</style>../types/checkboxTypes
