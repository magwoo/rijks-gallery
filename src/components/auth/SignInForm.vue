<script setup lang="ts">
import UButton from "../UButton.vue";
import UInput from "../UInput.vue";
import { ref } from "vue";

const emit = defineEmits(["signup"]);

const login = ref<string>("");
const pass = ref<string>("");
</script>

<template>
  <div class="flex flex-col gap-5">
    <h1
      class="text-neutral/50 font-playfair text-4xl md:text-5xl font-bold mb-4"
    >
      Авторизация
    </h1>
    <UInput label="Логин / Почта" v-model="login" />
    <UInput label="Пароль" type="password" v-model="pass" />
  </div>
  <div class="flex flex-col md:flex-row gap-3 md:gap-6">
    <UButton @click="emit('signup')" class-name="text-lg py-2"
      >Регистрация</UButton
    >
    <UButton type="primary" class-name="grow text-lg py-2">Войти</UButton>
  </div>
</template>
