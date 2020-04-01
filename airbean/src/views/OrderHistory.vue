<template>
  <div class="historyContainer">
    <nav>
      <MenuBtn />
    </nav>
    <OverlayMenu />
    <img src="../assets/graphics/Profile.svg" alt="" />
    <article class="userInfo">
      <h1>{{ name }}</h1>
      <p>{{ email }}</p>
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
  },
  created() {
    const localUuid = window.localStorage.getItem('uuid')
    this.$store.dispatch('getUserData', localUuid)
  },
  computed: {
    name() {
      return this.$store.state.user.userName
    },
    email() {
      return this.$store.state.user.userEmail
    }
  }
}
</script>

<style lang="scss" scoped>
.historyContainer {
  position: relative;
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
    margin-top: 0.8rem;

    p {
      margin-top: 0.2rem;
      color: #aaa;
      font-weight: 100;
    }
  }
}
</style>
