<template>
  <transition name="slide">
    <div v-if="isOverlayOpen" class="show-overlay">
      <button
        type="button"
        class="close-button"
        title="Menu"
        @click="closeOverlay"
        v-if="isOverlayOpen"
      >
        <img
          class="img-button"
          src="../assets/graphics/close.svg"
          alt="close"
        />
      </button>

      <ul class="show-overlay">
        <li><a @click="navToMenu">Meny</a></li>
        <span><hr class="line"/></span>
        <li><a @click="navToAbout">Vårt kaffe</a></li>
        <span><hr class="line"/></span>
        <li><a @click="navToMyProfile">Min Profil</a></li>
        <span><hr class="line"/></span>
        <li><a @click="navToOrderstatus">Orderstatus</a></li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: true
    }
  },
  methods: {
    closeNav: function() {
      this.isNavOpen = !this.isNavOpen
    },
    navToMenu: function() {
      this.$router.push('/menu')
      this.$store.mutations.toggleNav()
    },
    navToAbout: function() {
      this.$router.push('/about')
      this.$store.mutations.toggleNav()
    },
    navToMyProfile: function() {
      this.$router.push('/profile')
      this.$store.mutations.toggleNav()
    },
    /* navToOrderstatus() {
      this.$router.push('/status')
    }, */
    navToOrderstatus: function() {
      this.$router.push('/orderstatus')
      this.$store.mutations.toggleNav()
    },
    closeOverlay: function() {
      this.$store.mutations.toggleNav()
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
  border-radius: 0;
  background-color: #ffffff;
  pointer-events: all;
  border-radius: 50%;
}

.img-button {
  position: sticky;
  display: flex;
  justify-content: center;
  width: 25px;
  height: 25px;
}

.slide-enter,
.slide-leave-to {
  transition: all 200ms ease-in-out 0s;
}

.close-overlay {
  background-color: #2f2926;
  position: sticky;
  cursor: pointer;
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
  margin: 6rem 0rem;
}

.navigation-menu > li > a {
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 32px;
  color: #ffffff;
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
  background-color: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin-left: 5%;
  margin-top: 5%;
  cursor: pointer;
}
</style>
