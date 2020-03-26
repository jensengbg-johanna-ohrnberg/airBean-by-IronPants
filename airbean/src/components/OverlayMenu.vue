<template>
  <article>
    <section class="show-overlay">

      <div @click="closeNav" class="close-button">
        <img src="../assets/graphics/close.svg" alt="close" />
      </div>

      <ul class="navigation-menu">
        <li><a @click="navToMenu">Meny</a></li>
        <span><hr class="line"/></span>
        <li><a @click="navToAbout">Vårt kaffe</a></li>
        <span><hr class="line"/></span>
        <li><a @click="navToMyProfile">Min Profil</a></li>
        <span><hr class="line"/></span>
        <li><a @click="navToOrderstatus">Orderstatus</a></li>
      </ul>
    </section>
  </article>
</template>

<script>

export default {
  data () {
    return {
      isNavOpen: false
    }
  },
  methods: {
    closeNav () {
      this.isNavOpen = !this.isNavOpen
    },
    navToMenu() {
      this.$router.push('/menu')
    },
    navToAbout() {
      this.$router.push('/about')
    },
    navToMyProfile() {
      this.$router.push('/createProfile')
    },
    navToOrderstatus() {
      this.$router.push('/status')
    }
  },
  watch: {
    isNavOpen () {
      this.$store.commit('toggleNav', this.isNavOpen)
    }
  }
}
</script>

<style>
.show-overlay {
  position: absolute;
  background-color: #2F2926;
  width: 100%;
  height: 100%;
  margin-left: -5%;
  margin-top: -5%;
}

.navigation-menu {
  list-style-type: none;
  margin-top: 70%;
}

.navigation-menu > li > a {
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 32px;
  color: #FFFFFF;
  margin-top: 5%;
  margin-bottom: 5%;
}

.line {
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 15%;
  margin-left: 42%;
}

.close-button {
  width: 50px;
  height: 50px;
  background-color: #FFFFFF;
  border-radius: 50%;
  padding: 15px;
  margin-left: 5%;
  margin-top: 5%;
  cursor: pointer;
}
</style>
