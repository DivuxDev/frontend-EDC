<!--
  NOTA: Falta hacer un poco mejor media queries, y hacer que al tener sesión iniciada, salga imagen de pérfil
        Poner un poco más chulo el menu desplegable para pantallas pequeñas
  GUELEBIXO :<
-->

<template>
  <header class="bg-blue-50 py-3 px-6 shadow-md">
    <div class="mx-5 flex justify-between items-center">
      <!-- Izquierda: Logo + Opciones principales (en tamaños grandes y medianos) -->
      <div class="flex items-center space-x-6">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <a href="/">
            <img src="/logo.png" alt="Logo" class="h-16 w-16 cursor-pointer" />
          </a>
        </div>
        <!-- Opciones principales (Solo visible en tamaños medianos y grandes) -->
        <nav class="hidden md:flex items-center space-x-6 text-gray-700">
          <div class="flex items-center space-x-1 cursor-pointer">
            <i class="fas fa-search"></i>
            <span>Buscar cuidadores</span>
          </div>
          <div class="flex items-center space-x-1 cursor-pointer">
            <i class="fas fa-briefcase"></i>
            <span>Hazte cuidador</span>
          </div>
        </nav>
      </div>

      <!-- Derecha: Opciones secundarias o botón hamburguesa -->
      <div class="flex items-center space-x-4">
        <!-- Botón hamburguesa para tamaños pequeños -->
        <button @click="toggleMenu" class="md:hidden text-gray-700">
          <i class="fas fa-bars text-2xl"></i>
        </button>
        <!-- Opciones secundarias (Solo visible en tamaños medianos y grandes) -->
        <div class="hidden md:flex items-center space-x-4 text-gray-700">
          <a href="/login">Inicio Sesión</a>
          <a href="/register">Registrarse</a>
        </div>
      </div>
    </div>

    <!-- Menú desplegable para tamaños pequeños -->
    <div v-if="isMenuOpen" class="md:hidden mt-3 bg-white shadow-md rounded-lg">
      <nav class="flex flex-col items-start space-y-3 p-4 text-gray-700">
        <div class="flex items-center space-x-1 cursor-pointer">
          <i class="fas fa-search"></i>
          <span>Buscar cuidadores</span>
        </div>
        <div class="flex items-center space-x-1 cursor-pointer">
          <i class="fas fa-briefcase"></i>
          <span>Hazte cuidador</span>
        </div>
        <a href="#">Inicio Sesión</a>
        <a href="#">Registrarse</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

// Estado para controlar la visibilidad del menú desplegable
const isMenuOpen = ref(false);

// Función para alternar el menú
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped></style>
