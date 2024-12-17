<!--
  NOTA: Falta crear paleta de colores en el css, establecer formato de letra, tamaño, etc..., clases especificas

  PD: Todo lo que veis es susceptible a cambios

  PD de la PD: Mirar la web de Rover https://www.rover.com/es/

  GORDOS HIJOS DE PUTA :)
  -->

<template>
  <div>
    <div class="bg-[url('/buscador.png')] bg-no-repeat bg-center bg-cover md:p-20">
      <main>
        <!-- Encabezados -->
        <h1 class="text-center text-5xl text-white font-bold md:p-0 p-6">
          El cuidado que necesitas, más cerca de lo que imaginas
        </h1>
        <h2 class="text-center mt-3 text-4xl text-white">Encuentra al cuidador ideal</h2>

        <!-- Contenedor de búsqueda -->
        <div class="bg-blue-100 p-8 md:rounded-lg shadow-lg max-w-5xl mx-auto mt-5">
          <p class="text-gray-800 text-xl font-bold mb-6 text-center">¿Qué tipo de cuidado necesitas?</p>

          <!-- Servicios -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div v-for="(service, index) in services" :key="index"
              class="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white hover:bg-blue-300 cursor-pointer transition">
              <i :class="service.icon" class="text-4xl text-blue-500 mb-2"></i>
              <span class="text-center text-md font-medium">{{ service.title }}</span>
            </div>
          </div>

          <!-- Input y Botón -->
          <div class="flex flex-col md:flex-row items-center justify-center gap-4">
            <div class="relative w-full md:max-w-lg">
              <input type="text" placeholder="Ej. Ciudad, Código Postal..."
                class="w-full p-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <i class="fas fa-map-marker-alt absolute left-3 top-4 text-gray-400"></i>
            </div>

            <button aria-label="Buscar cuidadores"
              class="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition">
              Buscar
            </button>
          </div>
        </div>
      </main>
    </div>

    <!-- Sección de Información -->
  <!-- NOTA: seguro que hacer card???, puede quedar repetitivo con los servicios de arriba -->
    <section class="px-4 py-10 md:px-12 lg:px-20 bg-gray-50">
      <h2 class="text-center text-4xl font-bold text-gray-800 mb-10">Servicios de cuidado adaptadas a ti</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Tarjeta de servicio -->
        <div v-for="(service, index) in services" :key="index"
          class="flex flex-col items-center text-center bg-white p-6 rounded-lg blue-shadow transition duration-300">
          <!-- Icono en círculo -->
          <div class="flex items-center justify-center bg-blue-100 text-blue-500 w-20 h-20 rounded-full mb-4">
            <i :class="service.icon" class="text-4xl"></i>
          </div>

          <!-- Título del servicio -->
          <h3 class="text-xl font-bold text-gray-800 mb-2">{{ service.title }}</h3>

          <!-- Descripción -->
          <p class="text-gray-600 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Ideas para meter aqui_
      Reseñas de personas
      Pequeñas cards con tips de seguridad u algo así
      Pequeñas cards con steps sobre como usar la app
     -->


  </div>
</template>

<script setup>
/*Arrays temporales, podemos crear una entidad (CONFIG_SERVICIOS) y guardar ahí los servicios, y al cargar la pagina por primera vez
guardarlos en la store o alguna movida así, aunque tambien lo podemos dejar hardcodeado como buenos gordos
*/

const services = [
  {
    title: "Asistencia de personas mayores a domicilio",
    description: "Este servicio ofrece cuidado y compañía profesional en el hogar para personas mayores...",
    icon: "fas fa-person-cane"
  },
  {
    title: "Labores del hogar",
    description: "Asistencia en las tareas domésticas cotidianas como limpieza general, lavado y planchado de ropa...",
    icon: "fas fa-broom"
  },
  {
    title: "Asistencia a personas con discapacidad / movilidad reducida",
    description: "Este servicio está diseñado para apoyar a personas con discapacidad o movilidad reducida...",
    icon: "fas fa-wheelchair"
  },
  {
    title: "Asistencia hospitalaria",
    description: "Este servicio ofrece apoyo especializado a pacientes hospitalizados...",
    icon: "fas fa-hospital"
  },
];
</script>
