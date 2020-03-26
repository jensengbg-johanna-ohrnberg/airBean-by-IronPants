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

      <ul class="show-overlay-nav">
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
import { store, mutations } from '../store/index'

export default {
  computed: {
    isOverlayOpen() {
      return store.isNavOpen
    }
  },
  methods: {
    navToMenu() {
      this.$router.push('/menu')
      mutations.toggleNav()
    },
    navToAbout() {
      this.$router.push('/about')
      mutations.toggleNav()
    },
    navToMyProfile() {
      this.$router.push('/profile')
      mutations.toggleNav()
    },
    navToOrderstatus() {
      this.$router.push('/orderstatus')
      mutations.toggleNav()
    },
    closeOverlay: mutations.toggleNav
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

.show-overlay-nav {
  list-style-type: none;
  cursor: pointer;
  margin: 6rem 0rem;
}

.show-overlay-nav > li > a {
  color: #ffffff;
  text-decoration: none;
  font-size: 32px;
  display: flex;
  justify-content: center;
  padding-bottom: 0.5em;
  margin-top: 40px;
  margin-bottom: 40px;
}

hr {
  margin: auto;
  width: 50px;
}

hr.line {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
}
</style>
