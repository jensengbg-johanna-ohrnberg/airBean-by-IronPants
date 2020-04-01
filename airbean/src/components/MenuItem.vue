<template>
  <section class="menuItem">
    <button class="addBtn" @click="sendProd(prod)">+</button>
    <article>
      <p>
        <b>{{ prod.title }}</b
        >...........
      </p>
      <p class="underText">Bryggd på månadens bönor</p>
    </article>
    <h3 class="price">{{ prod.price }} kr</h3>
  </section>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    prod: Object
  },
  methods: {
    sendProd(prod) {
      prod.quant = 1
      this.$store.dispatch('sendProdToCart', prod)
    }
  }
}
</script>

<style lang="scss" scoped>
.menuItem {
  width: 100vw;
  height: 5rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  article {
    p {
      b {
        font-size: 1.4rem;
      }
    }

    .underText {
      font-family: Arial, Helvetica, sans-serif;
      margin-top: 0.3rem;
      color: #444;
      font-size: 0.7rem;
    }
  }

  .price {
    margin-left: auto;
  }

  .addBtn {
    padding: 0.2rem 0.5rem;
    font-size: 1.4rem;
    border-radius: 50%;
    border: none;
    background: #000;
    color: #fff;
    margin-right: 1rem;
    font-weight: 100;
  }
}
</style>
