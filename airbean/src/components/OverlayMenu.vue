<template>
<article>
    <div class="overlay">
        <div class="close-overlay" @click="closeOverlay" v-if="isOverlayOpen"></div>
        <transition name="slide">
            <div v-if="isOverlayOpen"
                 class="show-overlay">
                 <button type="button" class="close-button" title="Menu">
                    <img src="../assets/graphics/close.svg" alt="close">
                </button>
                <ul class="show-overlay-nav">
                    <li><a @click="navToMenu">Meny</a></li>
                    <span class="line"><hr></span>
                    <li><a @click="navToAbout">Vårt kaffe</a></li>
                    <span class="line"><hr></span>
                    <li><a @click="navToOrderstatus">Orderstatus</a></li>
                </ul>
            </div>
        </transition>
    </div>
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
    navToOrderstatus () {
      this.$router.push('/orderstatus')
    },
    closeOverlay: mutations.toggleNav
  }
}
</script>

<style>
.close-button {
        position: relative;
        height: 30px;
        width: 32px;
        display: block;
        z-index: 999;
        border: 0;
        border-radius: 0;
        background-color: #FFFFFF;
        pointer-events: all;
        border-radius: 50%;
    }

    .slide-enter, .slide-leave-to {
        transition: all 200ms ease-in-out 0s
    }

    .close-overlay {
        background-color: #2F2926;
        position: fixed;
        cursor: pointer;
    }

    .show-overlay {
        overflow-y: auto;
        background-color: #2F2926;
        position: sticky;
        height: 753px;
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
</style>
