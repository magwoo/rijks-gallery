<script setup lang="ts">
import UNav from "@/components/UNav.vue";
import Authors from "@/assets/authors.json";
import Arts from "@/assets/arts.json";
import Gallery from "@/components/gallery/Gallery.vue";
import { onMounted } from "vue";

interface Props {
  id: string;
}

const props = defineProps<Props>();

const author = Authors.find((a) => a.id == props.id)!;
const arts = Arts.filter((a) => a.authorId == props.id);

onMounted(() => window.scrollTo(0, 0));
</script>

<template>
  <UNav :title="author.name" />
  <div class="flex flex-col md:flex-row w-full gap-4">
    <img
      :src="author.imgUrl"
      class="w-full md:size-72 aspect-square object-cover"
    />
    <div class="flex flex-col max-w-[720px]">
      <h1 class="text-5xl font-extrabold font-playfair text-neutral/90">
        {{ author.name }}
      </h1>
      <span class="font-medium text-neutral/75"
        >{{ author.country }}, {{ author.lifeYears }}</span
      >
      <p class="mt-4 text-neutral/75">{{ author.description }}</p>
    </div>
  </div>
  <Gallery :items="arts" />
</template>
