<script setup lang="ts">
import UNav from "@/components/UNav.vue";
import Arts from "@/assets/arts.json";
import { onMounted } from "vue";

interface Props {
  id: string;
}

const props = defineProps<Props>();

const art = Arts.find((a) => a.id == props.id)!;

onMounted(() => window.scrollTo(0, 0));
</script>

<template>
  <UNav :title="art.title" />
  <div class="flex flex-col md:flex-row w-full gap-4">
    <img
      :src="art.imgUrl"
      class="min-w-48 min-h-48 object-cover max-w-96 max-h-96"
    />
    <div class="flex flex-col max-w-[720px]">
      <h1 class="text-5xl font-extrabold font-playfair text-neutral/90">
        {{ art.title }}
      </h1>
      <p class="mt-4 text-neutral/75">{{ art.description }}</p>
    </div>
  </div>
</template>
