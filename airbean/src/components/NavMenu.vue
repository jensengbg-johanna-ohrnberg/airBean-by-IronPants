<template>
    <article class="overlay">
        <CloseButton v-on:click="closeOverlay"/>
        <a class="navigation-links" v-on:click="navToMenu">Meny</a>
        <a class="navigation-links" v-on:click="navToAbout">Vårt kaffe</a>
        <a class="navigation-links" v-on:click="navToOrderstatus">Orderstatus</a>
    </article>
</template>

<script>
import CloseButton from '../components/CloseButton'

export default {
  name: 'CloseButton',
  components: {
    CloseButton
  },
  methods: {
    closeOverlay () {

    },
    navToMenu () {
      this.$router.push('/menu')
    },
    navToAbout () {
      this.$router.push('/about')
    },
    navToOrderstatus () {
      this.$router.push('/orderstatus')
    }
  }
}
</script>

<style scoped>
    .overlay {
        background-color: #2F2926;
    }

    .navigation-links {
        font-family: "PT Serif";
        font-weight: bold;
        font-size: 32px;
        color: #FFFFFF;
    }
</style>
