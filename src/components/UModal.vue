<script setup lang="ts">
const model = defineModel<boolean>();
</script>

<template>
  <div
    v-if="model"
    @click="model = false"
    class="fixed z-50 flex justify-center items-center pb-[15vh] top-0 left-0 backdrop-blur-sm w-full h-screen bg-black/35"
  >
    <slot></slot>
  </div>
</template>
