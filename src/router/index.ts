import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/heroes/list',
      name: 'heroesList',
      component: () => import('../components/HeroList.vue')
    }
  ]
})

export default router
