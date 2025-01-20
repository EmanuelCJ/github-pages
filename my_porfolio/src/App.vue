<template>
  <div>
    <language/>
  </div>
  <div class="bg-gradient-to-br from-arena to-gray-800 min-h-screen">
    <NavBar/>
    <div>
      <presentacion/>
      <experiencia/>
      <proyectos/>
      <skills/>
      <formacion/>
      <ContactoRecaptcha/>
      <WhastsApp/>
    </div>
    <Footer/>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import presentacion from '@/components/Presentacion.vue';
import experiencia from '@/components/Experiencia.vue';
import proyectos from '@/components/proyectos.vue';
import skills from '@/components/Skills.vue';
import formacion from '@/components/Formacion.vue';
import Footer from '@/components/Footer.vue';
import WhastsApp from '@/components/WhastsApp.vue';
import ContactoRecaptcha from '@/components/ContactoRecaptcha.vue';
import language from '@/components/language.vue';
</script>

<style scoped>
</style>