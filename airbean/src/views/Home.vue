<template>
    <article id='home'>
        <h1 class="title">AIR BEAN</h1>
        <h6 class="subtitle">DRONEDELIVERED COFFEE</h6>
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
       border: 1px solid black;
       width: 375px;
       height: 667px;
       margin: auto;
       background: #38846D;
       display: grid;
       grid-template-columns: 32% 150px 40%;
       grid-template-rows: 40% 10% 10% 40%;
   }

   .title {
       color: #FFFFFF;
       grid-column: 2 / 3;
       grid-row: 2 / 3;
   }

   .subtitle {
       color: #FFFFFF;
       grid-column: 2 / 3;
       grid-row: 3 / 4;
   }
</style>
