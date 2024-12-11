<script setup lang="ts">
type ImageSize = "Base" | "Big";

interface Image {
  name: string;
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
    className += props.isEven
      ? "rounded-tl-[160px] lg:rounded-tl-[200px] "
      : "rounded-bl-[160px] lg:rounded-bl-[200px] ";
  } else if (index === props.images.length - 1) {
    className += props.isEven
      ? "rounded-br-[160px] lg:rounded-br-[200px] "
      : "rounded-tr-[160px] lg:rounded-tr-[200px] ";
  }

  return className;
}
</script>

<template>
  <section class="flex flex-col gap-8 w-full mb-8">
    <div class="flex flex-col lg:flex-row w-full lg:items-end gap-2">
      <h1
        class="lg:text-7xl text-5xl font-playfair font-bold text-accent lg:w-1/2"
      >
        {{ props.title }}
      </h1>
      <p
        class="text-neutral/50 font-medium leading-relaxed lg:text-lg lg:w-1/2"
      >
        {{ props.description }}
      </p>
    </div>
    <div class="relative flex w-full gap-8">
      <div
        v-for="(image, index) in props.images"
        :class="{ 'hidden lg:flex': index == 1, flex: index != 1 }"
        class="group w-1/2 lg:w-1/3 flex flex-col gap-2 lg:gap-4 items-center"
      >
        <img
          class="object-cover w-full"
          :class="computeImageClass(index)"
          :src="image.imgUrl"
          alt="изображение"
        />
        <h3 class="font-playfair text-lg lg:text-2xl font-semibold text-center">
          {{ image.name }}
        </h3>
      </div>
      <div
        class="absolute -right-4 lg:-right-10 flex h-full items-center pb-24"
      >
        <a
          class="flex justify-center items-center text-xl lg:text-3xl bg-primary-500 hover:bg-primary-600 rounded-full text-white size-12 lg:size-20 transition-colors"
          :href="props.categoryHref"
          >--></a
        >
      </div>
    </div>
  </section>
</template>
