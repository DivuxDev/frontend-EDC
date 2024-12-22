<!--
  NOTA: Falta crear paleta de colores en el css, establecer formato de letra, tamaño, etc..., clases especificas

  PD: Todo lo que veis es susceptible a cambios

  PD de la PD: Mirar la web de Rover https://www.rover.com/es/

  GORDOS HIJOS DE PUTA :)
  -->

<template>
  <div>

    <section class="bg-[url('/buscador.png')] bg-no-repeat bg-center bg-cover md:p-20">
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
    </section>

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

    <!-- Sección de pasos -->
    <section class="px-4 py-10 md:px-12 lg:px-20 bg-gray-50">
      <h2 class="text-center text-4xl font-bold text-gray-800 mb-10">
        Tres simples pasos para encontrar el cuidador ideal
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20">
        <!-- Paso 1 -->
        <div class="relative flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-xl">
          <div
            class="absolute -top-10 flex items-center justify-center bg-blue-500 text-white w-20 h-20 rounded-full shadow-lg">
            <i class="fas fa-search text-4xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mt-10 mb-2">1. Buscar</h3>
          <p class="text-gray-600 leading-relaxed">
            Explora perfiles y lee reseñas verificadas de cuidadores cerca de ti. Encuentra al profesional que mejor se
            adapte a tus necesidades y preferencias.
          </p>
        </div>

        <!-- Paso 2 -->
        <div class="relative flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-xl">
          <div
            class="absolute -top-10 flex items-center justify-center bg-blue-500 text-white w-20 h-20 rounded-full shadow-lg">
            <i class="fas fa-users text-4xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mt-10 mb-2">2. Contactar</h3>
          <p class="text-gray-600 leading-relaxed">
            Ponte en contacto directamente con los cuidadores para resolver tus dudas y coordinar los detalles. No
            necesitas
            pagar ni reservar a través de la plataforma.
          </p>
        </div>

        <!-- Paso 3 -->
        <div
          class="relative flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-xl md:col-span-2 md:col-start-1 lg:col-span-1 lg:col-start-auto">
          <div
            class="absolute -top-10 flex items-center justify-center bg-blue-500 text-white w-20 h-20 rounded-full shadow-lg">
            <i class="fas fa-smile-beam text-4xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mt-10 mb-2">3. Relájate</h3>
          <p class="text-gray-600 leading-relaxed">
            Permanece en contacto con fotos y mensajes.
            Confía en nuestro equipo de soporte para garantizar que todo salga bien. Estamos aquí para ayudarte en cada
            paso,
            asegurando una experiencia tranquila y segura.
          </p>
        </div>
      </div>
    </section>

    <section class="px-4 py-10 md:px-12 lg:px-20 bg-gray-50">
      <h2 class="text-center text-4xl font-bold text-gray-800 mb-8">
        Lo que dicen nuestros clientes
      </h2>

      <div class="relative max-w-4xl mx-auto">
        <!-- Contenedor de reseñas -->
        <div class="flex flex-col sm:flex-row items-center bg-white p-8 rounded-lg shadow-lg relative"
          :key="currentReview">
          <!-- Imagen / icono -->
          <div
            class="bg-gray-300 text-white w-20 h-20 sm:w-28 sm:h-28 rounded-full shadow-md flex items-center justify-center sm:mr-6">
            <i class="fas fa-user text-3xl sm:text-4xl"></i>
          </div>

          <!-- Contenido de la reseña -->
          <div class="flex flex-col items-center sm:items-start mt-12 sm:mt-0">
            <!-- Nombre del cliente -->
            <p class="text-gray-800 font-bold mb-2">{{ reviews[currentReview].name }}</p>

            <!-- Indicador de estrellas -->
            <div class="flex items-center mb-4 text-yellow-400">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>

            <!-- Texto -->
            <blockquote class="text-gray-600 italic leading-relaxed text-center sm:text-left">
              "{{ reviews[currentReview].quote }}"
            </blockquote>
          </div>
        </div>

        <!-- Indicadores -->
        <div class="flex justify-center mt-6 space-x-2">
          <span v-for="(review, index) in reviews" :key="index" class="w-3 h-3 rounded-full cursor-pointer" :class="{
            'bg-blue-500': index === currentReview,
            'bg-gray-300': index !== currentReview,
          }" @click="changeReview(index)"></span>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
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

const reviews = ref([
  {
    // image: "/a.jpg",
    quote:
      "El servicio fue increíble. Encontramos un cuidador que se convirtió en parte de nuestra familia.",
    name: "María L.",
  },
  {
    // image: "/a.jpg",
    quote:
      "Nunca había encontrado algo tan fácil. Atendi2 hizo todo el proceso tan cómodo y seguro.",
    name: "Carlos M.",
  },
  {
    // image: "/a.jpg",
    quote:
      "El soporte que recibimos fue excepcional. Sin duda, volveremos a usar el servicio.",
    name: "Luisa F.",
  },
]);

// Estado actual de la reseña
const currentReview = ref(0);

// Función para cambiar reseña
const changeReview = (index) => {
  currentReview.value = index;
};

// Ciclo automático
onMounted(() => {
  setInterval(() => {
    currentReview.value = (currentReview.value + 1) % reviews.value.length;
  }, 5000);
});
</script>
