import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import {i18n} from './plugins/i18n.js';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(VueSweetalert2);
app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount('#app');
