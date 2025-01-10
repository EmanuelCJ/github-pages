<template>
    <section class="py-16 px-4 sm:px-6 lg:px-8" id="proyectos">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-extrabold text-tertiary text-center mb-12">
                Proyectos Personales
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="(proyecto, index) in proyectosPersonales" :key="index"
                    class="bg-primary  rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105" data-AOS="fade-up">
                    <div class="relative h-64">
                        <img :src="proyecto.src" :alt="proyecto.titulo" class="w-full h-full object-cover rounded-lg" />
                        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

                        <div
                            class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                            <h3 class="text-4xl font-bold text-arena text-center px-4 sm:w-">{{ proyecto.titulo }}</h3>
                        </div>
                    </div>
                    <div class="p-6">
                        <p class="text-white font-medium">{{ proyecto.descripcion }}</p>
                        <a :href="proyecto.href" class="text-arena font-bold ">Más info aqui</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import exterior from '../assets/exterior.png';
import cafeTuristico from '../assets/CAFE-TURISTICO.png';
import social from '../assets/social.png';

const proyectosPersonales = [
    {
        titulo: "Consultora Asís Patagonia",
        descripcion: "Fundada en 2001, se dedica a la consultoría en turismo, calidad y sostenibilidad.",
        src: exterior,
        href: 'http://fundasis.org.ar'
    },
    {
        titulo: "Fundación Fund Asis",
        descripcion: "Creada en 2014, preside la fundación que trabaja en proyectos de desarrollo turístico y social.",
        src: exterior,
        href: 'http://fundasis.org.ar'
    },
    {
        titulo: "Programa Café Turístico",
        descripcion: "Iniciado en 2017, es un programa de radio, televisión y redes sociales que promueve el turismo.",
        src: cafeTuristico,
        href: 'https://www.instagram.com/cafe.turistico/'
    },
    {
        titulo: "Proyecto ATHEL RUCA",
        descripcion: "Coordina este programa de certificación en competencias laborales para el sector gastronómico, hotelero y turístico.",
        src: social,
        href: 'https://prezi.com/p/4d2wuxa7zqha/proyecto-capacitacion-athel-ruca/'
    }
];
</script>