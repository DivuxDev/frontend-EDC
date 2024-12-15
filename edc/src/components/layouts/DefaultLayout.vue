<template>
  <div class="default-layout">
    <Header />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/partials/Header.vue';
import Footer from '@/components/partials/Footer.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Header,
    Footer,
  },
});
</script>

<style scoped>

</style>
