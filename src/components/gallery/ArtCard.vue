<script setup lang="ts">
interface Props {
  imgUrl: string;
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div
    class="relative group cursor-pointer active:scale-100 hover:scale-[1.02] transition-transform"
  >
    <img :src='props.imgUrl' class="relative group-hover:brightness-105 bg-stone-100 z-10 w-full transition"></img>
    <div
      class="absolute duration-200 inset-0 group-hover:-inset-2 opacity-0 group-hover:opacity-100 bg-stone-700/10 transition"
    ></div>
    <div class='relative flex justify-between -mt-0.5 text-sm z-10'>
      <span
        class="flex text-neutral/50 group-hover:text-neutral transition-colors"
        >{{ props.title }}</span
      >
      <span class='text-neutral/50 font-bold opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition'>→</span>
    </div>
  </div>
</template>
