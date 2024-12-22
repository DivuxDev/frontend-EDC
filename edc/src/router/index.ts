import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import Index from '../views/Index.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';


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
          component: Index,
        },
      ],
    },
    {
      path: '/login',
      component: DefaultLayout, // Usa el layout
      children: [
        {
          path: '', // Ruta para la página de inicio
          name: 'login',
          component: Login,
        },
      ],
    },
    {
      path: '/register',
      component: DefaultLayout, // Usa el layout
      children: [
        {
          path: '', // Ruta para la página de inicio
          name: 'register',
          component: Register,
        },
      ],
    },
  ],
})

export default router
