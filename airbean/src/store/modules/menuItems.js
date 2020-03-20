const menuItems = {
  state: {
    items: []
  },
  mutations: {
    sendMenuItems(state, items) {
      state.items = items
    }
  },
  actions: {
    async getMenuItems(ctx) {
      const url = 'http://localhost:5000/api/beans'
      const res = await fetch(url, { method: 'GET' })
      const data = await res.json()

      ctx.commit('sendMenuItems', data)
    }
  }
}

export default menuItems
