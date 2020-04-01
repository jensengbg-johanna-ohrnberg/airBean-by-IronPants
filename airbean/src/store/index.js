import Vue from 'vue'
import Vuex from 'vuex'
import menuItems from './modules/menuItems.js'
import cart from './modules/cart.js'
import order from './modules/order.js'
import user from './modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavOpen: false
  },
  mutations: {
    toggleNav (state, toggle) {
      state.isNavOpen = toggle
    }
  },
  actions: {},
  modules: {
    menuItems: menuItems,
    cart: cart,
    order: order,
    user: user
  }
})
