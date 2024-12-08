<script setup lang="ts">
import UNav from './UNav.vue';

interface Props {
    title: string;
}

const props = defineProps<Props>();
</script>

<template>
    <section class='flex flex-col gap-8 w-full'>
        <UNav :title='props.title' />
        <div class='flex-col flex lg:flex-row items-center justify-between w-full gap-8 lg:gap-2'>
            <div class='flex flex-col gap-8 lg:w-1/2'>
                <h1 class='lg:text-7xl text-5xl font-playfair font-bold text-accent'>Типа очень<br />крутая надпись средней длинны</h1>
                <p class='text-neutral/50 font-medium leading-relaxed lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lectus risus, finibus ornare vestibulum et, feugiat quis dui. Vivamus sit amet dolor et magna facilisis rhoncus. Curabitur maximus est sed porta scelerisque.</p>
            </div>
            <div class='flex gap-4 lg:gap-8 justify-end max-w-[480px]'>
                <div class='flex flex-col gap-4 lg:gap-8 mt-8 w-1/3'>
                    <img src="/assets/portrait.jpg" class='aspect-[3/4] object-cover bg-stone-200/75'></img>
                    <img src="/assets/portrait.jpg" class='aspect-[3/4] object-cover bg-stone-200/75'></img>
                </div>
                <div class='flex flex-col gap-4 lg:gap-8 mb-8 w-1/3'>
                    <img src="/assets/portrait.jpg" class='aspect-[3/4] object-cover bg-stone-200/75'></img>
                    <img src="/assets/portrait.jpg" class='aspect-[3/4] object-cover bg-stone-200/75'></img>
                </div>
                <div class='flex flex-col gap-4 lg:gap-8 mt-8 w-1/3'>
                    <img src="/assets/portrait.jpg" class='aspect-[3/4] object-cover bg-stone-200/75'></img>
                    <img src="/assets/portrait.jpg" class='aspect-[3/4] object-cover bg-stone-200/75'></img>
                </div>
            </div>
        </div>
    </section>
</template>