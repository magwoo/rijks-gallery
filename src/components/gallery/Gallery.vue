<script setup lang="ts">
import { onMounted, ref } from "vue";
import ArtCard from "./ArtCard.vue";

interface GalleryItem {
  title: string;
  imgUrl: string;
}

interface Props {
  items: GalleryItem[];
}

const gridColsNum = ref<number>(0);
const props = defineProps<Props>();

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
  <div
    class="grid gap-6"
    :style="{ gridTemplateColumns: `repeat(${gridColsNum}, minmax(0, 1fr))` }"
  >
    <div v-for="n in gridColsNum" class="flex flex-col gap-6">
      <ArtCard
        v-for="item in props.items.filter((_, i) => (i % gridColsNum) + 1 == n)"
        :title="item.title"
        :img-url="item.imgUrl"
      />
    </div>
  </div>
</template>
