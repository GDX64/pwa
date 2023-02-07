<template>
    <div class="w-full h-full bg-gray-900 text-white">
        <div class="" @click="emit('selected', Pages.HOME)">Home</div>
        <div class="" @click="emit('selected', Pages.WATCHLIST)">Grade de cotações</div>
    </div>
</template>

<script setup lang="ts">
import { Pages } from '../Interfaces/MenuTypes';

const emit = defineEmits<{ (event: 'selected', page: Pages): void }>();
</script>

<style scoped></style>
