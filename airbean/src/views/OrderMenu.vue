<template>
  <div class="wrapper">

    <nav class="main-nav">
      <MenuButton />
    </nav>

    <OverlayMenu v-if="showMenu" />

    <nav class="cart-nav">
      <CartBtn @clicked="openCart" />
    </nav>
    <h1>Meny</h1>
    <MenuList />
    <cart-overlay @closeCart="closeCartOverlay" v-if="showCartOverlay" />
  </div>
</template>

<script>
import MenuList from '../components/MenuList.vue'
import CartOverlay from '../components/Cart.vue'
import CartBtn from '../components/CartBtn.vue'
import MenuButton from '../components/MenuButton'
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
    MenuButton,
    OverlayMenu
  },
  computed: {
    showMenu () {
      return this.$store.state.isNavOpen
    }
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

  .cart-nav {
    position: relative;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 1.6rem 0rem 1.6rem;
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
