import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '@/components/AboutMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutMe,
    },
    {
      path: '/uses',
      name: 'uses',
      component: () => import('../components/Uses.vue'),
    },
    {
      path: '/now',
      name: 'now',
      component: () => import('../components/Now.vue'),
    },
  ],
})

export default router
