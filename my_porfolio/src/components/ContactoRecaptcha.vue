<template>
  <section id="educacion" class="text-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto max-w-4xl">
      <h2
        class="text-center text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        {{ $t("contacto.texto1") }}
      </h2>
      <div id="contacto"
        class="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl">
        <div class="p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-center"> {{ $t("contacto.texto2") }}</h2>
          <form @submit.prevent="handleSubmit" :action="formspreeEndpoint" method="POST" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-2"> {{ $t("contacto.name") }}</label>
              <input type="text" id="name" name="name" v-model="form.name" @input="validateField('name')"
                @blur="validateField('name')" :class="getInputClass('name')"
                class="w-full px-4 py-2 bg-gray-800 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required>
              <p v-if="!fieldStates.name.valid && fieldStates.name.touched" class="text-red-400 text-xs mt-1">
                {{ $t("contacto.AlertaName") }}
              </p>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-2"> {{ $t("contacto.email") }}</label>
              <input type="email" id="email" name="email" v-model="form.email" @input="validateField('email')"
                @blur="validateField('email')" :class="getInputClass('email')"
                class="w-full px-4 py-2 bg-gray-800 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required>
              <p v-if="!fieldStates.email.valid && fieldStates.email.touched" class="text-red-400 text-xs mt-1">
                {{ $t("contacto.AlertaEmail") }}
              </p>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium mb-2"> {{ $t("contacto.msj") }}</label>
              <textarea id="message" name="message" v-model="form.message" @input="validateField('message')"
                @blur="validateField('message')" :class="getInputClass('message')" rows="4"
                class="w-full px-4 py-2 bg-gray-800 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 resize-none"
                required></textarea>
              <p v-if="!fieldStates.message.valid && fieldStates.message.touched" class="text-red-400 text-xs mt-1">
                {{ $t("contacto.AlertaMsj") }}
              </p>
            </div>

            <!-- CAPTCHA -->
            <div class="captcha-container bg-gray-800 bg-opacity-50 p-4 rounded-lg">
              <div class="captcha-code text-2xl font-bold text-center mb-2" :style="captchaStyle">
                {{ captchaCode }}
              </div>
              <button @click.prevent="regenerateCaptcha"
                class="w-full mb-2 py-1 px-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
                {{ $t("contacto.captcha") }}
              </button>
              <input v-model="userCaptchaInput" type="text" :placeholder="$t('contacto.ayuda')"
                class="w-full px-4 py-2 bg-gray-800 bg-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" />
              <p v-if="!isCaptchaValid && captchaTouched" class="text-red-400 text-xs mt-1">
                {{ $t("contacto.AlertaCaptcha") }}
              </p>
            </div>

            <div class="text-right">
              <button type="submit"
                class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 transform hover:scale-105"
                :disabled="isSubmitting || !isFormValid || !isCaptchaValid">
                <span v-if="isSubmitting" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                  </svg>
                  {{ $t("contacto.enviando") }}
                </span>
                <span v-else> {{ $t("contacto.Enviar") }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import Swal from 'sweetalert2'

const formspreeEndpoint = 'https://formspree.io/f/xwpkbvnp'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const fieldStates = reactive({
  name: { valid: false, touched: false },
  email: { valid: false, touched: false },
  message: { valid: false, touched: false }
})

const isSubmitting = ref(false)
const captchaCode = ref('')
const userCaptchaInput = ref('')
const captchaTouched = ref(false)

const validateField = (fieldName) => {
  const field = document.getElementById(fieldName)
  fieldStates[fieldName].touched = true

  if (fieldName === 'name') {
    fieldStates.name.valid = field.value.trim().length > 0 && !/\d/.test(field.value)
  } else if (fieldName === 'email') {
    fieldStates.email.valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)
  } else if (fieldName === 'message') {
    fieldStates.message.valid = field.value.trim().length > 0 && !containsCode(field.value)
  }
}

const containsCode = (text) => {
  const codePatterns = [
    /\b(function|var|let|const|if|else|for|while|do|switch|case|break|return|class|import|export)\b/,
    /<\/?[a-z][\s\S]*>/i,
    /\b(SELECT|INSERT|UPDATE|DELETE|FROM|WHERE)\b/i,
    /\b(print|def|class|import|from|if|elif|else|for|while|try|except|raise)\b/
  ]
  return codePatterns.some(pattern => pattern.test(text))
}

const getInputClass = (fieldName) => {
  if (!fieldStates[fieldName].touched) return 'border-gray-700'
  return fieldStates[fieldName].valid
    ? 'border-green-500 focus:border-green-500'
    : 'border-red-500 focus:border-red-500'
}

const isFormValid = computed(() => {
  return Object.values(fieldStates).every(field => field.valid)
})

const isCaptchaValid = computed(() => userCaptchaInput.value === captchaCode.value)

const captchaStyle = computed(() => ({
  color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
  transform: `rotate(${Math.floor(Math.random() * 10 - 5)}deg)`,
  letterSpacing: `${Math.floor(Math.random() * 5 + 1)}px`
}))

const generateCaptcha = () => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

const regenerateCaptcha = () => {
  captchaCode.value = generateCaptcha()
  userCaptchaInput.value = ''
  captchaTouched.value = false
}

const handleSubmit = async (event) => {
  captchaTouched.value = true

  if (!isFormValid.value || !isCaptchaValid.value) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Por favor, corrija los errores en el formulario y complete el CAPTCHA antes de enviar.",
    })
    return
  }

  isSubmitting.value = true

  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      body: new FormData(event.target),
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: "¡Mensaje enviado correctamente!",
        text: "¡Gracias!",
      })
      form.name = ''
      form.email = ''
      form.message = ''
      Object.values(fieldStates).forEach(state => {
        state.valid = false
        state.touched = false
      })
      regenerateCaptcha()
    } else {
      throw new Error("Error al enviar el formulario")
    }
  } catch (error) {
    console.error('Error:', error)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Lo siento, hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
    })
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  regenerateCaptcha()
})
</script>