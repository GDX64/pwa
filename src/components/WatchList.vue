<template>
    <div class="flex flex-col overflow-y-auto h-full">
        <!-- Tabs -->
        <div class="flex flex-row p-2 bg-gray-900">
            <div
                v-for="(wallet, index) in wallets"
                :key="wallet.id"
                class="px-2"
                :class="currentIndex === index ? 'bg-gray-600 rounded-md' : ''"
                @click="changeSlide(index)"
            >
                {{ wallet.name }}
            </div>
        </div>
        <!-- Filters -->
        <!-- <div class="bg-blue-400"><p>b</p></div> -->
        <!-- Content -->
        <div class="">
            <swiper-container ref="swiper" :nested="true" @slidechange="onSlideChange" :initial-slide="currentIndex">
                <swiper-slide v-for="wallet in wallets" :key="wallet.id">
                    <AssetsCards :assets="wallet.assets"></AssetsCards>
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<script setup lang="ts">
import Swiper from 'swiper';
import { ref } from 'vue';
import { useAppEssentials } from '../Stores/Essentials';
import AssetsCards from './AssetsCards.vue';
const swiper = ref<{ swiper: Swiper }>();
const currentIndex = ref(0);
function onSlideChange() {
    currentIndex.value = swiper.value?.swiper.activeIndex ?? currentIndex.value;
}
function changeSlide(index: number) {
    swiper.value?.swiper.slideTo(index);
}
const { WalletConstructor } = useAppEssentials();
const wallets = ref([...Array(3)].map((_, i) => WalletConstructor.get(i)));
</script>

<style scoped></style>

