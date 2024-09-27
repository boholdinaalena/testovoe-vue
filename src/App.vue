<script setup lang="ts">
import checkboxGroup from "./components/checkbox-group.vue";

const object = [
  { id: 1, label: "string" },
  { id: 3, label: "erew" },
  { id: 2, label: "tut" },
];

</script>

<template>
  <div>
    <checkbox-group :chekboxObject="object" :value="true"/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
