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
  /* display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #f3e4e1; */
  position: relative;
  padding: 5%;
  background-color: #F3E4E1;
  background-image: url('../assets/graphics/graphics-header.svg'), url("../assets/graphics/graphics-footer.svg");
  background-repeat: no-repeat, no-repeat;
  background-position: top, bottom;
  background-size: 100%;
}
  h1 {
    display: flex;
    justify-content: center;
    margin: 1.4rem 0rem;
    font-size: 2.6rem;
    margin-top: 25%;
  }

.main-nav {
  position: absolute;
  display: flex;
  padding: 0;
  margin-top: 5%;
  margin-left: 5%;
}
</style>
