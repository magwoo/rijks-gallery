<script setup lang="ts">
import { ref, watch } from "vue";
import UButton from "../UButton.vue";
import SearchIcon from "../icons/SearchIcon.vue";

interface Model {
  search: string;
  type: string;
}

const types = ["Живопись", "Графика", "Скульптуры", "ДПИ"];

const type = ref<string>(types[0]);
const groups = ref<string[]>([]);
const search = ref<string>("");
const isShowFilter = ref<boolean>(false);

const filters = defineModel<Model>();

watch(
  [type, search],
  () => {
    filters.value = {
      search: search.value,
      type: type.value,
    };
  },
  { immediate: true }
);
</script>

<template>
  <div class="flex flex-col gap-4">
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
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 grow">
        <UButton
          v-for="t in types"
          class-name="font-medium"
          :type="type == t ? 'primary' : 'basic'"
          @click="
            type = t;
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
        v-for="i in Math.round(type.length)"
        class-name="grow"
        :type="groups.includes(`бла бла ${i}`) ? 'primary' : 'basic'"
        @click="groups.push(`бла бла ${i}`)"
        >бла бла {{ i }}</UButton
      >
    </div>
  </div>
</template>
