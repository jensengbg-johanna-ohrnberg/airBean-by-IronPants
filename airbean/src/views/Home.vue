<template>
    <article id='home'>
        <img class="landing-page-info" src="../assets/graphics/airbean-landing.svg" alt="airbean logo">
    </article>
</template>

<script>
export default {
  name: 'Home',
  created () {
    setTimeout(() => this.$router.push('/about'), 3000)
  }
}
</script>

<style scoped>
   #home {
       border: 1px solid black;
       width: 375px;
       height: 660px;
       margin: auto;
       background-color: #38846D;
       background-image: url("../assets/graphics/intro-graphic-left.svg"), url("../assets/graphics/intro-graphic-right.svg");
       background-position: left, right;
       background-repeat: no-repeat, no-repeat;
   }

   .landing-page-info {
       margin: 16%;
       margin-top: 50%;
   }
</style>
