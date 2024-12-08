<script setup lang="ts">
import Filters from "@/components/gallery/Filters.vue";
import ArtItem from "@/components/gallery/ArtCard.vue";
import Arts from "@/assets/arts.json";
import { onMounted, ref, watch } from "vue";
import UNav from "@/components/UNav.vue";

const sourceArts = Arts;

const arts = ref<any[]>([]);
const gridColsNum = ref<number>(0);
const filters = ref();

watch(filters, () => {
  arts.value = sourceArts.filter((art) =>
    art.title.toLowerCase().includes(filters.value.search.toLowerCase())
  );
});

function calcGridCols() {
  if (window.innerWidth > 1024) gridColsNum.value = 4;
  else if (window.innerWidth > 768) gridColsNum.value = 3;
  else gridColsNum.value = 2;
}

onMounted(() => {
  window.addEventListener("resize", calcGridCols);
  calcGridCols();
});
</script>

<template>
  <UNav title="Галерея" />
  <section class="w-full flex flex-col gap-8">
    <Filters v-model="filters" />
    <div
      class="grid gap-6"
      :style="{ gridTemplateColumns: `repeat(${gridColsNum}, minmax(0, 1fr))` }"
    >
      <div v-for="n in gridColsNum" class="flex flex-col gap-6">
        <ArtItem
          v-for="art in arts.filter((_, i) => (i % gridColsNum) + 1 == n)"
          :title="art.title"
          :img-url="art.imgUrl"
        />
      </div>
    </div>
  </section>
</template>
