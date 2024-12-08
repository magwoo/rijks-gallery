<script setup lang="ts">
interface Props {
  imgUrl: string;
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="relative group mb-3 cursor-pointer"
  >
    <img :src='props.imgUrl' class="relative group-hover:brightness-105 bg-stone-100 z-10 transition-all"></img>
    <div
      class="absolute duration-200 inset-0 group-hover:-inset-2 group-hover:-bottom-6 opacity-0 group-hover:opacity-100 bg-stone-700/10 transition-all"
    ></div>
    <span
      class="absolute -bottom-5 text-sm text-neutral/50 z-10 group-hover:text-neutral transition-colors"
      >{{ props.title }}</span
    >
    <span
      class="absolute -bottom-5 right-0 text-xs opacity-0 group-hover:opacity-50 text-neutral/25 z-10 group-hover:text-neutral transition-all"
      >Подробнее -></span
    >
  </div>
</template>
