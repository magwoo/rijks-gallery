<script setup lang="ts">
import UHeader from "@/components/UHeader.vue";
import HomeBlock from "@/components/home/HomeBlock.vue";

const images = [
  {
    name: "Подпись к картине",
    link: "#",
    imgUrl: "https://arthive.net/res/media/img/oy800/work/79a/583327.jpg",
  },
  {
    name: "Подпись к картине",
    link: "#",
    imgUrl: "https://arthive.net/res/media/img/oy800/work/79a/583327.jpg",
  },
  {
    name: "Подпись к картине",
    link: "#",
    imgUrl: "https://arthive.net/res/media/img/oy800/work/79a/583327.jpg",
  },
];
</script>

<template>
  <UHeader title="О проекте" />
  <HomeBlock
    title="Классические картины"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus."
    category-href="#"
    :images="images"
  />
  <HomeBlock
    title="Классические картины"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus."
    :is-even="true"
    category-href="#"
    img-height="Big"
    :images="images"
  />
</template>
