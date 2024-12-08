<script setup lang="ts">
import { RouterLink } from "vue-router";

interface Props {
  to: string;
}

const props = defineProps<Props>();
</script>

<template>
  <RouterLink
    :to="props.to"
    active-class="text-primary-500 hover:text-primary-600"
    class="text-neutral/50 hover:text-neutral transition-colors font-medium"
  >
    <slot></slot>
  </RouterLink>
</template>
