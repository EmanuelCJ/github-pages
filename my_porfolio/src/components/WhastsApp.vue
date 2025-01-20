<template>
  <a 
    :href="whatsappLink" 
    target="_blank"
    rel="noopener noreferrer"
    class="fixed z-50 flex items-center justify-center transition-all duration-300 whatsapp-float"
    aria-label="Contact us on WhatsApp"
  >
    <div class="flex items-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 group">
      <!-- Icono y texto -->
      <div class="flex items-center p-3 sm:p-4">
        <MessageCircle class="w-5 h-5 sm:w-6 sm:h-6" />
        <span class="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap text-sm sm:text-base">
         WhatsApp
        </span>
      </div>
    </div>
  </a>
</template>

<script setup>
import { MessageCircle } from 'lucide-vue-next'
import { computed } from 'vue'

const phoneNumber = '5492995792597' //  número de WhatsApp
const message = 'Hola! Me gustaría saber más sobre sus servicios.' // Mensaje predeterminado

const whatsappLink = computed(() => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
})
</script>

<style scoped>
/* Posicionamiento responsivo */
.whatsapp-float {
  /* Móvil (pantallas pequeñas) */
  bottom: 1rem;
  right: 1rem;
}

/* Tablet */
@media (min-width: 640px) {
  .whatsapp-float {
    bottom: 1.5rem;
    right: 1.5rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .whatsapp-float {
    bottom: 2rem;
    right: 2rem;
  }
}

/* Pantallas grandes */
@media (min-width: 1536px) {
  .whatsapp-float {
    bottom: 2.5rem;
    right: 2.5rem;
  }
}

/* Ajuste para pantallas muy pequeñas */
@media (max-width: 360px) {
  .whatsapp-float {
    bottom: 0.75rem;
    right: 0.75rem;
  }
}

/* Ajuste para cuando el dispositivo está en modo horizontal */
@media (max-height: 450px) {
  .whatsapp-float {
    bottom: 0.75rem;
    right: 0.75rem;
  }
}
</style>