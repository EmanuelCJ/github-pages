<template>
  <div class="flex justify-center space-x-6 py-8">
    <a v-for="link in socialLinks" :key="link.name" :href="link.href" target="_blank" rel="noopener noreferrer"
       class="social-link relative inline-block">
      <button class="p-3 rounded-full bg-[#111a3e] hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">
        <component :is="link.icon" class="w-6 h-6 text-white transition-colors duration-300" />
        <span class="sr-only">{{ link.name }}</span>
      </button>
    </a>
  </div>
</template>

<script setup>
import { Instagram, Youtube, Facebook, Linkedin } from 'lucide-vue-next';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/cafe.turistico/',
    icon: Instagram
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@cafeturistico2020',
    icon: Youtube
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100063487239466',
    icon: Facebook
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/andrea-isabel-marin-3b3bba42/?original_referer=&originalSubdomain=ar',
    icon: Linkedin
  }
];
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.social-link:hover button {
  animation: pulse 0.5s ease-in-out;
}
</style>