<template>
  <div class="wrapper">
    <nav>
      <MenuBtn />
      <CartBtn @clicked="openCart" />
    </nav>
    <OverlayMenu class="overlay-menu" />
    <h1>Meny</h1>
    <MenuList />
    <cart-overlay @closeCart="closeCartOverlay" v-if="showCartOverlay" />
    <img src="../assets/graphics/graphics-footer.svg" alt="" />
  </div>
</template>

<script>
import MenuList from '../components/MenuList.vue'
import CartOverlay from '../components/Cart.vue'
import CartBtn from '../components/CartBtn.vue'
import MenuBtn from '../components/MenuButton.vue'
import OverlayMenu from '../components/OverlayMenu'
export default {
  data: () => {
    return {
      showCartOverlay: false
    }
  },
  components: {
    MenuList,
    CartOverlay,
    CartBtn,
    MenuBtn,
    OverlayMenu
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #f3e4e1;

  h1 {
    margin: 1.4rem 0rem;
    font-size: 2.6rem;
  }
}
</style>
