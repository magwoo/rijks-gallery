<script setup lang="ts">
import { ref, watch } from "vue";
import UButton from "../UButton.vue";
import SearchIcon from "../icons/SearchIcon.vue";

interface Model {
  search: string;
  filter: string;
}

const filterTypes = ["По годам", "По Именам"];

const filterType = ref<string>(filterTypes[0]);
const groups = ref<string[]>([]);
const search = ref<string>("");
const isShowFilter = ref<boolean>(false);

const filters = defineModel<Model>();

watch(
  [filterType, search],
  () => {
    filters.value = {
      search: search.value,
      filter: filterType.value,
    };
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <div class="bg-neutral/10 grow flex items-center px-3">
      <SearchIcon />
      <input
        name="search-query"
        type="text"
        placeholder="Найти.."
        v-model="search"
        class="bg-transparent placeholder:text-neutral/50 font-medium outline-none px-2 py-1 grow text-neutral"
      />
    </div>
    <div class="flex gap-8 flex-col lg:flex-row">
      <div class="grid grid-cols-2 gap-4 grow">
        <UButton
          v-for="t in filterTypes"
          class-name="font-medium"
          :type="filterType == t ? 'primary' : 'basic'"
          @click="
            filterType = t;
            groups = [];
          "
          >{{ t }}</UButton
        >
      </div>
      <UButton
        @click="isShowFilter = !isShowFilter"
        class-name="grow font-medium"
        >Фильтры({{ groups.length }}) <span v-if="isShowFilter">↑</span
        ><span v-if="!isShowFilter">↓</span></UButton
      >
    </div>
    <div v-if="isShowFilter" class="flex gap-4 flex-wrap">
      <UButton
        v-for="i in Math.round(filterType.length)"
        class-name="grow"
        :type="groups.includes(`бла бла ${i}`) ? 'primary' : 'basic'"
        @click="groups.push(`бла бла ${i}`)"
        >бла бла {{ i }}</UButton
      >
    </div>
  </div>
</template>
