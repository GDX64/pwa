<template>
    <div class="w-full h-full bg-gray-900 text-white">
        <div class="">Grade de cotações</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
function openMenu() {
    isOpen.value = !isOpen.value;
}

function onSliderChange() {
    console.log('slide');
}
</script>

<style scoped>
.menu-container {
}

.menu-enter-from {
    transform: translateX(-200px);
}
.menu-enter-active {
    transition: all 0.3s;
}
</style>
