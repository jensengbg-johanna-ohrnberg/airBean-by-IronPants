const order = {
  state: {
    orderToSend: '',
    orderRecived: false,
    statBtn: false
  },
  mutations: {
    saveOrder(state, order) {
      state.orderToSend = order
    },
    orderStat(state, val) {
      state.orderRecived = val
    },
    statBtn(state, val) {
      state.statBtn = val
    }
  },
  actions: {
    sendOrder(ctx, order) {
      fetch('http://localhost:5000/api/beans', { method: 'POST' })
        .then(res => res.json())
        .then(data => {
          order.orderNumber = data.orderNr
          order.eta = data.eta
          ctx.commit('saveOrder', order)
        })
    }
  }
}

export default order
