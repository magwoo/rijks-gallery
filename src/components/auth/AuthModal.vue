<script setup lang="ts">
import { ref } from "vue";
import SignInForm from "./SignInForm.vue";
import SignUpForm from "./SignUpForm.vue";

type AuthType = "signup" | "signin";

interface Props {
  open: boolean;
}

const emit = defineEmits(["close"]);
const props = defineProps<Props>();

const authType = ref<AuthType>("signin");
</script>

<template>
  <div
    v-if="props.open"
    @click="emit('close')"
    class="fixed z-50 flex justify-center items-center pb-[15vh] top-0 left-0 backdrop-blur-sm w-full h-screen bg-black/35"
  >
    <section
      @click.stop
      class="flex flex-col justify-between gap-24 p-6 mx-8 w-[540px] bg-background"
    >
      <SignInForm v-if="authType == 'signin'" @signup="authType = 'signup'" />
      <SignUpForm v-else @signin="authType = 'signin'" />
    </section>
  </div>
</template>
