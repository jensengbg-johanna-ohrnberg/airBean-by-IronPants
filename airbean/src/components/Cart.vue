<template>
  <div class="wrapper-cart">
    <nav>
      <button href="#"></button>
      <button @click="clsoeCart" href="#">Menu</button>
    </nav>
    <div class="container">
      <img
        src="../assets/graphics/cart-upper-corner.svg"
        alt=""
        class="corner"
      />
      <h1>Din beställning</h1>
      <CartList @valChange="getTotal" />
      <section class="total">
        <article>
          <h2>Total</h2>
          <h2>{{ totalP }} kr</h2>
        </article>
        <p>inkl moms + drönarleverans</p>
      </section>
      <button class="btn">Take my money!</button>
    </div>
  </div>
</template>

<script>
import CartList from './CartList.vue'
export default {
  name: 'CartOverlay',
  components: {
    CartList
  },
  methods: {
    clsoeCart: function() {
      this.$emit('closeCart')
    },
    getTotal: function() {
      let price = 0
      this.$store.state.cart.cart.forEach(item => {
        price += item.price * item.quant
      })
      this.totalP = price
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
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  position: fixed;
  @include flex();
  justify-content: flex-start;
  top: 0;
  right: 0;
  background: #000d;

  nav {
    width: 100vw;
    height: 6rem;
    display: flex;
    justify-content: space-between;
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

    .corner {
      transform: translateY(-1.8rem);
      align-self: flex-end;
      margin-right: 1rem;
    }

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

    .btn {
      background: #000;
      padding: 0.6rem 1.8rem;
      margin: 1rem 0rem;
      color: #fff;
      border: none;
      border-radius: 3rem;
      font-size: 1.3rem;
    }
  }
}
</style>
