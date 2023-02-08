<template>
    <div class="flex flex-col overflow-y-auto h-full">
        <!-- Tabs -->
        <div class="flex flex-row p-2 bg-red-400">
            <div v-for="wallet in wallets" :key="wallet.id" class="px-2">{{ wallet.name }}</div>
        </div>
        <!-- Filters -->
        <div class="bg-blue-400"><p>b</p></div>
        <!-- Content -->
        <div class="">
            <swiper-container :nested="true">
                <swiper-slide v-for="wallet in wallets" :key="wallet.id">
                    <AssetsCards :assets="wallet.assets"></AssetsCards>
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Wallet } from '../AssetMob/Wallet';
import AssetsCards from './AssetsCards.vue';

const wallets = ref([...Array(3)].map((_, i) => Wallet.get(i)));
</script>

<style scoped></style>

