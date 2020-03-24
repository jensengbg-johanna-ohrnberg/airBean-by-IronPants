<template>
  <div class="wrapper">
    <nav>
      <button href="#">Menu</button>
      <button @click="openCart" href="#">Menu</button>
    </nav>
    <h1>Meny</h1>
    <MenuList />
    <cart-overlay @closeCart="closeCartOverlay" v-if="showCartOverlay" />
    <img src="../assets/graphics/graphics-footer.svg" alt="" />
  </div>
</template>

<script>
import MenuList from '../components/MenuList.vue'
import CartOverlay from '../components/Cart.vue'
export default {
  data: () => {
    return {
      showCartOverlay: false
    }
  },
  components: {
    MenuList,
    CartOverlay
  },
  methods: {
    openCart: function() {
      this.showCartOverlay = true
    },
    closeCartOverlay: function() {
      this.showCartOverlay = false
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #f3e4e1;

  nav {
    width: 100vw;
    min-height: 6rem;
    background-image: url('../assets/graphics/graphics-header.svg');
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.6rem 0rem 1.6rem;
  }

  h1 {
    margin: 1.4rem 0rem;
    font-size: 2.6rem;
  }
}
</style>
