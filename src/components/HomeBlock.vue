<script setup lang="ts">
type ImageSize = "Base" | "Big";

interface Image {
  name: string;
  link: string;
  imgUrl: string;
}

interface Props {
  title: string;
  description: string;
  categoryHref: string;
  isEven?: boolean;
  imgHeight?: ImageSize;
  images: Image[];
}

const props = defineProps<Props>();

function computeImageClass(index: number): string {
  let className = "";

  if (props.imgHeight === "Big") {
    className += "aspect-[2/3] ";
  } else {
    className += "aspect-square ";
  }

  if (index === 0) {
    className += props.isEven ? "rounded-tl-[160px] " : "rounded-bl-[160px] ";
  } else if (index === props.images.length - 1) {
    className += props.isEven ? "rounded-br-[160px] " : "rounded-tr-[160px] ";
  }

  return className;
}
</script>

<template>
  <section class="flex flex-col gap-8 w-full">
    <div class="flex w-full items-end">
      <h1 class="text-7xl font-playfair font-bold text-accent w-1/2">
        {{ props.title }}
      </h1>
      <p class="text-neutral/50 font-medium leading-relaxed text-lg w-1/2">
        {{ props.description }}
      </p>
    </div>
    <div class="relative flex w-full gap-8">
      <a
        v-for="(image, index) in props.images"
        :href="image.link"
        class="group grow flex flex-col gap-4 items-center"
      >
        <img
          class="object-cover"
          :class="computeImageClass(index)"
          :src="image.imgUrl"
          alt="изображение"
        />
        <h3 class="font-playfair text-2xl font-semibold">{{ image.name }}</h3>
        <span
          class="text-neutral/50 font-medium group-hover:text-neutral group-hover:underline transition-colors"
          >Подробнее →</span
        >
      </a>
      <div class="absolute -right-10 flex h-full items-center pb-24">
        <a
          class="flex justify-center items-center text-3xl bg-primary-500 hover:bg-primary-600 rounded-full text-white size-20 transition-colors"
          :href="props.categoryHref"
          >--></a
        >
      </div>
    </div>
  </section>
</template>
