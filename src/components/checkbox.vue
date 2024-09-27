<template>
  <div>
    <input type="checkbox" :checked="localChecked" @change="handleChange" />
    <span>{{ props.label }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, defineModel, defineEmits } from "vue";

export interface Props {
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
});

const emits = defineEmits<{
  (e: "update:checked", value: boolean): () => void;
}>();

const modelValue = defineModel<boolean>("checked", { required: true });

const localChecked = ref(modelValue.value);

const handleChange = (event: Event) => {
  const { checked } = event.target as HTMLInputElement;

  localChecked.value = checked;

  emits("update:checked", checked);
};
</script>

<style scoped></style>
