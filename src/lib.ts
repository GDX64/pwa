import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { register } from 'swiper/element/bundle';

interface Args {
    el: HTMLElement | string;
}

export function initApp(args: Args) {
    register();
    createApp(App).mount(args.el);
}
