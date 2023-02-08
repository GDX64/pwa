<script setup lang="ts">
import { ref } from 'vue';
import HomePage from './components/HomePage.vue';
import Menu from './components/Menu.vue';
import WatchList from './components/WatchList.vue';
import { Pages } from './Interfaces/MenuTypes';
import { Swiper } from 'swiper';
import Burger from './assets/Burger.vue';
import Bell from './assets/Bell.vue';
import User from './assets/User.vue';

const selectedPage = ref(Pages.HOME);
const swiper = ref<{ swiper: Swiper }>();
function onSelected(page: Pages) {
    selectedPage.value = page;
    swiper.value?.swiper.slideTo(1);
}
function openMenu() {
    swiper.value?.swiper.slideTo(0);
}
</script>

<template>
    <div class="w-screen max-w-full h-screen bg-black flex flex-col overflow-hidden">
        <nav class="flex items-center pl-3 pr-3 h-8 min-h-[32px]">
            <Burger class="h-6 w-6 flex flex-col fill-white" @click="openMenu" />
            <h2 class="ml-5 font-bold">Welcome</h2>
            <User class="h-5 w-5 flex flex-col fill-white ml-auto mr-5"></User>
            <Bell class="h-5 w-5 flex flex-col fill-white"></Bell>
        </nav>
        <div class="grow overflow-hidden">
            <swiper-container
                ref="swiper"
                @slidechange=""
                slides-per-view="auto"
                :slide-to-clicked-slide="true"
                :initial-slide="1"
                class="h-full w-full"
            >
                <swiper-slide class="h-full w-52 max-h-full">
                    <Menu @selected="onSelected"></Menu>
                </swiper-slide>
                <swiper-slide class="w-screen h-full overflow-hidden">
                    <WatchList v-if="selectedPage === Pages.WATCHLIST"></WatchList>
                    <HomePage v-if="selectedPage === Pages.HOME"></HomePage>
                    <div v-if="selectedPage === Pages.NONE" class="flex items-center w-full h-screen justify-center">
                        <h1 class="text-xl text-white">Not yet</h1>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<style scoped></style>

