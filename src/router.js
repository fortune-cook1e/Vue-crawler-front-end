import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/daily'
  },
  {
    path: '/daily',
    name: 'daily',
    component: () => import('./views/Daily.vue')
  },
  {
    path: '/convert',
    name: 'convert',
    component: () => import('@/views/Convert.vue')
  }
]

const router = new Router({
  routes
})

export default router
