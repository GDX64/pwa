<template>
    <div class="w-full h-10 bg-gray-800 flex items-center pl-3">
        <div class="w-6 h-6 bg-white" @click="openMenu"></div>
    </div>
    <Transition name="menu">
        <div class="w-60 h-full bg-gray-900 fixed text-white" v-if="isOpen" @touchmove="onTouchMove">
            <div class="">sdfa</div>
            <swiper-container>
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
            </swiper-container>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
function openMenu() {
    isOpen.value = !isOpen.value;
}
function onTouchMove(event: TouchEvent) {
    console.log(event);
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
