<script setup lang="ts">
import Filters from "./Filters.vue";
import ArtItem from "./ArtItem.vue";
import Arts from "@/assets/arts.json";
import { onMounted, ref } from "vue";

const arts = Arts;

const gridColsNum = ref<number>(0);

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
  <section class="w-full flex flex-col gap-8">
    <Filters />
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
