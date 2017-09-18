import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Home')
    },
    {
      path: '/unicorn',
      name: 'Unicorn',
      component: () => import('@/pages/Unicorn'),
      meta: {
        layout: 'layoutColors'
      }
    },
    {
      path: '*',
      name: 'Error',
      meta: {
        layout: 'error'
      }
    }
  ]
})
