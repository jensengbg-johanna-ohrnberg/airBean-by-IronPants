<template>
  <div class="historyContainer">
    <nav>
      <MenuBtn />
    </nav>
    <OverlayMenu />
    <img src="../assets/graphics/Profile.svg" alt="" />
    <article class="userInfo">
      <h1>Name</h1>
      <p>Email</p>
    </article>
    <OrderList />
  </div>
</template>

<script>
import MenuBtn from '../components/MenuButton.vue'
import OverlayMenu from '../components/OverlayMenu'
import OrderList from '../components/OrderList'
export default {
  components: {
    MenuBtn,
    OverlayMenu,
    OrderList
  }
}
</script>

<style lang="scss" scoped>
.historyContainer {
  background: #2f2926;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  img {
    margin-top: 2rem;
  }

  .userInfo {
    text-align: center;
    margin-bottom: auto;
    margin-top: 0.6rem;
  }
}
</style>
