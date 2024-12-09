<script setup lang="ts">
interface Props {
  label: string;
  error?: string;
  type?: string;
}

const props = defineProps<Props>();
const model = defineModel<string>();
</script>

<template>
  <div
    class="relative flex bg-neutral/15 px-3 py-1.5"
    :class="{ 'ring-red-400 ring-inset ring-2': !!error }"
  >
    <input
      :id="label"
      :name="label"
      :type="props.type"
      v-model="model"
      placeholder=" "
      class="w-full bg-transparent outline-none peer text-neutral"
    />
    <label
      :for="label"
      class="absolute text-neutral/50 pointer-events-none -top-2.5 left-1 text-sm peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-3 peer-placeholder-shown:text-base transition-all"
      >{{ label }}</label
    >
    <span class="absolute right-2 -top-4 text-sm text-red-400">{{
      props.error
    }}</span>
    <button @click="model = ''" class="text-neutral/30 hover:text-neutral/75">
      ✕
    </button>
  </div>
</template>
