<template>
    <div role="group">
      <div v-for="checkbox in props.chekboxObject" :key="checkbox.id">
        <checkbox
          :label="checkbox.label"
          :checked="isCheckboxChecked(checkbox)"
          @update:checked="updateCheckedArr(checkbox.id, $event)"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import checkbox from "./checkbox.vue";
  import { ref } from "vue";
  import { useAppStore } from '../store';
  
  export interface CheckboxType {
    id: number;
    label: string;
    value?: boolean;
  }
  
  export interface Props {
    value?: string | boolean;
    chekboxObject: Array<CheckboxType>;
  }
  
  const props = withDefaults(defineProps<Props>(), {
    chekboxObject: [],
  });
  
  const appStore = useAppStore();
  
  const checkedArr = ref<number[]>([]);
  
  const isCheckboxChecked = (checkbox: CheckboxType): boolean => {
    return checkedArr.value.includes(checkbox.id);
  };
  
  function updateCheckedArr(id: number, checked: boolean) {
    if (checked) {
      if (!checkedArr.value.includes(id)) {
        checkedArr.value.push(id);
      }
    } else {
      const index = checkedArr.value.indexOf(id);
      if (index > -1) {
        checkedArr.value.splice(index, 1);
      }
    }
  
    appStore.setSelected([...checkedArr.value]);
  }
  </script>
  