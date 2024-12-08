<script setup lang="ts">
import { ref } from "vue";
import UButton from "../UButton.vue";

const types = ["Живопись", "Графика", "Скульптуры", "ДПИ"];

const filterType = ref<string>(types[0]);
</script>

<template>
  <div class="flex gap-4">
    <UButton
      v-for="type in types"
      class-name="text-lg font-medium"
      :type="filterType == type ? 'primary' : 'basic'"
      @click="filterType = type"
      >{{ type }}</UButton
    >
  </div>
</template>
