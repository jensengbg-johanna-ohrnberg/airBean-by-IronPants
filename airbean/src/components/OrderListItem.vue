<template>
  <li class="orderItem">
    <article class="upperLine">
      <p class="orderNum">6565165535</p>
      <p>20/03/21</p>
    </article>
    <article class="lowerLine">
      <p>total ordersumma</p>
      <p>123 kr</p>
    </article>
  </li>
</template>

<script>
export default {
  name: 'OrderItem'
}
</script>

<style lang="scss" scoped>
.orderItem {
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ccc;
  border-bottom: 1px solid #444;

  .orderNum {
    font-weight: bold;
  }

  article {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .lowerLine {
    p {
      font-size: 0.7rem;
      color: #999;
    }
  }
}
</style>
