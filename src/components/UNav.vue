<script setup lang="ts">
import ULink from "./ULink.vue";
import UButton from "./UButton.vue";
import AuthForm from "./auth/AuthModal.vue";
import { ref } from "vue";
import { useAuthState } from "@/states/auth";
import USidebar from "./USidebar.vue";

interface Props {
  title: string;
}

const props = defineProps<Props>();
const isAuthOpen = ref<boolean>(false);
const isSidebarOpen = ref<boolean>(false);

const { currentAuth } = useAuthState();
</script>

<template>
  <AuthForm v-model="isAuthOpen" />
  <USidebar
    v-model="isSidebarOpen"
    @open-auth="isAuthOpen = true"
    :title="props.title"
  />
  <section
    class="fixed top-0 left-0 right-0 px-4 pt-2 z-20 bg-background/75 lg:p-0 backdrop-blur-md lg:relative flex flex-col gap-4 w-full"
  >
    <nav class="flex items-center justify-between w-full">
      <div class="hidden lg:flex gap-8">
        <ULink to="/">Главная</ULink>
        <ULink to="/gallery">Галерея</ULink>
        <ULink to="/authors">Авторы</ULink>
      </div>
      <h2 class="text-2xl text-neutral font-playfair font-bold">
        {{ props.title }}
      </h2>
      <RouterLink
        v-if="currentAuth()"
        to="/profile"
        class="hidden lg:flex gap-3 items-center group"
      >
        <span class="text-neutral/75 group-hover:text-neutral font-medium">{{
          currentAuth()
        }}</span>
        <div class="bg-stone-200 rounded-full size-8" />
      </RouterLink>
      <UButton
        v-else
        @click="isAuthOpen = true"
        type="primary"
        class="hidden lg:flex"
        >Войти</UButton
      >
      <button @click="isSidebarOpen = true" class="flex lg:hidden text-2xl">
        =
      </button>
    </nav>
    <div class="h-0.5 w-full bg-neutral/10"></div>
  </section>
</template>
