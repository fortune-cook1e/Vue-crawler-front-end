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
  },
  {
    path: '/csv',
    name: 'csv',
    component: () => import('@/views/Csv.vue')
  },
  {
    path: '/related',
    name: 'related',
    component: () => import('@/views/Related.vue')
  },
  {
    path: '/combine',
    name: 'combine',
    component: () => import('@/views/Combine.vue')
  },
  {
    path: '/translate',
    name: 'translate',
    component: () => import('@/views/Translate.vue')
  }
]

const router = new Router({
  routes
})

export default router
