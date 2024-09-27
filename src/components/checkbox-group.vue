<template>
  <div role="group">
    <div v-for="checkbox in props.chekboxObject" :key="checkbox.id">
      <checkbox
        :label="checkbox.label"
        :checked="isCheckboxChecked(checkbox.id)"
        @update:checked="updateCheckedArr(checkbox.id, $event)"
      />
    </div>
    {{ checkedArr }}
  </div>
</template>

<script setup lang="ts">
import checkbox from "./checkbox.vue";
import { reactive } from "vue";

export interface CheckboxType {
  id: number;
  label: string;
}

export interface Props {
  value?: string | boolean;
  chekboxObject: Array<CheckboxType>;
}

const props = withDefaults(defineProps<Props>(), {
  value: false,
});

let checkedArr = reactive<number[]>([]);

const isCheckboxChecked = (id: number): boolean => {
  return props.value === checkedArr.includes(id);
};

function updateCheckedArr(id: number, checked: boolean) {
  if (checked) {
    checkedArr.push(id);

    return;
  }
  const index = checkedArr.indexOf(id);
  if (index > -1) {
    checkedArr.splice(index, 1);
  }
}
</script>
./checkbox.vue
