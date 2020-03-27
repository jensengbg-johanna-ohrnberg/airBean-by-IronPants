<template>
    <article class="loading-container">
        <img class="loader-img" src="../assets/graphics/loader.png" alt="loader">
    </article>
</template>

<script>
export default {
  created () {
    setTimeout(() => this.$router.push('/status'), 2000)
  }
}
</script>

<style scoped>
    .loading-container {
        background-color: #2F2926;
    }

    .loader-img {
        margin-top: 55%;
        margin-bottom: 55%;
        margin-left: 45%;
    }
</style>
