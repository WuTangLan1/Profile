// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import vuetify from './plugins/vuetify';

import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);

const pinia = createPinia();
app.use(pinia);
app.use(vuetify);

app.mount('#app');
