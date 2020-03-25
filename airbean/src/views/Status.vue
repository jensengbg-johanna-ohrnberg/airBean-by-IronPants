<template>
  <div class="statusContainer">
    <p class="orderNum">
      ordernummer: <strong>{{ orderNum }}</strong>
    </p>
    <img src="../assets/graphics/drone.svg" alt="" />
    <h1>Din beställning är på väg!</h1>
    <p class="eta">
      <strong>{{ eta }}</strong> minuter
    </p>
    <button class="btn" @click="conferm">Ok, coo!</button>
  </div>
</template>

<script>
export default {
  computed: {
    orderNum() {
      return this.$store.state.order.orderToSend.orderNumber
    },
    eta() {
      return this.$store.state.order.orderToSend.eta
    }
  },
  methods: {
    conferm: function() {
      const localUuid = window.localStorage.getItem('uuid')
      console.log(localUuid)
      if (localUuid === null) {
        this.$router.push('/createProfile')
      } else {
        this.$router.push('/orderHistory')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.statusContainer {
  background: #e5674e;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 4rem;
  text-align: center;

  strong {
    font-family: 'Work Sans', sans-serif;
  }

  .btn {
    background: #fff;
    color: #000;
  }

  .orderNum {
    color: #fffb;
  }

  .eta {
    font-size: 1.4rem;
  }
}
</style>
