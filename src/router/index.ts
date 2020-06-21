import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Door from '../views/door/door.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Door',
    component: Door
  },
  {
    path: '/paishe',
    name: 'paishe',
    component: () => import('../views/paishe/paishe.vue')
  },
  {
    path: '/changjing',
    name: 'changjing',
    component: () => import('../views/changjing/changjing.vue')
  },
  {
    path: '/houqi',
    name: 'houqi',
    component: () => import('../views/houqi/houqi.vue')
  },
  {
    path: '/shebei',
    name: 'shebei',
    component: () => import('../views/shebei/shebei.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail/detail.vue')
  },
  {
    path: '/publish',
    name: 'publish',
    meta: {
      needLogin: true
    },
    component: () => import('../views/publish/publish.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
