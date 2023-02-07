import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { register } from 'swiper/element/bundle';

register();
createApp(App).mount('#app');
