<template>
  <article id='home'>
    <img class="landing-page-info" src="../assets/graphics/airbean-landing.svg" alt="airbean logo">
  </article>
</template>

<script>
export default {
  name: 'Home',
  created () {
    setTimeout(() => this.$router.push('/about'), 2000)
  }
}
</script>

<style scoped>
  #home {
    position: relative;
    background-color: #38846D;
    background-image: url("../assets/graphics/intro-graphic-left.svg"), url("../assets/graphics/intro-graphic-right.svg");
    background-position: left, right;
    background-repeat: no-repeat, no-repeat;
  }

  .landing-page-info {
    margin-top: 55%;
    margin-bottom: 55%;
    margin-left: 20%;
  }
</style>
