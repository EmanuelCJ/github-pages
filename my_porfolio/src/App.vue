<template>
  <div class="bg-gradient-to-br from-arena to-gray-800 min-h-screen">
    <NavBar></NavBar>
    <div>
      <presentacion></presentacion>
      <experiencia></experiencia>
      <proyectos></proyectos>
      <skills></skills>
      <formacion></formacion>
      <Contacto></Contacto>
      <WhastsApp />
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import presentacion from '@/components/Presentacion.vue';
import experiencia from '@/components/Experiencia.vue';
import proyectos from '@/components/proyectos.vue';
import skills from '@/components/Skills.vue';
import formacion from '@/components/Formacion.vue';
import Contacto from '@/components/Contacto.vue';
import Footer from '@/components/Footer.vue';
import WhastsApp from '@/components/WhastsApp.vue';
</script>

<style scoped>
</style>