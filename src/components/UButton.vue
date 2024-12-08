<script setup lang="ts">
type ButtonType = "basic" | "primary";

interface Props {
  type?: ButtonType;
  className?: string;
}

const { type = "basic", className } = defineProps<Props>();

const styles = {
  basic: "text-neutral bg-neutral/10 hover:bg-neutral/15 ",
  primary: "bg-primary-500 hover:bg-primary-600 text-white ",
};
</script>

<template>
  <button class="px-8 py-1 outline-none" :class="styles[type] + className">
    <slot></slot>
  </button>
</template>
