<template>
    <footer class="text-white py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-between items-center">
          <!-- Nombre animado -->
          <div class="w-full lg:w-1/3 text-center lg:text-left mb-6 lg:mb-0">
            <div class="write">
              <h1 class="pt-4 font-bold text-3xl sm:text-3xl md:text-4xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Andrea Isabel Marín
                </span>
              </h1>
            </div>
          </div>
  
          <!-- Enlaces de navegación reducidos -->
          <div class="w-full lg:w-1/3 mb-6 lg:mb-0">
            <ul class="flex flex-wrap justify-center space-x-4">
              <li v-for="item in reducedMenu" :key="item.name">
                <a :href="item.href" 
                   class="hover:text-primary transition ease-linear"
                   @click="scrollToSection(item.href)">
                  {{ $t(item.name) }}
                </a>
              </li>
            </ul>
          </div>
  
          <!-- Redes sociales -->
          <div class="w-full lg:w-1/3 text-center lg:text-right">
            <LinksRedes />
          </div>
        </div>
  
        <!-- Línea divisoria -->
        <hr class="my-6 border-gray-700">
  
        <!-- Copyright -->
        <div class="text-center text-sm">
          <p>&copy; {{ new Date().getFullYear() }} {{ $t("footer.pie") }}</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import LinksRedes from './LinksRedes.vue'
  
  const reducedMenu = ref([
    { name: 'menu.home', href: '#inicio' },
    { name: 'menu.projects', href: '#proyectos' },
    { name: 'menu.skills', href: '#skills' },
  ]);
  
  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  </script>
  
  <style scoped>
  .write h1 {
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    margin-inline: auto;
    overflow: hidden;
    white-space: nowrap;
    animation: escribir 3s steps(22) forwards,
               blink 3s step-end infinite;
  }
  
  @keyframes escribir {
    from { width: 0; }
    to { width: 100%; }
  }
  
  @keyframes blink {
    50% { border-color: transparent; }
  }
  
  @media (max-width: 640px) {
    .write h1 {
      font-size: 1.5rem; /* Ajusta el tamaño para pantallas pequeñas */
    }
  }
  </style>