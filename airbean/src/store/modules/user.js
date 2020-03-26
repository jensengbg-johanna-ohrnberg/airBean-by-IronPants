const user = {
  state: {
    key: '',
    res: ''
  },
  mutations: {
    getKey(state, key) {
      state.key = key
    },
    sendRes(state, data) {
      state.res = data
    }
  },
  actions: {
    getUUID(ctx) {
      fetch('http://localhost:5000/api/beans/key', { mehtod: 'GET' })
        .then(res => res.json())
        .then(data => {
          ctx.commit('getKey', data)
        })
    },
    createNewUser(ctx, user) {
      fetch('http://localhost:5000/api/beans/create-user', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: user })
      })
        .then(res => res.json())
        .then(data => {
          ctx.commit('sendRes', data.res)
        })
    }
  }
}

export default user
