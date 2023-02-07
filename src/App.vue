<script setup lang="ts">
import Menu from './components/Menu.vue';
import WatchList from './components/WatchList.vue';
</script>

<template>
    <div class="w-screen max-w-full bg-black">
        <swiper-container @slidechange="" slides-per-view="auto" :slide-to-clicked-slide="true" :initial-slide="1">
            <swiper-slide class="h-screen w-52">
                <Menu></Menu>
            </swiper-slide>
            <swiper-slide class="w-full">
                <WatchList></WatchList>
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<style scoped></style>

