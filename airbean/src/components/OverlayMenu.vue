<template>

      <div v-if="closeMenu" class="show-overlay">
      <button
        type="button"
        class="close-button"
        title="Menu"
        @click="closeNav"
      >
        <img
          class="img-button"
          src="../assets/graphics/close.svg"
          alt="close"
        />
      </button>

      <ul class="navigation-menu">
        <li><a @click="navToMenu">Meny</a></li>
        <span><hr class="line"></span>
        <li><a @click="navToAbout">Vårt kaffe</a></li>
        <span><hr class="line"></span>
        <li><a @click="navToMyProfile">Min Profil</a></li>
        <span><hr class="line"></span>
        <li><a @click="navToOrderstatus">Orderstatus</a></li>
      </ul>
    </div>
</template>

<script>

export default {
  data () {
    return {
      isNavOpen: true
    }
  },
  methods: {
    closeNav () {
      this.isNavOpen = !this.isNavOpen
    },
    navToMenu() {
      this.$router.push('/menu')
      this.$store.mutations.toggleNav()
    },
    navToAbout() {
      this.$router.push('/about')
      /* mutations.toggleNav() */
    },
    navToMyProfile() {
      this.$router.push('/profile')
      /* mutations.toggleNav() */
    },
    /* navToOrderstatus() {
      this.$router.push('/status')
    }, */
    navToOrderstatus() {
      this.$router.push('/orderstatus')
      /* mutations.toggleNav() */
    }
  },
  computed: {
    closeMenu () {
      return this.$store.state.isNavOpen
    }
  },
  watch: {
    isNavOpen () {
      this.$store.commit('toggleNav', this.isNavOpen)
    }
  }
}
</script>

<style scoped>
section {
  width: 100vw;
  height: 100vh;
}
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
  width: 100vw;
  height: 100%;
  padding: 1rem 0.4rem;
}

.navigation-menu {
  list-style-type: none;
  cursor: pointer;
}

a {
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
