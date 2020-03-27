<template>
  <div id="burger">

        <div class="burger-button" @click="openNav">
          <img src="../assets/graphics/navicon.svg" alt="navicon">
        </div>

  </div>
</template>
<script>

export default {
  data () {
    return {
      isNavOpen: false
    }
  },
  methods: {
    openNav () {
      this.isNavOpen = !this.isNavOpen
    }
  },
  watch: {
    isNavOpen () {
      this.$store.commit('toggleNav', this.isNavOpen)
    }
  }
}
</script>

<style>
  .burger-button {
    position: absolute;
    display: flex;
    justify-content: center;
    margin: 18%;
    height: 30px;
    width: 32px;
  }

  #burger {
    background-color: #FFFFFF;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
</style>
