<script setup lang="ts">
import { reactive, watch } from 'vue';
import { Asset } from './AssetMob/Asset';
import { faker } from '@faker-js/faker';
import AssetsCards from './components/AssetsCards.vue';

const tickers = [...Array(50)].map(() => faker.lorem.word({ length: 5 }).toUpperCase());
const assets = reactive(tickers.map((ticker) => Asset.get(ticker)));
watch(
    () => [...assets],
    (now, _old, clear) => {
        const subs = now.map((asset) => asset.observe());
        clear(() => subs.map((sub) => sub.unsubscribe()));
    },
);
</script>

<template>
    <div class="w-screen max-w-full bg-black">
        <AssetsCards :assets="assets"></AssetsCards>
    </div>
</template>

<style scoped></style>
