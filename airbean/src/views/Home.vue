<template>
  <section id="home">
    <img src="../assets/graphics/airbean-landing.svg" alt="airbean logo" />
  </section>
</template>

<script>
export default {
  name: 'Home',
  created() {
    setTimeout(() => this.$router.push('/about'), 3000)
  }
}
</script>

<style scoped>
#home {
  width: 100vw;
  height: 100vh;
  margin: auto;
  background-color: #38846d;
  background-image: url('../assets/graphics/intro-graphic-left.svg'),
    url('../assets/graphics/intro-graphic-right.svg');
  background-position: left, right;
  background-repeat: no-repeat, no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
}
</style>
