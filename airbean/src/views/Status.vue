<template>
  <div class="statusContainer">
    <p class="orderNum" v-if="state">
      ordernummer: <strong>{{ orderNum }}</strong>
    </p>
    <p class="orderNum" v-if="!state">You didn't order anything</p>
    <img class="drone-img" src="../assets/graphics/drone.svg" alt="" />
    <h1 v-if="state">Din beställning är på väg!</h1>
    <h1 v-if="!state">Du kan beställa på vårt meny</h1>
    <p class="eta" v-if="state">
      <strong>{{ eta }}</strong> minuter
    </p>
    <p class="eta" v-if="!state"></p>
    <button
      v-if="state === true && statBtn === true"
      class="btn"
      @click="conferm"
    >
      Ok, cool!
    </button>
    <button v-else class="btn" @click="returnFunc">
      back
    </button>
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
    },
    state() {
      return this.$store.state.order.orderRecived
    },
    statBtn() {
      return this.$store.state.order.statBtn
    }
  },
  mounted() {
    console.log(this.state)
    console.log(this.statBtn, 'btn')
  },
  methods: {
    conferm: function() {
      const localUuid = window.localStorage.getItem('uuid')
      if (localUuid === null) {
        this.$router.push('/profile')
      } else {
        const order = this.$store.state.order.orderToSend
        console.log(this.$store.state.order.orderRecived)
        this.$store.dispatch('sendOrderToDB', order)
        this.$router.push('/orderhistory')
      }
    },
    returnFunc: function() {
      this.$router.push('/menu')
    }
  }
}
</script>

<style lang="scss" scoped>
.statusContainer {
  background: #e5674e;
  position: relative;
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

  h1 {
    font-size: 2.2rem;
  }

  .btn {
    background: #fff;
    color: #000;
    margin-bottom: 20%;
    cursor: pointer;
  }

  .orderNum {
    color: #fffb;
    margin-bottom: 20%;
  }

  .drone-img {
    margin-bottom: 20%;
  }

  .eta {
    font-size: 1.4rem;
    margin-bottom: 20%;
    margin-top: 20%;
  }
}
</style>
