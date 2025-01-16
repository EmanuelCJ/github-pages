<template>
  <div>
    <h1>Formulario protegido con reCAPTCHA</h1>
    <VueReCaptcha
      @verify="onVerify"
      @expired="onExpired"
    />
    <button @click="executeCaptcha">Enviar</button>
  </div>
</template>

<script setup>
import { useReCaptcha } from 'vue-recaptcha';

const { executeRecaptcha } = useReCaptcha();

function onVerify(response) {
  console.log('ReCAPTCHA Verificado:', response);
}

function onExpired() {
  console.log('ReCAPTCHA Expirado');
}

async function executeCaptcha() {
  try {
    const token = await executeRecaptcha();
    console.log('Token generado:', token);
    // Aquí puedes enviar el token a tu backend para validación
  } catch (error) {
    console.error('Error al ejecutar reCAPTCHA:', error);
  }
}
</script>
