<script setup lang="ts">
interface ArtWorkInfo {
    author: string;
    createDate: string;
    type: string;
    materials: string[];
}

interface Props {
    title: string;
    info: ArtWorkInfo;
    description: string;
}

const props = defineProps<Props>();
</script>

<template>
    <section class="flex w-[1180px] mx-auto">
        <div>
            <img src="/public/assets/waterfall.png" alt="">
        </div>
        <div class="ml-16 font-inter text-neutral/50 font-semibold w-[720px]">
            <h1 class="text-4xl font-extrabold font-playfair text-accent">{{ props.title }}</h1>
            <div class="flex mt-4 gap-16">
                <div class="flex flex-col gap-2">
                    <span>Автор:</span>
                    <span>Дата создания:</span>
                    <span>Тип работы:</span>
                    <span>Материалы:</span>
                </div>
                <div class="flex flex-col gap-2 text-neutral">
                    <span>{{ props.info.author }}</span>
                    <span>{{ props.info.createDate }}</span>
                    <span>{{ props.info.type }}</span>
                    <span>{{ props.info.materials.join(', ') }}</span>
                </div>
            </div>
            <div class="mt-6">
                <p>{{ props.description }}</p>
            </div>
        </div>
    </section>
</template>