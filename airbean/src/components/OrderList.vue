<template>
  <div class="orderContainer">
    <h2>Orderhistorik</h2>
    <ul class="orderList">
      <OrderItem
        v-for="order in orderList"
        :key="order.orderNumber"
        v-bind:order="order"
      />
    </ul>
    <article class="totalSum">
      <p>Totalt spenderat</p>
      <p>{{ this.sum }} kr</p>
    </article>
  </div>
</template>

<script>
import OrderItem from './OrderListItem.vue'
export default {
  components: {
    OrderItem
  },
  computed: {
    orderList() {
      return this.$store.state.user.orderList
    },
    sum() {
      const list = this.$store.state.user.orderList
      let sum = 0
      list.forEach(elem => {
        sum += elem.totalSum
      })
      return sum
    }
  }
}
</script>

<style lang="scss" scoped>
.orderContainer {
  width: 100%;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0rem 2rem;
  margin: 2rem 0rem;

  h2 {
    margin: 1rem 0rem;
  }

  ul {
    list-style: none;
    width: 100%;
    margin-bottom: 0;
  }

  .totalSum {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 0rem;
    border-top: 1px solid #fff;
  }
}
</style>
