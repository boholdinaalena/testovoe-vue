<template>
    <div>
      <input type="text" v-model="localText" @input="handleChange" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, defineProps, defineEmits } from 'vue';
  
  interface Props<T> {
    value: T;
  }
  
  const props = defineProps<Props<string>>();
  
  const localText = ref<string>(props.value);
  
  watch(
    () => props.value,
    (newValue: string) => {
      localText.value = newValue;
    },
    {
      immediate: true,
    }
  );
  
  const emit = defineEmits<{
    (e: 'update:value', value: string): void;
  }>();
  
  const handleChange = (event: Event) => {
    const { value } = event.target as HTMLInputElement;
    localText.value = value;
  
    emit('update:value', value);
  };
  </script>

  