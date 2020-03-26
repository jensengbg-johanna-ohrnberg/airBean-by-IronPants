<template>
  <div class="profileContainer">
    <nav>
      <MenuBtn />
    </nav>
    <OverlayMenu />
    <RegForm />
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
