<script setup lang="ts">
interface Props {
  class?: string;
}

const model = defineModel<boolean>();

const props = defineProps<Props>();
</script>

<template>
  <Transition
    enter-from-class="opacity-0 scale-[1.03]"
    leave-to-class="opacity-0 scale-[1.02]"
  >
    <div
      v-if="model"
      @click="model = false"
      class="fixed z-50 top-0 left-0 backdrop-blur-sm w-full h-screen bg-black/35 transition duration-200"
      :class="props.class"
    >
      <slot></slot></div
  ></Transition>
</template>
