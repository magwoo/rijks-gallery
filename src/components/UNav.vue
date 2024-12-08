<script setup lang="ts">
import ULink from "./ULink.vue";
import UButton from "./UButton.vue";

interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <section class="flex flex-col gap-4 w-full">
    <nav class="flex items-center justify-between w-full">
      <div class="flex gap-8">
        <ULink to="/">Главная</ULink>
        <ULink to="/gallery">Галерея</ULink>
        <ULink to="/authors">Авторы</ULink>
      </div>
      <h2 class="text-2xl text-neutral font-playfair font-bold">
        {{ props.title }}
      </h2>
      <UButton>Войти</UButton>
    </nav>
    <div class="h-0.5 w-full bg-neutral/10"></div>
  </section>
</template>
