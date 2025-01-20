<template>
    <section id="experiencia" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class=" text-center text-4xl font-extrabold text-tertiary mb-12">{{$t("Experiencia.titulo")}}</h2>
        <div class="grid md:grid-cols-2 gap-8 ">
          <div v-for="(experiencia, index) in experienciasVisibles" :key="index"
            class="bg-primary rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg border-l-4 border-purple-600"
            data-aos="fade-up">
            <div class="flex items-center mb-4 ">
              <component :is="experiencia.icon" class="w-6 h-6 text-white mr-3" />
              <h3 class="text-xl font-semibold text-white">{{ $t(experiencia.titulo) }}</h3>
            </div>
            <p class="text-white">{{ $t(experiencia.descripcion) }}</p>
          </div>
        </div>
        <div class="text-center mt-8">
          <button @click="toggleExperiencias" 
            class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            {{ mostrarTodas ? 'Ver menos' : 'Ver más' }}
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { Briefcase, ChartBar, ClipboardCheck, GraduationCap, Scale, Users, ClipboardList, CheckCircle, ScrollText, University, BookCopy, Tv, Globe, Building } from 'lucide-vue-next';
  
  const experiencias = [
    {
      titulo: "Experiencia.titulo1",
      descripcion: "Experiencia.descripcion1",
      icon: Briefcase
    },
    {
      titulo: "Experiencia.titulo2",
      descripcion: "Experiencia.descripcion2",
      icon: ChartBar
    },
    {
      titulo: "Experiencia.titulo3",
      descripcion: "Experiencia.descripcion3",
      icon: ClipboardCheck
    },
    {
      titulo: "Experiencia.titulo4",
      descripcion: "Experiencia.descripcion4",
      icon: GraduationCap
    },
    {
      titulo: "Experiencia.titulo5",
      descripcion: "Experiencia.descripcion5",
      icon: Scale
    },
    {
      titulo: "Experiencia.titulo6",
      descripcion: "Experiencia.descripcion6",
      icon: Users
    },
    {
      titulo: "Experiencia.titulo7",
      descripcion: "Experiencia.descripcion7",
      icon: ClipboardList
    },
    {
      titulo: "Experiencia.titulo8",
      descripcion: "Experiencia.descripcion8",
      icon: CheckCircle
    },
    {
      titulo: "Experiencia.titulo9",
      descripcion: "Experiencia.descripcion9",
      icon: GraduationCap
    },
    {
      titulo: "Experiencia.titulo10",
      descripcion: "Experiencia.descripcion10",
      icon: Users
    },
    {
      titulo: "Experiencia.titulo11",
      descripcion: "Experiencia.descripcion11",
      icon: ScrollText
    },
    {
      titulo: "Experiencia.titulo12",
      descripcion: "Experiencia.descripcion12",
      icon: University
    },
    {
      titulo: "Experiencia.titulo13",
      descripcion: "Experiencia.descripcion13",
      icon: BookCopy
    },
    {
      titulo: "Experiencia.titulo14",
      descripcion: "Experiencia.descripcion14",
      icon: Tv
    },
    {
      titulo: "Experiencia.titulo15",
      descripcion: "Experiencia.descripcion15",
      icon: Globe
    },
    {
      titulo: "Experiencia.titulo16",
      descripcion: "Experiencia.descripcion16",
      icon: Building
    }
  ];
  
  const mostrarTodas = ref(false);
  const experienciasVisibles = computed(() => 
    mostrarTodas.value ? experiencias : experiencias.slice(0, 4)
  );
  
  const toggleExperiencias = () => {
    mostrarTodas.value = !mostrarTodas.value;
  };
  </script>
  
  <style scoped>
  .bg-purple-900 {
    background-color: #4C1D95;
  }
  .text-purple-800 {
    color: #5B21B6;
  }
  .text-purple-700 {
    color: #6D28D9;
  }
  .text-purple-600 {
    color: #7C3AED;
  }
  .border-purple-600 {
    border-color: #7C3AED;
  }
  </style>