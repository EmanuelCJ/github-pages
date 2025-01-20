<template>
    <section class="py-16 px-4 sm:px-6 lg:px-8" id="proyectos">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-extrabold text-tertiary text-center mb-12">
               {{ $t("proyectos.titulo") }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="(proyecto, index) in proyectosPersonales" :key="index"
                    class="bg-primary  rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105" data-AOS="fade-up">
                    <div class="relative h-64">
                        <img :src="proyecto.src" :alt="$t(proyecto.titulo)" class="w-full h-full object-cover rounded-lg" />
                        <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

                        <div
                            class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                            <h3 class="text-4xl font-bold text-arena text-center px-4 sm:w-"><a :href="proyecto.href">{{ $t(proyecto.titulo) }}</a></h3>
                        </div>
                    </div>
                    <div class="p-6 pt-2">
                        <p class="text-white font-medium">{{ $t(proyecto.descripcion) }}</p>
                        <a :href="proyecto.href" class="text-arena font-bold ">{{ $t("proyectos.link") }}</a>
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
        titulo: "proyectos.titulo1",
        descripcion: "proyectos.descripcion1",
        src: exterior,
        href: 'http://fundasis.org.ar'
    },
    {
        titulo: "proyectos.titulo2",
        descripcion: "proyectos.descripcion2",
        src: FundAsis,
        href: 'http://fundasis.org.ar'
    },
    {
        titulo: "proyectos.titulo3",
        descripcion: "proyectos.descripcion3",
        src: cafeTuristico,
        href: 'https://www.instagram.com/cafe.turistico/'
    },
    {
        titulo: "proyectos.titulo4",
        descripcion: "proyectos.descripcion4",
        src: social,
        href: 'https://prezi.com/p/4d2wuxa7zqha/proyecto-capacitacion-athel-ruca/'
    }
];

</script>