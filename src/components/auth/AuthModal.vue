<script setup lang="ts">
import { ref } from "vue";
import SignInForm from "./SignInForm.vue";
import SignUpForm from "./SignUpForm.vue";
import UModal from "../UModal.vue";

type AuthType = "signup" | "signin";

const model = defineModel<boolean>();

const authType = ref<AuthType>("signin");
</script>

<template>
  <UModal v-model="model">
    <section
      @click.stop
      class="flex flex-col justify-between gap-24 p-6 mx-8 w-[540px] bg-background"
    >
      <SignInForm
        v-if="authType == 'signin'"
        @signup="authType = 'signup'"
        @close="model = false"
      />
      <SignUpForm v-else @signin="authType = 'signin'" />
    </section>
  </UModal>
</template>
