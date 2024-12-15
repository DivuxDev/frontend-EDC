<template>
  <footer class="app-footer">
    <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style scoped>
.app-footer {
  background-color: #222;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
