// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import vuetify from './plugins/vuetify';

// Ensure PrimeVue is properly configured if used
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(createPinia());
app.use(vuetify);

app.mount('#app');
