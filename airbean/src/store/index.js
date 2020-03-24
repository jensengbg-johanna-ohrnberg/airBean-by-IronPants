import Vue from 'vue'
import Vuex from 'vuex'
import menuItems from './modules/menuItems.js'
import cart from './modules/cart.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    menuItems: menuItems,
    cart: cart
  }
})
