import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Menu from '../views/OrderMenu.vue'
import OrderStatus from '../views/Status.vue'
import Profile from '../views/Profile.vue'
import OrderHistory from '../views/OrderHistory.vue'
import LoadingPage from '../views/loader.vue'

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
    path: '/loader',
    name: 'LoadingPage',
    component: LoadingPage
  },
  {
    path: '/status',
    name: 'Order status',
    component: OrderStatus
  },
  {
    path: '/profile',
    name: 'Create profile',
    component: Profile
  },
  {
    path: '/orderstatus',
    name: 'Order history',
    component: OrderHistory
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
