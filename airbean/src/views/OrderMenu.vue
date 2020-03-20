<template>
  <div class="wrapper">
    <nav></nav>
    <h1>Meny</h1>
    <MenuItem />
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem.vue'
export default {
  components: {
    MenuItem
  },
  created() {
    this.$store.dispatch('getMenuItems')
    console.log(this.$store.state.menuItems.items)
  }
}
</script>

<style></style>
