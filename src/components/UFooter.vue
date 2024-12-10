<script setup lang="ts">
import ULink from "./ULink.vue";
</script>

<template>
  <section class="w-full flex flex-col gap-4">
    <div class="h-0.5 w-full bg-neutral/10" />
    <div
      class="w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4"
    >
      <div class="flex flex-col gap-4">
        <h3 class="text-2xl font-medium font-playfair text-neutral">
          Связаться с нами
        </h3>
        <span class="text-neutral/50 font-medium flex gap-2"
          >Почта: <span class="text-neutral/75">gllry@gmail.com</span></span
        >
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-2xl font-medium font-playfair text-neutral">
          Навигация
        </h3>
        <ULink to="/">Главная</ULink>
        <ULink to="/gallery">Галерея</ULink>
        <ULink to="/authors">Авторы</ULink>
        <ULink to="/profile">Профиль</ULink>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-2xl font-medium font-playfair text-neutral">
          Источник данных
        </h3>
        <a
          href="https://rijksmuseum.nl/en"
          class="text-neutral/50 hover:text-neutral transition-colors font-medium"
          >rijks museum</a
        >
      </div>
    </div>
  </section>
</template>
