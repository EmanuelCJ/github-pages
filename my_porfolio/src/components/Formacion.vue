<template>
    <section class="text-white mt-18 " id="educacion">
      <div class="container mx-auto px-4 py-16 sm:py-24">
        <div class="mx-auto">
          <div data-aos="zoom-in-up" class="space-y-12">
            <h2 class="text-4xl font-extrabold text-center mb-12 text-tertiary">Formación Educativa</h2>
            <div class="bg-primary rounded-2xl shadow-xl border border-[#1f1641] p-8">
              <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <li v-for="(formacion, index) in formacionAcademica" :key="index" class="flex flex-col items-center text-center">
                  <div class="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                    <component :is="formacion.icon" class="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-2">{{ formacion.titulo }}</h3>
                    <p class="text-gray-300">{{ formacion.descripcion }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { GraduationCap, Award, Lightbulb } from 'lucide-vue-next'
  
  const formacionAcademica = [
    {
      titulo: "Licenciatura en Turismo",
      descripcion: "Egresada de la Universidad Nacional del Comahue (UNCo), Argentina, con Especialización en Gestión de Calidad Turística.",
      icon: GraduationCap
    },
    {
      titulo: "Maestría en Marketing de Servicios",
      descripcion: "Obtenida en la Universidad Nacional del Comahue (UNCo).",
      icon: Award
    },
    {
      titulo: "Gestor Tecnológico en Eficiencia Energética",
      descripcion: "Título otorgado por el gobierno de la Provincia del Neuquén junto con el Consejo Federal de Inversiones (CFI), dictado por la Facultad de Ingeniería de la UNCO.",
      icon: Lightbulb
    }
  ];
  </script>