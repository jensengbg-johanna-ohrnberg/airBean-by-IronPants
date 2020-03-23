<template>
  <article>
      <div class="nav-area">
        <input type="checkbox" class="hamburger-menu">
        <div class="nav-icon">
          <div></div>
        </div>
        <div class="main-menu">
          <div>
            <ul>
              <li><a v-on:click="navToMenu">Meny</a></li>
              <li><a v-on:click="navToAbout">Vårt kaffe</a></li>
              <li><a v-on:click="navToOrderstatus">Orderstatus</a></li>
            </ul>
          </div>
        </div>
      </div>
    </article>
</template>

<script>
export default {
  name: 'CloseButton',
  methods: {
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
    .nav-area {
      position: fixed;
      z-index: 1;
    }

    .nav-area .hamburger-menu {
      position: absolute;
      z-index: 2;
      cursor: pointer;
      width: 50px;
      height: 50px;
      opacity: 0;
    }

    .nav-area .nav-icon {
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 1;
      width: 25px;
      height: 25px;
      padding: 16px;
      background: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    .nav-area .nav-icon > div {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.4s ease;
      position: relative;
      width: 100%;
      height: 2px;
      background-color: #000000;
    }

    .nav-area .nav-icon > div:before,
    .nav-area .nav-icon > div:after {
      content: '';
      position: absolute;
      z-index: 1;
      top: -8px;
      width: 100%;
      height: 2px;
      background: inherit;
    }

    .nav-area .nav-icon > div:after {
      top: 8px;
    }

    .nav-area .hamburger-menu:checked + .nav-icon > div {
      transform: rotate(135deg);
    }

    .nav-area .hamburger-menu:checked + .nav-icon > div:before,
    .nav-area .hamburger-menu:checked + .nav-icon > div:after {
      top: 0;
      transform: rotate(90deg);
    }

    .nav-area .hamburger-menu:checked:hover + .nav-icon > div {
      transform: rotate(225);
    }

    .nav-area .hamburger-menu:checked ~ .main-menu {
      visibility: visible;
    }

    .nav-area .hamburger-menu:checked ~ .main-menu > div {
      transform: scale(1);
      transition-duration: 0.8s;
    }

    .nav-area .hamburger-menu:checked ~ .main-menu > div > div {
      opacity: 1;
      transition: opacity 0.5s ease;
    }

    .nav-area .main-menu {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      width: 375px;
      height: 100%;
      visibility: hidden;
      overflow: hidden;
    }

    .nav-area .main-menu > div {
      display: flex;
      flex: none;
      align-items: center;
      justify-content: center;
      transform: scale(0);
      transition: 0.5s ease;
      background: #2F2926;
      width: 200vw;
      height: 200vh;
    }

    .nav-area .main-menu > div > div {
      text-align: center;
      opacity: 0;
      transition: opacity 0.5 ease;
    }

    .nav-area .main-menu > div > ul > li {
      list-style: none;
      color: #fff;
      font-size: 24px;
      padding: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .nav-area .main-menu > div > ul > li:last-child {
      border-bottom: none;
    }

    .nav-area .main-menu > div > ul > li > a {
      color: inherit;
      text-decoration: none;
      transition: color 0.5s ease;
      font-family: 'Baloo';
      cursor: pointer;
    }
</style>
