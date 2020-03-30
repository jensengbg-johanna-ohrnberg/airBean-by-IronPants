const user = {
  state: {
    key: '',
    res: '',
    orderList: [],
    mssg: '',
    userName: '',
    userEmail: ''
  },
  mutations: {
    getKey(state, key) {
      state.key = key
    },
    sendRes(state, data) {
      state.res = data
    },
    sendUserData(state, user) {
      state.orderList = user.orderList
      state.userName = user.name
      state.userEmail = user.email
    },
    sendResData(state, mssg) {
      state.mssg = mssg
    }
  },
  actions: {
    getUUID(ctx) {
      fetch('http://localhost:5000/api/beans/key', { method: 'GET' })
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
    },
    getUserData(ctx, uuid) {
      fetch(`http://localhost:5000/api/beans/profile/${uuid}`, {
        method: 'GET'
      })
        .then(res => res.json())
        .then(data => {
          ctx.commit('sendUserData', data)
        })
    },
    sendOrderToDB(ctx, order) {
      fetch('http://localhost:5000/api/beans/profile/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ order: order })
      })
        .then(res => res.json())
        .then(data => {
          ctx.commit('sendResData', data.mssg)
        })
    }
  }
}

export default user
