<template>
  <article>
    <section>
      <transition name="slide">
        <div v-if="isOverlayOpen"
            class="show-overlay">

            <div class="close-overlay" @click="closeOverlay" v-if="isOverlayOpen">
              <button type="button" class="close-button" title="Menu">
                <img class="img-button" src="../assets/graphics/close.svg" alt="close">
              </button>
            </div>

            <ul class="show-overlay-nav">
              <li><a @click="navToMenu">Meny</a></li>
              <span><hr class="line"></span>
              <li><a @click="navToAbout">Vårt kaffe</a></li>
              <span><hr class="line"></span>
              <li><a @click="navToMyProfile">Min Profil</a></li>
              <span><hr class="line"></span>
              <li><a @click="navToOrderstatus">Orderstatus</a></li>
            </ul>

          </div>
      </transition>
    </section>
  </article>
</template>
<script>
import { store, mutations } from '../store/index'

export default {
  computed: {
    isOverlayOpen () {
      return store.isNavOpen
    }
  },
  methods: {
    navToMenu () {
      this.$router.push('/menu')
    },
    navToAbout () {
      this.$router.push('/about')
    },
    navToMyProfile () {
      this.$router.push('/about')
    },
    navToOrderstatus () {
      this.$router.push('/orderstatus')
    },
    closeOverlay: mutations.toggleNav
  }
}
</script>

<style>
  .close-button {
    position: sticky;
    height: 50px;
    width: 50px;
    display: block;
    z-index: 999;
    border: 0;
    border-radius: 0;
    background-color: #FFFFFF;
    pointer-events: all;
    border-radius: 50%;
    margin-top: -30px;
  }

  .img-button {
    position: sticky;
    display: flex;
    justify-content: center;
    width: 25px;
    height: 25px;
    margin-left: 6px;
  }

  .slide-enter, .slide-leave-to {
    transition: all 200ms ease-in-out 0s
  }

  .close-overlay {
    background-color: #2F2926;
    position: sticky;
    cursor: pointer;
  }

  .show-overlay {
    overflow: hidden;
    background-color: #2F2926;
    position: sticky;
    height: 828px;
    z-index: 999;
    padding: 3rem 20px 2rem 10px;
    width: 345px;
  }

  .show-overlay-nav {
    list-style-type: none;
    cursor: pointer;
    margin-top: 50%;
    margin-bottom: 50%;
  }

  .show-overlay-nav > li > a {
    color: #FFFFFF;
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
