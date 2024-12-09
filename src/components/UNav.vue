<script setup lang="ts">
import ULink from "./ULink.vue";
import UButton from "./UButton.vue";
import AuthForm from "./auth/AuthModal.vue";
import { ref } from "vue";

interface Props {
  title: string;
}

const props = defineProps<Props>();
const isAuthOpen = ref<boolean>(false);
</script>

<template>
  <AuthForm :open="isAuthOpen" @close="isAuthOpen = false" />
  <section class="flex flex-col gap-4 w-full">
    <nav class="flex items-center justify-between w-full">
      <div class="lg:flex gap-8 hidden">
        <ULink to="/">Главная</ULink>
        <ULink to="/gallery">Галерея</ULink>
        <ULink to="/authors">Авторы</ULink>
      </div>
      <h2 class="text-2xl text-neutral font-playfair font-bold">
        {{ props.title }}
      </h2>
      <UButton @click="isAuthOpen = true" type="primary" class="hidden lg:flex"
        >Войти</UButton
      >
      <button class="flex lg:hidden text-2xl">=</button>
    </nav>
    <div class="h-0.5 w-full bg-neutral/10"></div>
  </section>
</template>
