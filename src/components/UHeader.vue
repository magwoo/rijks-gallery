<script setup lang="ts">
import UNav from "./UNav.vue";

interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <section class="flex flex-col gap-8 w-full">
    <UNav :title="props.title" />
    <div class="flex justify-between w-full gap-16">
      <div class="flex flex-col gap-8 basis-1/2">
        <h1 class="text-7xl font-playfair font-bold text-accent">
          Типа очень<br />
          крутая надпись средней длинны
        </h1>
        <p class="text-neutral/50 font-medium leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus
          sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed
          porta scelerisque.
        </p>
      </div>
      <div class="flex gap-8 justify-end">
        <div class="flex flex-col gap-8 mt-8">
          <image class="h-48 w-32 bg-stone-200/75"></image>
          <image class="h-48 w-32 bg-stone-200/75"></image>
        </div>
        <div class="flex flex-col gap-8">
          <image class="h-48 w-32 bg-stone-200/75"></image>
          <image class="h-48 w-32 bg-stone-200/75"></image>
        </div>
        <div class="flex flex-col gap-8 mt-8">
          <image class="h-48 w-32 bg-stone-200/75"></image>
          <image class="h-48 w-32 bg-stone-200/75"></image>
        </div>
      </div>
    </div>
  </section>
</template>
