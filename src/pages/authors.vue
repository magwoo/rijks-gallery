<script setup lang="ts">
import UNav from "@/components/UNav.vue";
import AuthorBlock from "@/components/authors/AuthorBlock.vue";
import Filters from "@/components/authors/Filters.vue";
import { ref, watch } from "vue";
import Authors from "@/assets/authors.json";
import Arts from "@/assets/arts.json";
import UFooter from "@/components/UFooter.vue";

const sourceAuthors = Authors;
const artUrls = Arts;

const authors = ref<any[]>(sourceAuthors);
const filters = ref();

watch(filters, () => {
  authors.value = sourceAuthors.filter((a) => {
    return a.name.toLowerCase().includes(filters.value.search.toLowerCase());
  });
});
</script>

<template>
  <UNav title="Авторы" />
  <section class="w-full flex flex-col items-center gap-8">
    <Filters v-model="filters" />
    <AuthorBlock
      v-for="author in authors"
      :id="author.id"
      :full-name="author.name"
      :preview-url="author.imgUrl"
      :century="author.century"
      :art-urls="
        artUrls.filter((a) => a.authorId == author.id).map((a) => a.imgUrl)
      "
    />
  </section>
  <UFooter />
</template>
