<template>
    <div class="w-full h-full bg-gray-900 text-white pl-2 pt-14 menu-grid">
        <div class="menu-item" @click="emit('selected', Pages.HOME)">
            <Home class="item-svg" />
            <div class="span">Home</div>
        </div>
        <div class="text-sm text-gray-400 mt-3 mb-3">Analysis</div>
        <div class="menu-item" @click="emit('selected', Pages.WATCHLIST)">
            <Trend class="item-svg"></Trend><span> Watch List </span>
        </div>
        <div class="menu-item" @click="emit('selected', Pages.NONE)"><Chart class="item-svg"></Chart><span> Chart </span></div>
        <div class="text-sm text-gray-400 mt-3 mb-3">Trading</div>
        <div class="menu-item" @click="emit('selected', Pages.NONE)"><Pie class="item-svg"></Pie><span> Portifolio </span></div>
    </div>
</template>

<script setup lang="ts">
import { Pages } from '../Interfaces/MenuTypes';
import Home from '../assets/home.vue';
import Trend from '../assets/Trend.vue';
import Chart from '../assets/Chart.vue';
import Pie from '../assets/Pie.vue';

const emit = defineEmits<{ (event: 'selected', page: Pages): void }>();
</script>

<style scoped>
.menu-item {
    @apply ml-4 flex items-center;
}
.item-svg {
    @apply w-4 h-4 mr-2 fill-gray-400;
}
.menu-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 40px;
    align-items: start;
    align-content: flex-start;
    justify-content: start;
    justify-items: start;
    row-gap: 8px;
}
</style>
