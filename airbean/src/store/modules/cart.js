const cart = {
  state: {
    cart: []
  },
  mutations: {
    sendProdToCart(state, prod) {
      state.cart.push(prod)
    }
  },
  actions: {
    sendProdToCart(ctx, prod) {
      ctx.commit('sendProdToCart', prod)
    }
  }
}

export default cart
