<script setup lang="ts">
import Filters from "./Filters.vue";

function randRatio() {
  return `9/${4 + 16 * Math.random()}`;
}
</script>

<template>
  <section class="w-full flex flex-col gap-8">
    <Filters />
    <div class="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="i in 6" class="flex flex-col gap-6">
        <div
          v-for="i in 16"
          class="bg-stone-200/75 w-full"
          :style="{ aspectRatio: randRatio() }"
        ></div>
      </div>
    </div>
  </section>
</template>
