<template>
  <header class="bg-blue-50 py-3 px-6 shadow-md">
    <div class="mx-5 flex justify-between items-center">

      <!-- Izquierda: Logo + Opciones principales -->
      <div class="flex items-center space-x-6">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" class="h-16 w-16" />
        </div>
        <!-- Opciones principales -->
        <nav class="flex items-center space-x-6 text-gray-700">
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

      <!-- Derecha: Opciones secundarias -->
      <div class="flex items-center space-x-4 text-gray-700">
        <a href="#">Inicio Sesión</a>
        <a href="#">Registrarse</a>
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>

</style>
