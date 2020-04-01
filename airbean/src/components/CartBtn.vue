<template>
  <button class="cartBtn" @click="clicked">
    <img src="../assets/graphics/bag.svg" alt="" />
    <span>{{ itemsCount }}</span>
  </button>
</template>

<script>
export default {
  name: 'CartBtn',
  methods: {
    clicked: function() {
      this.$emit('clicked')
    }
  },
  computed: {
    itemsCount() {
      return this.$store.state.cart.cart.length
    }
  }
}
</script>

<style lang="scss" scoped>
.cartBtn {
  background: #000;
  padding: 1.2rem 1.4rem;
  border: none;
  border-radius: 4rem;
  position: relative;
  cursor: pointer;

  span {
    background: #e5674e;
    font-family: 'PT Serif', serif;
    color: #fff;
    position: absolute;
    top: -0.4rem;
    right: 0rem;
    border-radius: 50%;
    padding: 0.2rem 0.4rem;
  }
}

.cartBtn:focus {
  outline: none;
}
</style>
