<template>
    <div class="w-60 h-32 bg-gray-800 rounded-md overflow-hidden border-l-4 border-purple-700">
        <div class="bg-gray-700 w-full h-12 text-sm text-white font-bold pl-3 overflow-hidden flex flex-col justify-evenly">
            <p class="whitespace-nowrap text-ellipsis overflow-hidden">Simulator - {{ accountData.owner }}</p>
            <p class="whitespace-nowrap text-ellipsis overflow-hidden text-xs">
                Total Balance {{ accountData.balance }} {{ accountData.currency }}
            </p>
        </div>
        <div class="grid grid-cols-2 gap-1 pt-2 w-full px-2">
            <div class="text-gray-400 text-xs col-span-2">Open PnL</div>
            <div class="text-red-400 text-xs font-bold">-{{ accountData.open }} {{ accountData.currency }}</div>
            <div class="text-red-400 text-xs font-bold place-self-end">-{{ accountData.openPercent }}%</div>
            <div class="flex w-max">
                <div class="text-gray-400 text-xs mr-1">Daily PnL</div>
                <div class="text-green-400 text-xs font-bold place-self-end">
                    {{ accountData.dailyResult }} {{ accountData.currency }}
                </div>
            </div>
            <div class="text-green-400 text-xs font-bold place-self-end">{{ accountData.dailyPercent }}%</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker';
import { reactive } from 'vue';

const accountData = reactive({
    owner: faker.name.fullName(),
    currency: faker.finance.currencyCode(),
    balance: faker.commerce.price(0, 1000, 2),
    dailyResult: faker.commerce.price(0, 1000, 2),
    open: faker.commerce.price(0, 500, 2),
    openPercent: faker.commerce.price(0, 5, 2),
    dailyPercent: faker.commerce.price(0, 10, 2),
});
</script>
