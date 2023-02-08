<template>
    <div class="grid grid-cols-1 max-w-full w-full justify-center justify-items-center divide-y divide-zinc-700" style="">
        <template v-for="asset of assets" :key="asset.ticker">
            <div class="grid grid-cols-3 w-full rounded-sm p-2" v-memo="[asset.ticker, asset.quotation]">
                <div class="text-center space-y-1">
                    <p class="justify-center font-bold" :class="asset.varClass()">{{ asset.ticker }}</p>
                    <p class="justify-center text-xs text-gray-400 truncate overflow-hidden">{{ asset.name }}</p>
                </div>
                <div class="text-center space-y-1">
                    <p class="">{{ asset.quotation.toFixed(2) }}</p>
                    <p class="text-xs text-gray-400">{{ asset.date.toTimeString().split(' ')[0] }}</p>
                </div>
                <div class="text-center space-y-1">
                    <p class="" :class="asset.varClass()">{{ asset.variation.toFixed(2) + '%' }}</p>
                    <p class="text-xs text-gray-400">{{ asset.trades }}</p>
                </div>
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { Asset } from '../Interfaces/AssetInterface';

const props = defineProps<{ assets: Asset[] }>();

watch(
    () => [...props.assets],
    (now, _old, clear) => {
        const unsubs = now.map((asset) => asset.observe());
        clear(() => unsubs.forEach((unsub) => unsub()));
    },
    { immediate: true },
);
</script>
