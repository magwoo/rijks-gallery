<script setup lang="ts">
interface Props {
  open?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["close"]);
</script>

<template>
  <div
    v-if="props.open"
    @click="emit('close')"
    class="fixed flex justify-center items-center pb-[15vh] top-0 left-0 backdrop-blur-sm w-full h-screen bg-black/20"
  >
    <section @click.stop class="w-96 h-80 bg-background"></section>
  </div>
</template>
