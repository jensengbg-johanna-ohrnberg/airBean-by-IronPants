<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      <MenuItems v-bind:prod="product" />
    </li>
  </ul>
</template>

<script>
import MenuItems from '../components/MenuItem'
export default {
  name: 'MenuList',
  components: {
    MenuItems
  },
  created() {
    this.$store.dispatch('getMenuItems')
  },
  computed: {
    products() {
      return this.$store.state.menuItems.items.menu
    }
  }
}
</script>

<style lang="scss" csoped>
ul {
  margin-bottom: auto;
}
</style>
