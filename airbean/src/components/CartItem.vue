<template>
  <section class="cartItem">
    <article class="prodInfo">
      <h3>{{ prod.title }}</h3>
      <p class="price">{{ prod.price }} kr</p>
    </article>
    <article class="quant">
      <img
        class="arrow"
        src="../assets/graphics/arrow-up.svg"
        alt=""
        @click="increaseQuant(prod)"
      />
      <p class="quantVal">{{ amount }}</p>
      <img
        class="arrow"
        src="../assets/graphics/arrow-down.svg"
        alt=""
        @click="decreaseQuant(prod)"
      />
    </article>
  </section>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    prod: Object
  },
  data: function() {
    return {
      amount: this.prod.quant
    }
  },
  methods: {
    increaseQuant: function(prod) {
      this.$store.dispatch('increaseQuant', prod)
      const index = this.$store.state.cart.cart.indexOf(prod)
      this.amount = this.$store.state.cart.cart[index].quant
      this.$emit('valChange')
    },
    decreaseQuant: function(prod) {
      this.$store.dispatch('decreaseQuant', prod)
      const index = this.$store.state.cart.cart.indexOf(prod)
      if (index === -1) {
        this.amount = 0
      } else {
        this.amount = this.$store.state.cart.cart[index].quant
      }
      this.$emit('valChange')
    }
  }
}
</script>

<style lang="scss" scoped>
.cartItem {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1rem;

  .quant {
    width: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .prodInfo {
    padding-top: 1rem;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .quantVal {
    margin: 0.2rem 0rem;
  }

  .arrow {
    cursor: pointer;
    padding: 0.4rem;
  }

  .price {
    font-family: 'Work Sans', sans-serif;
  }
}
</style>
