<template>
  <div class="profileContainer">
    <nav>
      <MenuBtn />
    </nav>
    <OverlayMenu />
    <RegForm @clicked="sendUserInfo" />
  </div>
</template>

<script>
import MenuBtn from '../components/MenuButton.vue'
import OverlayMenu from '../components/OverlayMenu'
import RegForm from '../components/RegForm.vue'
export default {
  components: {
    MenuBtn,
    OverlayMenu,
    RegForm
  },
  methods: {
    sendUserInfo: function(name, email) {
      const key = this.$store.state.user.key.key
      const order = this.$store.state.order.orderToSend
      const user = {
        uuid: key,
        name: name,
        email: email,
        orderList: [order]
      }
      console.log(user)
      this.$store.dispatch('createNewUser', user)
      window.localStorage.setItem('uuid', key)
      console.log(
        this.$store.state.user.res,
        window.localStorage.getItem('uuid')
      )
      this.$router.push('/orderhistory')
    }
  },
  created() {
    this.$store.dispatch('getUUID')
  }
}
</script>

<style lang="scss" scoped>
.profileContainer {
  background: #2f2926;
  width: 100vw;
  height: 100vh;
  padding: 0rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
