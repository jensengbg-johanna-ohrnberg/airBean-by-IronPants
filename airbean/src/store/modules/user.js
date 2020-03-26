const user = {
  state: {
    key: ''
  },
  mutations: {
    getKey(state, key) {
      state.key = key
    }
  },
  actions: {
    getUUID(ctx) {
      fetch('http://localhost:5000/api/beans/key', { mehtod: 'GET' })
        .then(res => res.json())
        .then(data => {
          ctx.commit('getKey', data)
        })
    }
  }
}

export default user
