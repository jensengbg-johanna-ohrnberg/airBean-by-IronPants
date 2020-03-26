<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=PT+Serif|Work+Sans&display=swap');

* {
  margin: 0rem;
  padding: 0rem;
  box-sizing: border-box;
  font-family: 'PT Serif', serif;
}

nav {
  width: 100vw;
  min-height: 6rem;
  background-image: url('./assets/graphics/graphics-header.svg');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 1rem 0rem 1rem;
}

p {
  font-family: 'Work Sans', sans-serif;
  font-size: 0.8rem;
}

.btn {
  background: #000;
  padding: 0.6rem 2rem;
  margin: 1rem 0rem;
  color: #fff;
  border: none;
  border-radius: 3rem;
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
