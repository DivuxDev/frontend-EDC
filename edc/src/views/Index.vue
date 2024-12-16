<template>
  <div>

    <div class="bg-[url('/buscador.png')] bg-no-repeat bg-center bg-cover md:p-20">

      <h1 class="text-center text-5xl text-white font-bold md:p-0 p-6">El cuidado que necesitas, más cerca de lo que imaginas</h1>
      <h2 class="text-center mt-3 text-4xl text-white">Encuentra al cuidador ideal</h2>

      <div class="bg-blue-100 p-8 md:rounded-lg shadow-lg max-w-5xl mx-auto mt-5">
        <!-- Título -->
        <p class="text-gray-800 text-xl font-bold mb-6 text-center">
          ¿Qué tipo de cuidado necesitas?
        </p>

        <!-- Servicios -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div v-for="(service, index) in services" :key="index"
            class="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white hover:bg-blue-300 cursor-pointer transition">
            <i :class="service.icon" class="text-4xl text-blue-500 mb-2"></i>
            <span class="text-center text-md font-medium">{{ service.name }}</span>
          </div>
        </div>

        <!-- Input y Botón -->
        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
          <!-- Input con icono -->
          <div class="relative w-full md:max-w-lg">
            <input type="text" placeholder="Ej. Ciudad, Código Postal..."
              class="w-full p-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <i
              class="fas fa-map-marker-alt absolute left-3 top-4 text-gray-400 hover:cursor-pointer hover:text-black"></i>
          </div>

          <!-- Botón de búsqueda -->
          <button
            class="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition">
            Buscar
          </button>
        </div>

      </div>
    </div>

    <div>

    </div>

  </div>
</template>

<script setup>

const services = [
  { name: "Asistencia de personas mayores", icon: "fas fa-person-cane" },
  { name: "Labores del hogar", icon: "fas fa-broom" },
  { name: "Asistencia de personas con discapacidad", icon: "fas fa-wheelchair" },
  { name: "Asistencia hospitalaria", icon: "fas fa-hospital" }
];

</script>
