// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import { useDark, useToggle } from '@vueuse/core';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

app.provide('isDark', useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: 'dark-mode',
    storage: window.localStorage
}));
app.provide('toggleDark', useToggle(app.provide('isDark')));

app.mount('#app');
