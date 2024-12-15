<template>
  <header class="app-header">
    <nav>
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/about">Acerca de</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style scoped>
.app-header {
  background-color: #333;
  color: white;
  padding: 1rem;
}
nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}
</style>
