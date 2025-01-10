<template>
  <div class="bg-gradient-to-br from-arena to-gray-800 min-h-screen">
    <NavBar></NavBar>
    <div>
      <presentacion></presentacion>
      <esperiencia></esperiencia>
      <proyectos></proyectos>
      <skills></skills>
      <formacion></formacion>
      <Contacto></Contacto>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import presentacion from '@/components/Presentacion.vue';
import esperiencia from '@/components/Experiencia.vue';
import skills from '@/components/Skills.vue';
import formacion from '@/components/Formacion.vue';
import proyectos from '@/components/proyectos.vue';
import Contacto from '@/components/Contacto.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped></style>
