<template>
  <div class="profileContainer">
    <nav>
      <MenuBtn />
    </nav>
    <OverlayMenu />
  </div>
</template>

<script>
import MenuBtn from '../components/MenuButton.vue'
import OverlayMenu from '../components/OverlayMenu'
export default {
  components: {
    MenuBtn,
    OverlayMenu
  }
}
</script>

<style></style>
