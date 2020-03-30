<template>
  <div id="burger" @click="openNav">
    <img src="../assets/graphics/navicon.svg" alt="navicon" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false
    }
  },
  methods: {
    openNav() {
      this.isNavOpen = !this.isNavOpen
    }
  },
  watch: {
    isNavOpen() {
      this.$store.commit('toggleNav', this.isNavOpen)
    }
  }
}
</script>

<style scoped>
.hidden {
  visibility: hidden;
}

#burger {
  background-color: #ffffff;
  border-radius: 50%;
  padding: 1.1rem 0.8rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
