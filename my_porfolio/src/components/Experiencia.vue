<template>
    <section id="experiencia" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class=" text-center text-4xl font-extrabold text-tertiary mb-12">Experiencia Laboral</h2>
        <div class="grid md:grid-cols-2 gap-8 ">
          <div v-for="(experiencia, index) in experienciasVisibles" :key="index"
            class="bg-primary rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-lg border-l-4 border-purple-600"
            data-aos="fade-up">
            <div class="flex items-center mb-4 ">
              <component :is="experiencia.icon" class="w-6 h-6 text-white mr-3" />
              <h3 class="text-xl font-semibold text-white">{{ experiencia.titulo }}</h3>
            </div>
            <p class="text-white">{{ experiencia.descripcion }}</p>
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
      titulo: "Asesora y evaluadora de Proyectos Turísticos",
      descripcion: "Trabajo en organismos públicos y privados evaluando y asesorando proyectos turísticos.",
      icon: Briefcase
    },
    {
      titulo: "Desarrollo de indicadores económicos",
      descripcion: "Creación de indicadores económicos para la inversión turística.",
      icon: ChartBar
    },
    {
      titulo: "Implementadora y auditora de calidad",
      descripcion: "Especializada en Normas Sectoriales de Turismo e ISO 9001.",
      icon: ClipboardCheck
    },
    {
      titulo: "Capacitadora y auditora en hostelería",
      descripcion: "Experiencia en hoteles y restaurantes en Centroamérica y España.",
      icon: GraduationCap
    },
    {
      titulo: "Asesora técnica en proyectos de ley",
      descripcion: "Asesoramiento técnico en la elaboración y formulación de proyectos de ley para organismos descentralizados y legislativos.",
      icon: Scale
    },
    {
      titulo: "Socia fundadora del Colegio de Profesionales del Turismo de Neuquén",
      descripcion: "Vicepresidenta en la primera gestión y miembro del tribunal de ética desde 2012.",
      icon: Users
    },
    {
      titulo: "Desarrollo de normas IRAM",
      descripcion: "Investigación, elaboración y desarrollo de normas IRAM para la gestión de calidad, seguridad y ambiental en playas, balnearios y establecimientos termales.",
      icon: ClipboardList
    },
    {
      titulo: "Auditora de Sistemas de Calidad",
      descripcion: "Certificada por IRAM como auditora de sistemas de calidad según la Norma Internacional ISO 9001.",
      icon: CheckCircle
    },
    {
      titulo: "Capacitadora en Normas Sectoriales de Turismo",
      descripcion: "Capacitadora, implementadora y auditora de calidad en Normas Sectoriales de Turismo e ISO 9001.",
      icon: GraduationCap
    },
    {
      titulo: "Miembro del Sub-Comité de Turismo del IRAM",
      descripcion: "Participación como miembro del Sub-Comité de Turismo del Instituto Argentino de Normalización y Certificación (IRAM).",
      icon: Users
    },
    {
      titulo: "Coordinadora del Proyecto ATHEL RUCA",
      descripcion: "Coordinación del Proyecto ATHEL RUCA para la certificación en competencias laborales en el sector gastronómico, hotelero y turístico.",
      icon: ScrollText
    },
    {
      titulo: "Docente en la Universidad de San Gregorio de Portoviejo",
      descripcion: "Desarrollo de tareas docentes en el Módulo Desarrollo Turístico Sostenible Municipal en la Maestría en Turismo.",
      icon: University
    },
    {
      titulo: "Periodista y Escritora de Turismo",
      descripcion: "Colaboración en la elaboración de libros y redacción de artículos en revistas especializadas, así como columnista en medios masivos de comunicación.",
      icon: BookCopy
    },
    {
      titulo: "Conductora y Productora de Programa de TV",
      descripcion: "Conductora y productora del programa Café Turístico, emitido en televisión y redes sociales.",
      icon: Tv
    },
    {
      titulo: "Liderazgo en SKAL Internacional",
      descripcion: "Participación en la creación de la mesa local para la Promoción de los Principios del Pacto Global de Naciones Unidas en la Patagonia y en congresos de SKAL.",
      icon: Globe
    },
    {
      titulo: "Fundadora de Asís Patagonia y Fund Asis",
      descripcion: "Creación y dirección de la consultora Asís Patagonia y la Fundación Fund Asis.",
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