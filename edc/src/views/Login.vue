<template>
  <section class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <!-- Título -->
      <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">
        Iniciar sesión en Atendi2
      </h2>

      <!-- Formulario -->
      <form @submit.prevent="submitForm" class="space-y-6">
        <!-- Campo de Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>
          <input type="email" id="email" v-model="usuario.email"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu correo" required />
        </div>

        <!-- Campo de Contraseña -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <input type="password" id="password" v-model="usuario.password"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu contraseña" required />
        </div>

        <!-- Campo Recuerdame-->
        <div class="flex justify-left items-center">
          <input type="checkbox" id="remember" v-model="usuario.remember" />
          <label for="remember" class="block text-sm font-medium text-gray-700 mb-1 ml-4">
            Recuerdame
          </label>

        </div>

        <!-- Botón de Registro -->
        <button type="submit"
          class="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Iniciar sesión
        </button>
      </form>

      <!-- Separador -->
      <div class="flex items-center my-6">
        <div class="flex-1 h-px bg-gray-300"></div>
        <p class="px-4 text-sm text-gray-500">o</p>
        <div class="flex-1 h-px bg-gray-300"></div>
      </div>

      <!-- Botón SSO Google -->
      <button @click=""
        class="flex items-center justify-center w-full bg-white border border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-100 transition duration-300">
        <img src="/google-icon.svg" alt="Google" class="w-5 h-5 mr-2" />
        Continuar con Google
      </button>
    </div>
  </section>
</template>


<script setup>
import { ref } from "vue";
import axios from "axios";

// Campos del formulario
const usuario = ref({
  password: "",
  email: "",
  remember: "",
});

const submitForm = async () => {
  axios.post("https://api.atendi2.es/api/login/", usuario.value, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then(response =>{

  })
};



</script>
