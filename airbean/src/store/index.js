import Vue from 'vue'
import Vuex from 'vuex'
import menuItems from './modules/menuItems.js'
import cart from './modules/cart.js'
import order from './modules/order.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menuItems: menuItems,
    cart: cart,
    order: order
  }
})
