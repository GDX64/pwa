<script setup lang="ts">
import { reactive } from 'vue';
import { Asset } from './AssetMob/Asset';
import { faker } from '@faker-js/faker';
import AssetsCards from './components/AssetsCards.vue';

const tickers = [...Array(50)].map(() => faker.lorem.word({ length: 5 }).toUpperCase());
const assets = reactive(tickers.map((ticker) => Asset.get(ticker)));
assets.forEach((asset) => asset.observe());
</script>

<template>
    <div class="w-screen max-w-full bg-black">
        <AssetsCards :assets="assets"></AssetsCards>
    </div>
</template>

<style scoped></style>
