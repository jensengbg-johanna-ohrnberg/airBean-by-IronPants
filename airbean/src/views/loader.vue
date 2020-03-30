<template>
  <article class="loading-container">
    <img class="loader-img" src="../assets/graphics/loader.png" alt="loader" />
  </article>
</template>

<script>
export default {
  created() {
    setTimeout(() => this.$router.push('/status'), 2000)
  }
}
</script>

<style scoped>
.loading-container {
  background-color: #e5674e;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
