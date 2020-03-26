<template>
  <div class="wrapper-cart">
    <nav>
      <CartBtn @clicked="closeCart" />
    </nav>
    <div class="container">
      <h1>Din beställning</h1>
      <CartList @valChange="getTotal" />
      <section class="total">
        <article>
          <h2>Total</h2>
          <h2>{{ totalP }} kr</h2>
        </article>
        <p>inkl moms + drönarleverans</p>
      </section>
      <button class="btn" @click="sendOrder">Take my money!</button>
    </div>
  </div>
</template>

<script>
import CartList from './CartList.vue'
import CartBtn from './CartBtn.vue'
export default {
  name: 'CartOverlay',
  components: {
    CartList,
    CartBtn
  },
  methods: {
    closeCart: function() {
      this.$emit('closeCart')
    },
    getTotal: function() {
      let price = 0
      this.$store.state.cart.cart.forEach(item => {
        price += item.price * item.quant
      })
      this.totalP = price
    },
    sendOrder: function() {
      const total = this.totalP
      const order = {
        items: this.$store.state.cart.cart,
        totalSum: total
      }
      this.$store.dispatch('sendOrder', order)
      this.$router.push('/status')
    }
  },
  data: () => {
    return {
      totalP: 0
    }
  },
  created() {
    this.getTotal()
  }
}
</script>

<style lang="scss" scoped>
@mixin flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.wrapper-cart {
  /* width: 100vw;
  height: 100vh;
  overflow-y: scroll; */
  position: absolute;
  @include flex();
  justify-content: flex-start;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #000d;
  /* padding-top: 1rem; */

  nav {
    width: 30vw;
    height: 6rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 1.6rem 0rem 1.6rem;
  }
  .container {
    background: #fff;
    width: 92%;
    min-height: 90%;
    overflow: scroll;
    margin: 1rem;
    @include flex();
    border-radius: 4px;
    padding: 1rem 0rem;

    .total {
      width: 100%;
      @include flex();
      align-items: flex-start;
      margin: 2rem 0rem;
      padding: 0rem 1rem;
      article {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
