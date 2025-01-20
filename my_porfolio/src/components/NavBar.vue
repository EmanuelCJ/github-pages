<template>
  <header ref="headerRef" class="absolute w-full top-0 left-0 flex justify-between items-center p-6 bg-mustard/95 z-50 mt-5"
    data-aos="zoom-in-up">
    <div class="text-dark-gray text-3xl font-bold relative z-50">
      <LinksRedes />
    </div>

    <!-- Botón de Menú Móvil -->
    <button type="button" class="md:hidden relative z-50 focus:outline-none" @click="toggleMenu"
      aria-label="Toggle menu">
      <MenuIcon v-if="!isMenuOpen" class="w-8 h-8 text-dark-gray" />
      <XIcon v-else class="w-8 h-8 text-dark-gray" />
    </button>

    <!-- Menú de Navegación -->
    <Transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition-opacity duration-200 ease-in"
      leave-from-class="opacity-100" leave-to-class="opacity-0">
      <nav v-show="isMenuOpen || !isMobile"
        class="fixed inset-0 md:inset-auto md:static flex items-center justify-center md:justify-end z-40">
        <ul class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <li v-for="item in Menu" :key="item.name">
            <a :href="item.href"
              class="block text-dark-gray text-2xl md:text-lg font-medium transition-all duration-200 hover:text-purple hover:scale-105"
              @click="scrollToSection(item.href)">
              {{ $t(item.name) }}
            </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { MenuIcon, XIcon } from "lucide-vue-next";
import LinksRedes from "./LinksRedes.vue";

const isMenuOpen = ref(false);
const isMobile = ref(window.innerWidth < 768);
const headerHeight = ref(0); // Variable para almacenar la altura del header
const headerRef = ref(null); // Referencia al header

const Menu = ref([
    { name: "menu.home", href: "#inicio" },
    { name: "menu.experience", href: "#experiencia" },
    { name: "menu.projects", href: "#proyectos" },
    { name: "menu.skills", href: "#skills" },
    { name: "menu.education", href: "#educacion" },
    { name: "menu.contact", href: "#contacto" },
]);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? "hidden" : "";
};

const scrollToSection = (href) => {
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    isMenuOpen.value = false;
    document.body.style.overflow = "";
  }
};

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) {
    isMenuOpen.value = false;
    document.body.style.overflow = "";
  }
  updateHeaderHeight(); // Actualiza la altura del header en cada resize
};

const updateHeaderHeight = () => {
  if (headerRef.value) {
    headerHeight.value = headerRef.value.offsetHeight;
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight.value}px`
    );
  }
};

onMounted(() => {
  updateHeaderHeight();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  document.body.style.overflow = "";
});
</script>

<style scoped>
/* Variable CSS para el margen superior dinámico */
:root {
  --header-height: 0px;
}

/* Asegura que el contenido respete la altura del header */
body {
  padding-top: var(--header-height);
}

/* Previene el scroll cuando el menú está abierto */
:global(body.menu-open) {
  overflow: hidden;
}

/* Ajuste para el menú móvil */
/* Ajuste para el menú móvil */
nav {
  @apply min-h-screen md:min-h-0;
  background-color: #D4A017;
  /* Fondo transparente para móviles */
}

/* Media query para cambiar el fondo del menú en pantallas de 768px o más */
@media screen and (min-width: 768px) {
  nav {
    background-color: transparent;
    /* Fondo color arena para pantallas de 768px o más */
  }
} 
  </style>
