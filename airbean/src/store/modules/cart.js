const cart = {
  state: {
    cart: []
  },
  mutations: {
    sendProdToCart(state, prod) {
      if (state.cart.indexOf(prod) === -1) {
        state.cart.push(prod)
      }
    },
    prodQuantPlusOne(state, prod) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === prod.id) {
          state.cart[i].quant += 1
        }
      }
    },
    prodQuantMinusOne(state, prod) {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === prod.id) {
          if (state.cart[i].quant === 1) {
            state.cart.splice(i, 1)
          } else {
            state.cart[i].quant -= 1
          }
        }
      }
    }
  },
  actions: {
    sendProdToCart(ctx, prod) {
      ctx.commit('sendProdToCart', prod)
    },
    increaseQuant(ctx, prod) {
      ctx.commit('prodQuantPlusOne', prod)
    },
    decreaseQuant(ctx, prod) {
      ctx.commit('prodQuantMinusOne', prod)
    }
  }
}

export default cart
