<template>
  <section id="skills" class="py-16">
    <div class="container mx-auto px-4" data-AOS="fade-up">
      <h2 class=" text-center text-4xl font-extrabold text-tertiary mb-12">{{ $t("skills.titulo") }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="habilidad in habilidades" :key="habilidad.titulo" class="flip-card" >
          <div class="flip-card-inner">
            <div class="flip-card-front bg-primary rounded-lg shadow-md p-3 flex flex-col items-center justify-center">
              <div class="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <component :is="habilidad.icon" class="w-12 h-12 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-white text-center">{{ $t(habilidad.titulo) }}</h3>
            </div>
            <div
              class="flip-card-back bg-primary rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
              <p class="text-white text-center">{{ $t(habilidad.descripcion) }}</p>
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
    titulo: "skills.titulo1",
    descripcion: "skills.descripcion1",
    icon: Languages
  },
  {
    titulo: "skills.titulo2",
    descripcion: "skills.descripcion2",
    icon: Lightbulb
  },
  {
    titulo: "skills.titulo3",
    descripcion: "skills.descripcion3",
    icon: PersonStanding
  },
  {
    titulo: "skills.titulo4",
    descripcion: "skills.descripcion4",
    icon: ClipboardList
  },
  {
    titulo: "skills.titulo5",
    descripcion: "skills.descripcion5",
    icon: Globe
  },
  {
    titulo: "skills.titulo6",
    descripcion: "skills.descripcion6",
    icon: BookOpen
  },
  {
    titulo: "skills.titulo7",
    descripcion: "skills.descripcion7",
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