<template>
  <div id="burger"
      :class="{ 'active' : isBurgerMenuActive }"
      @click.prevent="toggle">

        <button type="button" class="burger-button" title="Menu">
          <img src="../assets/graphics/navicon.svg" alt="navicon">
        </button>

  </div>
</template>
<script>
import { store, mutations } from '../store/index'

export default {
  computed: {
    isBurgerMenuActive () {
      return store.isNavOpen
    }
  },
  methods: {
    toggle () {
      mutations.toggleNav()
    }
  }
}
</script>

<style>
  .hidden {
    visibility: hidden;
  }

  button {
    cursor: pointer;
    margin-top: 12px;
    margin-left: 6px;
  }

  button:focus {
    outline: 0;
  }

  .burger-button {
    position: relative;
    height: 30px;
    width: 32px;
    display: block;
    z-index: 999;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform .6s cubic-bezier(.165,.84,.44,1);
  }

  #burger {
    background-color: #FFFFFF;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-top: 5px;
    margin-left: 0;
    cursor: pointer;
  }
</style>
