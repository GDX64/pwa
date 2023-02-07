<script setup lang="ts">
import { ref, watch } from 'vue';
import { Asset } from './AssetMob/Asset';
import { faker } from '@faker-js/faker';
import AssetsCards from './components/AssetsCards.vue';

const tickers = [...Array(50)].map(() => faker.lorem.word({ length: 5 }).toUpperCase());
const assets = ref(tickers.map((ticker) => Asset.get(ticker)));
watch(
    () => [...assets.value],
    (now, _old, clear) => {
        const subs = now.map((asset) => asset.observe());
        clear(() => subs.map((sub) => sub.unsubscribe()));
    },
    { immediate: true },
);
</script>

<template>
    <div class="w-screen max-w-full bg-black">
        <AssetsCards :assets="assets"></AssetsCards>
    </div>
</template>

<style scoped></style>

