import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/OrderMenu.vue'
import orderStatus from '../views/Status.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/status',
    name: 'Order status',
    component: orderStatus
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
