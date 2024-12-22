<template>
  <section class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <!-- Título -->
      <h2 class="text-2xl font-bold text-gray-800 text-center mb-6">
        Registro de Usuario
      </h2>

      <!-- Formulario -->
      <form @submit.prevent="submitForm" class="space-y-6">
        <!-- Nombre -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input type="text" id="name" v-model="usuario.name"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu nombre" required />
        </div>

        <!-- Apellidos -->
        <div>
          <label for="apellidos" class="block text-sm font-medium text-gray-700 mb-1">
            Apellidos
          </label>
          <input type="text" id="apellidos" v-model="usuario.apellidos"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tus apellidos" required />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Correo Electrónico
          </label>
          <input type="email" id="email" v-model="usuario.email"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu correo" required />
        </div>

        <!-- Ciudad -->
        <div>
          <label for="city" class="block text-sm font-medium text-gray-700 mb-1">
            Ciudad
          </label>
          <input type="text" id="city" v-model="usuario.city"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu ciudad" required />
        </div>

        <!-- Contraseña -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <input type="password" id="password" v-model="usuario.password"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu contraseña" required />
        </div>

        <!-- Confirmar Contraseña -->
        <div>
          <label for="password_confirmation" class="block text-sm font-medium text-gray-700 mb-1">
            Repite tu Contraseña
          </label>
          <input type="password" id="password_confirmation" v-model="usuario.password_confirmation"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Repite tu contraseña" required />
        </div>

        <!-- Cómo nos conoció -->
        <div>
          <label for="como_nos_conoce" class="block text-sm font-medium text-gray-700 mb-1">
            ¿Cómo nos conociste?
          </label>
          <input type="text" id="como_nos_conoce" v-model="usuario.como_nos_conoce"
            class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ejemplo: Internet, Recomendación" required />
        </div>

        <!-- Botón de Registro -->
        <button type="submit"
          class="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300">
          Registrarse
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

// Campos del formulario
const usuario = ref({
  name: "",
  apellidos: "",
  password: "",
  password_confirmation: "",
  city: "",
  email: "",
  como_nos_conoce: "",
});

const submitForm = async () => {
  try {
    const response = await axios.post("https://api.atendi2.es/api/registro/", usuario.value, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("Registro exitoso: " + JSON.stringify(response.data));
  } catch (error) {
    console.error("Error al registrar usuario:", error.response?.data || error.message);
    alert("Error al registrar usuario: " + error.response?.data?.message || "Error desconocido.");
  }
};

//Endpoint funciona, falta redirirección y mandangas

</script>
