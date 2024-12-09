<script setup lang="ts">
import { ref } from "vue";
import UButton from "../UButton.vue";
import UInput from "../UInput.vue";

const emit = defineEmits(["signin"]);

const loginError = ref<string>("");
const emailError = ref<string>("");
const passError = ref<string>("");
const rePassError = ref<string>("");

const login = ref<string>("");
const email = ref<string>("");
const pass = ref<string>("");
const rePass = ref<string>("");

function check() {
  if (login.value.length < 4) loginError.value = "не менее 4 символов";
  else loginError.value = "";

  if (!email.value.includes("@")) emailError.value = "должна содержать '@'";
  else if (!email.value.includes("."))
    emailError.value = "должна содержать точку";
  else emailError.value = "";

  if (pass.value.length < 6) passError.value = "не менее 6 символов";
  else passError.value = "";
  if (rePass.value != pass.value) rePassError.value = "пароли не совпадают";
  else rePassError.value = "";
}

function signup() {
  check();

  if (
    loginError.value ||
    emailError.value ||
    passError.value ||
    rePassError.value
  )
    return;
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <h1
      class="text-neutral/50 font-playfair text-4xl md:text-5xl font-bold mb-4"
    >
      Регистрация
    </h1>
    <UInput label="Логин" v-model="login" :error="loginError" />
    <UInput label="Почта" type="email" v-model="email" :error="emailError" />
    <UInput label="Пароль" type="password" v-model="pass" :error="passError" />
    <UInput
      label="Повтор пароля"
      type="password"
      v-model="rePass"
      :error="rePassError"
    />
  </div>
  <div class="flex flex-col md:flex-row gap-3 md:gap-6">
    <UButton @click="emit('signin')" class-name="text-lg py-2"
      >Авторизация</UButton
    >
    <UButton @click="signup" type="primary" class-name="grow text-lg py-2"
      >Зарегистрироваться</UButton
    >
  </div>
</template>
