<script setup lang="ts">
import UNav from "@/components/UNav.vue";
import AuthorBlock from "@/components/authors/AuthorBlock.vue";
import AuthInfo from "@/components/authors/AuthorInfo.vue";
import Filters from "@/components/authors/Filters.vue";
import { ref, watch } from "vue";
import Authors from "@/assets/authors.json";
import Arts from "@/assets/arts.json";
import AuthForm from "@/components/auth/AuthForm.vue";

const sourceAuthors = Authors;
const artUrls = Arts;

const authors = ref<any[]>(sourceAuthors);
const filters = ref();

watch(filters, () => {
  authors.value = sourceAuthors.filter((a) => {
    return a.name.toLowerCase().includes(filters.value.search.toLowerCase());
  });
});

const a = ref<boolean>(true);
</script>

<template>
  <UNav title="Авторы" />
  <button @click="a = true">open</button>
  <section class="w-full flex flex-col gap-8">
    <Filters v-model="filters" />
    <AuthorBlock
      v-for="author in authors"
      :full-name="author.name"
      :preview-url="author.imgUrl"
      :century="author.century"
      :art-urls="
        artUrls.filter((a) => a.authorId == author.id).map((a) => a.imgUrl)
      "
    />
    <AuthForm @close="a = false" :open="a" />
  </section>
</template>
