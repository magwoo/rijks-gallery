<script setup lang="ts">
import UNav from "@/components/UNav.vue";
import ArtInfo from "@/components/ArtInfo.vue";
</script>

<template>
  <UNav title="Галерея" />
  <ArtInfo
    title="123"
    :info="{
      author: '123',
      createDate: '345',
      type: 'fgh',
      materials: ['12', '34'],
    }"
    description="asd"
  />
</template>
