// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';

import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersist);

app.use(PrimeVue);
app.use(vuetify);

app.use(pinia);
app.mount('#app');
