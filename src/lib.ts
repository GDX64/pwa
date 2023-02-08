import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { register } from 'swiper/element/bundle';
import { AppEssentials } from './Interfaces/AppEssentials';

interface Args {
    el: HTMLElement | string;
    essentials: AppEssentials;
}

export function initApp(args: Args) {
    register();
    createApp(App, {}).provide('appEssentials', args.essentials).mount(args.el);
}
