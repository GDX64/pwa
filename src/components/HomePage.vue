<template>
    <div class="flex flex-col pt-10 w-full px-2">
        <h1 class="text-xl mb-5">This is home</h1>
        <div class="flex items-center mb-12">
            <PossitionCard></PossitionCard>
            <div class="text-2xl border-2 border-white w-6 h-6 rounded-full items-center flex justify-center ml-5">+</div>
        </div>
        <swiper-container :nested="true" slides-per-view="auto" free-mode="true" :space-between="10">
            <swiper-slide class="w-60">
                <PossitionCard></PossitionCard>
            </swiper-slide>
            <swiper-slide class="w-60">
                <PossitionCard></PossitionCard>
            </swiper-slide>
            <swiper-slide class="w-60">
                <PossitionCard></PossitionCard>
            </swiper-slide>
            <swiper-slide class="">
                <PossitionCard></PossitionCard>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script setup lang="ts">
import PossitionCard from './PossitionCard.vue';
</script>
