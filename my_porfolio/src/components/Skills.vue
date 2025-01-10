<template>
  <section id="skills" class="py-16">
    <div class="container mx-auto px-4" data-AOS="fade-up">
      <h2 class=" text-center text-4xl font-extrabold text-tertiary mb-12">Mis Habilidades</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="habilidad in habilidades" :key="habilidad.titulo" class="flip-card" >
          <div class="flip-card-inner">
            <div class="flip-card-front bg-primary rounded-lg shadow-md p-3 flex flex-col items-center justify-center">
              <div class="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <component :is="habilidad.icon" class="w-12 h-12 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-white text-center">{{ habilidad.titulo }}</h3>
            </div>
            <div
              class="flip-card-back bg-primary rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <p class="text-white text-center">{{ habilidad.descripcion }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Languages, Lightbulb, PersonStanding, ClipboardList, Globe, BookOpen, Star } from 'lucide-vue-next';

const habilidades = [
  {
    titulo: "Idiomas",
    descripcion: "Fluidez en español, italiano, portugués, alemán e inglés.",
    icon: Languages
  },
  {
    titulo: "Innovación y Creatividad",
    descripcion: "Capacidad para desarrollar soluciones innovadoras y creativas en proyectos turísticos.",
    icon: Lightbulb
  },
  {
    titulo: "Trabajo en Equipo",
    descripcion: "Habilidad para colaborar eficazmente con equipos multidisciplinarios.",
    icon: PersonStanding
  },
  {
    titulo: "Gestión de Proyectos",
    descripcion: "Experiencia en la planificación, ejecución y supervisión de proyectos turísticos.",
    icon: ClipboardList
  },
  {
    titulo: "Conocimiento del Sector Turístico",
    descripcion: "Amplio conocimiento del sector turístico y sus normativas.",
    icon: Globe
  },
  {
    titulo: "Comunicación",
    descripcion: "Habilidad para comunicar ideas de manera clara y efectiva, tanto de forma escrita como oral.",
    icon: BookOpen
  },
  {
    titulo: "Liderazgo",
    descripcion: "Capacidad para liderar equipos y proyectos, motivando a los miembros del equipo para alcanzar objetivos comunes.",
    icon: Star
  }
];
</script>

<style scoped>
.flip-card {
  perspective: 1000px;
  height: 200px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>