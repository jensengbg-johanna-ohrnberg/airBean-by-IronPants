<template>
  <div class="wrapper">
    <nav></nav>
    <h1>Meny</h1>
    <MenuList />
  </div>
</template>

<script>
import MenuList from '../components/MenuList.vue'
export default {
  components: {
    MenuList
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
    height: 6rem;
  }

  h1 {
    margin: 1.4rem 0rem;
    font-size: 2.6rem;
  }
}
</style>
