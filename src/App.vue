<script setup lang="ts">
import { ref } from 'vue';
import HomePage from './components/HomePage.vue';
import Menu from './components/Menu.vue';
import WatchList from './components/WatchList.vue';
import { Pages } from './Interfaces/MenuTypes';
import { Swiper } from 'swiper';

const selectedPage = ref(Pages.HOME);
const swiper = ref<{ swiper: Swiper }>();
function onSelected(page: Pages) {
    selectedPage.value = page;
    swiper.value?.swiper.slideTo(1);
}
</script>

<template>
    <div class="w-screen max-w-full bg-black">
        <swiper-container ref="swiper" @slidechange="" slides-per-view="auto" :slide-to-clicked-slide="true" :initial-slide="1">
            <swiper-slide class="h-screen w-52">
                <Menu @selected="onSelected"></Menu>
            </swiper-slide>
            <swiper-slide class="w-full">
                <WatchList v-if="selectedPage === Pages.WATCHLIST"></WatchList>
                <HomePage v-if="selectedPage === Pages.HOME"></HomePage>
                <div v-if="selectedPage === Pages.NONE" class="flex items-center w-full h-screen justify-center">
                    <h1 class="text-xl text-white">Not yet</h1>
                </div>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<style scoped></style>

