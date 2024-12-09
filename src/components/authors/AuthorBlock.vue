<script setup lang="ts">
import UButton from "../UButton.vue";

interface Props {
  fullName: string;
  previewUrl: string;
  century: string;
  artUrls: string[];
}

const props = defineProps<Props>();
</script>

<template>
  <section class="flex-col w-full">
    <span class="text-2xl font-playfair text-neutral/75 font-semibold">{{
      props.fullName
    }}</span>
    <div class="flex gap-6 overflow-clip">
      <img
        :src="props.previewUrl"
        class="aspect-square grow h-80 object-cover bg-stone-200/75"
      />
      <div class="flex flex-col gap-4 w-full">
        <div class="flex gap-4">
          <img v-for="url in artUrls.filter((_, i) => i < 3)" :src='url' class="h-52 object-cover grow bg-stone-200/75"></img>
        </div>
        <div class="flex gap-4">
          <div
            class="flex items-center justify-center h-24 basis-1/3 bg-stone-200/75"
          >
            <span
              class="text-6xl flex items-end font-semibold gap-2 text-neutral font-playfair"
              >{{ props.century }}
                <span class="text-lg mb-1">{{ props.century.length > 4 ? "века" : "век" }}</span>
              </span
            >
          </div>
          <div
            class="flex items-center justify-center h-24 grow bg-stone-200/75"
          >
            <span
              class="text-6xl flex items-end font-semibold gap-2 text-neutral font-playfair"
              >{{ props.artUrls.length }}
              <span class="text-lg mb-1">работы</span></span
            >
          </div>
          <UButton type="primary" class-name="size-24 text-2xl">></UButton>
        </div>
      </div>
    </div>
  </section>
</template>
