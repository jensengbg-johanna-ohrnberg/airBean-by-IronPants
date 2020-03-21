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
    getMenuItems(ctx) {
      const url = 'http://localhost:5000/api/beans'
      fetch(url, { method: 'GET' })
        .then(res => res.json())
        .then(data => {
          ctx.commit('sendMenuItems', data)
        })
    }
  }
}

export default menuItems
