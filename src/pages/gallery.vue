<script setup lang="ts">
import Filters from "@/components/gallery/Filters.vue";
import Arts from "@/assets/arts.json";
import { ref, watch } from "vue";
import UNav from "@/components/UNav.vue";
import Gallery from "@/components/gallery/Gallery.vue";

const sourceArts = Arts;

const arts = ref<any[]>([]);

const filters = ref();

watch(filters, () => {
  arts.value = sourceArts.filter((art) =>
    art.title.toLowerCase().includes(filters.value.search.toLowerCase())
  );
});
</script>

<template>
  <UNav title="Галерея" />
  <section class="w-full flex flex-col gap-8">
    <Filters v-model="filters" />
    <Gallery :items="arts" />
  </section>
</template>
