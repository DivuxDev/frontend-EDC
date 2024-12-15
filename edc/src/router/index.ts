import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import IndexView from '../views/Index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout, // Usa el layout
      children: [
        {
          path: '', // Ruta para la página de inicio
          name: 'home',
          component: IndexView,
        },
      ],
    },
  ],
})

export default router
