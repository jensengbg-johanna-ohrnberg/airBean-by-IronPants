<template>
  <div v-if="closeMenu" class="show-overlay">
    <button type="button" class="close-button" title="Menu" @click="closeNav">
      <img class="img-button" src="../assets/graphics/close.svg" alt="close" />
    </button>

    <ul class="navigation-menu">
      <li><a @click="navToMenu">Meny</a></li>
      <span><hr class="line"/></span>
      <li><a @click="navToAbout">Vårt kaffe</a></li>
      <span><hr class="line"/></span>
      <li><a @click="navToMyProfile">Min Profil</a></li>
      <span><hr class="line"/></span>
      <li><a @click="navToOrderstatus">Orderstatus</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    closeNav: function() {
      this.$store.commit('toggleNav', false)
    },
    navToMenu: function() {
      this.$router.push('/menu')
      this.$store.commit('toggleNav')
    },
    navToAbout: function() {
      this.$router.push('/about')
      this.$store.commit('toggleNav')
    },
    navToMyProfile: function() {
      const localUUID = localStorage.getItem('uuid')
      if (localUUID === null) {
        this.$router.push('/profile')
      } else {
        this.$router.push('/orderhistory')
      }
      this.$store.commit('toggleNav')
    },

    navToOrderstatus: function() {
      this.$router.push('/status')
      this.$store.commit('toggleNav')
    }
  },
  computed: {
    closeMenu() {
      return this.$store.state.isNavOpen
    }
  },
  watch: {
    isNavOpen() {
      this.$store.commit('toggleNav', this.isNavOpen)
    }
  }
}
</script>

<style scoped>
.close-button {
  position: sticky;
  padding: 1rem;
  margin: 0rem 0rem 0rem 0.4rem;
  border: 0;
  background-color: #ffffff;
  border-radius: 50%;
  outline: none;
}

.img-button {
  position: sticky;
  display: flex;
  justify-content: center;
}

.show-overlay {
  background-color: #2f2926;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw;
  min-height: 100vh;
  padding: 1rem 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.navigation-menu {
  margin: 4rem 0rem;
  list-style-type: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 32px;
  color: #ffffff;
  margin: 2rem 0rem;
}

.line {
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 5rem;
}

.close-button {
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin-left: 5%;
  margin-top: 5%;
  cursor: pointer;
}
</style>
