<script setup lang="ts">
import checkboxGroup from "./components/checkbox-group.vue";
import input from "./components/input.vue";
import { useAppStore } from "./store";
import { computed, ref, watch } from "vue";
import { object } from "./mocks";

const appStore = useAppStore();

const model = ref("");

const selected = computed(() => appStore.getSelected);

const name = computed(() => appStore.getName);

watch(model, (val) => {
  appStore.setName(val);
});

</script>

<template>
  <div>
    <checkbox-group :chekboxObject="object" />
    <input v-model="model" />
    {{ selected }}{{ name }}
  </div>
</template>