import { createI18n } from 'vue-i18n'
import messages from "@intlify/unplugin-vue-i18n/messages"
import { ref } from 'vue'

const Lenguage = ref(localStorage.getItem('language'))


export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: Lenguage.value || 'es',
  fallbackLocale: 'en',
  availableLocales: ['es', 'en', 'it'],
  messages: messages,
});