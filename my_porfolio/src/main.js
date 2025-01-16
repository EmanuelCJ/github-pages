import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// import { VueReCaptcha } from 'vue-recaptcha';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueSweetalert2);
app.use(createPinia());
app.use(router);

// app.use(VueReCaptcha, {
//     siteKey: 'TU_CLAVE_DEL_SITIO', // Reemplaza con tu site key
//     loaderOptions: {
//       autoHideBadge: true, // Opcional para ocultar el badge de reCAPTCHA
//       explicitRenderParameters: {
//         theme: 'light', // Cambia a "dark" si lo prefieres
//       },
//     },
//   });

app.mount('#app');
