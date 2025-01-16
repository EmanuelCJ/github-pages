<template>
    <section class="py-16 px-4 sm:px-6 lg:px-8" id="proyectos">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-extrabold text-tertiary text-center mb-12">
                Proyectos Realizados
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="(proyecto, index) in proyectosPersonales" :key="index"
                    class="bg-primary  rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105" data-AOS="fade-up">
                    <div class="relative h-64">
                        <img :src="proyecto.src" :alt="proyecto.titulo" class="w-full h-full object-cover rounded-lg" />
                        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

                        <div
                            class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                            <h3 class="text-4xl font-bold text-arena text-center px-4 sm:w-"><a :href="proyecto.href">{{ proyecto.titulo }}</a></h3>
                        </div>
                    </div>
                    <div class="p-6 pt-2">
                        <p class="text-white font-medium">{{ proyecto.descripcion }}</p>
                        <a :href="proyecto.href" class="text-arena font-bold ">Más info Presione Aqui</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import exterior from '../assets/exterior.webp';
import cafeTuristico from '../assets/CAFE-TURISTICO.webp';
import social from '../assets/social.webp';
import FundAsis from '../assets/FundAsis.webp';

const proyectosPersonales = [
    {
        titulo: "Consultora Asís Patagonia",
        descripcion: "Consultora especializada en turismo, calidad, comunicación y sostenibilidad, fundada en 2001.",
        src: exterior,
        href: 'http://fundasis.org.ar'
    },
    {
        titulo: "Fundación Fund Asis",
        descripcion: "Entidad creada en 2014, dedicada a impulsar proyectos de desarrollo en turismo, educación, medio ambiente y acción social.",
        src: FundAsis,
        href: 'http://fundasis.org.ar'
    },
    {
        titulo: "Programa Café Turístico",
        descripcion: "Iniciativa lanzada en 2016, que incluye un programa de entrevistas radiales, televisivas y en redes sociales, diseñado para promover el turismo en sus múltiples dimensiones.",
        src: cafeTuristico,
        href: 'https://www.instagram.com/cafe.turistico/'
    },
    {
        titulo: "Proyecto ATHEL RUCA",
        descripcion: "Programa de capacitación creado para certificar competencias laborales en los sectores gastronómico, hotelero y turístico.",
        src: social,
        href: 'https://prezi.com/p/4d2wuxa7zqha/proyecto-capacitacion-athel-ruca/'
    }
];

</script>