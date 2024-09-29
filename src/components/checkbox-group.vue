<template>
  <div class="checkbox-group" role="group">
    <div v-for="checkbox in props.chekboxObject" :key="checkbox.id">
      <checkbox
        :label="checkbox.label"
        :checked="isCheckboxChecked(checkbox)"
        @update:checked="
          updateCheckedIdArr(checkbox.value || true, $event)
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import checkbox from "./checkbox.vue";
import { ref } from "vue";
import { useAppStore } from "../store";
import { CheckboxType } from "./types/checkboxTypes";

export interface Props {
  chekboxObject: Array<CheckboxType> | null;
}

const props = withDefaults(defineProps<Props>(), {
  chekboxObject: null,
});

const appStore = useAppStore();

const checkedIdArr = ref<string[]>([]);

const isCheckboxChecked = (checkbox: CheckboxType): boolean => {
  return checkedIdArr.value.includes(checkbox.value);
};

function updateCheckedIdArr(
  value: string | boolean,
  checked: boolean,
) {

  if (checked) {
      checkedIdArr.value.push(value);
  } else {
    const index = checkedIdArr.value.indexOf(value);
    if (index > -1) {
      checkedIdArr.value.splice(index, 1);
    }
  }

  appStore.setSelected([...checkedIdArr.value]);
}
</script>

<style>
.checkbox-group {
    display: flex;
    flex-direction: column;
    align-items: start;
}
</style>
