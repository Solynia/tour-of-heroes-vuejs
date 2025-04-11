import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/heroes/list'
    },
    {
      path: '/heroes',
      children: [
        {
          path: 'list',
          name: 'heroesList',
          component: () => import('../components/HeroList.vue')
        },
        {
          path: 'detail',
          name: 'newHeroDetail',
          component: () => import('../components/HeroDetail.vue')
        },
        {
          path: 'detail/:id',
          name: 'heroDetail',
          component: () => import('../components/HeroDetail.vue')
        }
      ]
    }
  ]
})

export default router
