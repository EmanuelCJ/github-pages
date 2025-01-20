<template>
    <section class="text-white mt-18 " id="educacion">
      <div class="container mx-auto px-4 py-16 sm:py-24">
        <div class="mx-auto">
          <div data-aos="zoom-in-up" class="space-y-12">
            <h2 class="text-4xl font-extrabold text-center mb-12 text-tertiary">{{ $t("educacion.titulo") }}</h2>
            <div class="bg-primary rounded-2xl shadow-xl border border-[#1f1641] p-8">
              <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <li v-for="(formacion, index) in formacionAcademica" :key="index" class="flex flex-col items-center text-center">
                  <div class="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                    <component :is="formacion.icon" class="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-white mb-2">{{ $t(formacion.titulo) }}</h3>
                    <p class="text-gray-300">{{ $t(formacion.descripcion) }}</p>
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
      titulo: "educacion.titulo1",
      descripcion: "educacion.descripcion1",
      icon: GraduationCap
    },
    {
      titulo: "educacion.titulo2",
      descripcion: "educacion.descripcion2",
      icon: Award
    },
    {
      titulo: "educacion.titulo3",
      descripcion: "educacion.descripcion3",
      icon: Lightbulb
    }
  ];
  </script>