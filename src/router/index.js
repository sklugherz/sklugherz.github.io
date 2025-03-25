import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '@/pages/AboutMe.vue'

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
      component: () => import('../pages/Uses.vue'),
    },
    {
      path: '/now',
      name: 'now',
      component: () => import('../pages/Now.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../pages/projects.vue')
    }
  ],
})

export default router
