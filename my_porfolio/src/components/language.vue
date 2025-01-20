<template>
    <div class="language-selector">
      <label for="language-select" class="language-label">
        {{ currentLanguage === 'es' ? 'Idioma:' : 'Language:' }}
      </label>
      <select
        id="language-select"
        v-model="selectedLanguage"
        @change="changeLanguage"
        class="select-language"
        :title="currentLanguage === 'es' ? 'Cambiar idioma' : 'Change language'"
      >
        <option value="es">Spanish</option>
        <option value="en">English</option>
        <option value="it">Italian</option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useLanguageStore } from '@/stores/languageStore'
  
  const languageStore = useLanguageStore()
  const selectedLanguage = ref(languageStore.currentLanguage)
  
  const changeLanguage = () => {
    languageStore.setLanguage(selectedLanguage.value)
    // Refrescar la página
    window.location.reload()
  }
  
  onMounted(() => {
    selectedLanguage.value = languageStore.currentLanguage
  })
  
  const currentLanguage = computed(() => languageStore.currentLanguage)
  </script>
  
  <style scoped>
  .language-selector {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px 10px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .language-label {
    margin-right: 8px;
    font-size: 14px;
    color: #333;
  }
  
  .select-language {
    appearance: none;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .select-language:hover {
    background-color: #f0f0f0;
  }
  
  @media (max-width: 640px) {
    .language-selector {
      top: 5px;
      right: 5px;
      padding: 3px 6px;
    }
  
    .language-label {
      font-size: 12px;
    }
  
    .select-language {
      font-size: 12px;
      padding: 2px 4px;
    }
  }
  </style>