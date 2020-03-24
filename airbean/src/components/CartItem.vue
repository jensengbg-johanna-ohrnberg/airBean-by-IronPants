<template>
  <section class="cartItem">
    <article class="prodInfo">
      <h3>{{ prod.title }}</h3>
      <p class="price">{{ prod.price }} kr</p>
    </article>
    <article>
      <button class="arrow up"></button>
      <input type="number" min="1" max="5" value="1" class="quant" />
      <button class="arrow down"></button>
    </article>
  </section>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    prod: Object
  }
}
</script>

<style lang="scss" scoped>
.cartItem {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 1rem;
  margin: 0.6rem 0rem;
  .prodInfo {
    height: 100%;
    margin-right: auto;
  }
  input[type='number'] {
    border: none;
    text-align: center;
    align-self: center;
    padding: 0rem 0rem 0.8rem 0rem;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    background: red;
    padding: 1rem;
  }

  .price {
    font-family: 'Work Sans', sans-serif;
  }
}
</style>
