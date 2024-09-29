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
  <div class="app">
    <h3>Components</h3>
    <div class="app__components">
      <checkbox-group :chekboxObject="object" /> <input v-model="model" />
    </div>
    <h3>Store</h3>
    <div>Seleted: {{ selected }}</div>
    <div>Name: {{ name }}</div>
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
}
</style>
