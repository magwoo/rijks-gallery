<script setup lang="ts">
import UModal from "./UModal.vue";
import ULink from "./ULink.vue";
import { useAuthState } from "@/states/auth";
import { RouterLink } from "vue-router";
import UButton from "./UButton.vue";
import { watch, ref } from "vue";

interface Props {
  title: string;
}

const isOpen = defineModel<boolean>();
const emit = defineEmits(["openAuth"]);
const props = defineProps<Props>();

const isStartAnimation = ref<boolean>(false);

const { currentAuth } = useAuthState();

watch(isOpen, (v) => {
  setTimeout(() => (isStartAnimation.value = v!), 0);
});
</script>

<template>
  <UModal v-model="isOpen" class="flex justify-end lg:hidden">
    <section
      @click.stop
      class="h-full bg-background transition-all duration-200 ease-out"
      :class="{
        'translate-x-0': isStartAnimation,
        'translate-x-8': !isStartAnimation,
      }"
    >
      <div class="flex flex-col justify-between h-svh p-4">
        <div class="flex flex-col gap-8">
          <h2 class="text-4xl text-neutral font-playfair font-bold pr-8">
            {{ props.title }}
          </h2>
          <div class="flex flex-col gap-6 text-lg">
            <ULink to="/">Главная</ULink>
            <ULink to="/gallery">Галерея</ULink>
            <ULink to="/authors">Авторы</ULink>
          </div>
        </div>
        <RouterLink
          v-if="currentAuth()"
          to="/profile"
          class="flex gap-3 items-center group"
        >
          <span class="text-neutral/75 group-hover:text-neutral font-medium">{{
            currentAuth()
          }}</span>
          <div class="bg-stone-200 rounded-full size-8" />
        </RouterLink>
        <UButton
          v-else
          @click="
            emit('openAuth');
            isOpen = false;
          "
          type="primary"
          class-name="w-full"
          >Войти</UButton
        >
      </div>
    </section>
  </UModal>
</template>
