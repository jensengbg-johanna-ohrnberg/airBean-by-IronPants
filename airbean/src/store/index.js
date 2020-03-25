import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = Vue.observable({
  isNavOpen: false
})

export const mutations = {
  toggleNav () {
    store.isNavOpen = !store.isNavOpen
  }
}

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
