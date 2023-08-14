import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/heroes/list',
      name: 'heroesList',
      component: () => import('../components/HeroList.vue')
    },
    {
      path: '/heroes/detail',
      name: 'newHeroDetail',
      component: () => import('../components/HeroDetail.vue')
    },
    {
      path: '/heroes/detail/:id',
      name: 'heroDetail',
      component: () => import('../components/HeroDetail.vue')
    }
  ]
})

export default router
