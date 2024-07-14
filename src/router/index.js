import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/a1+',
      name: 'A1+',
      component: () => import('../views/A1+/Main.vue')
    },
    {
      path: '/a1+/starter_unit',
      name: 'A1+ Starter Unit',
      component: () => import('../views/A1+/StarterUnit/Main.vue')
    },
    {
      path: '/a1+/starter_unit/classroom',
      name: 'A1+ Starter Unit Classroom',
      component: () => import('../views/A1+/StarterUnit/Classroom/Main.vue')
    },
    {
      path: '/a1+/starter_unit/classroom/test',
      name: 'A1+ Starter Unit Classroom Test',
      component: () => import('../views/A1+/StarterUnit/Classroom/test.vue')
    },
  ]
})

export default router
