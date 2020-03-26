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
  margin-top: 60%;
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
  width: 50%;
}

.close-button {
  width: 13%;
  height: 6%;
  background-color: #FFFFFF;
  border-radius: 50%;
  padding: 15px;
  margin-left: 5%;
  margin-top: 5%;
  cursor: pointer;
}

/* .close-button {
  position: relative;
  height: 50px;
  width: 50px;
  display: block;
  border-radius: 0;
  background-color: #ffffff;
  border-radius: 50%;
  margin-top: -30px;
  cursor: pointer;
}

.img-button {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 25px;
  height: 25px;
  margin-left: 25%;
  margin-top: 25%;
}

.show-overlay {
  overflow: hidden;
  background-color: #2f2926;
  height: 135vh;
  padding: 3rem 20px 2rem 10px;
  width: 60.2vh;
}

.show-overlay-nav {
  list-style-type: none;
  margin-top: 40%;
  margin-bottom: 50%;
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
  cursor: pointer;
}

hr {
  margin: auto;
  width: 50px;
}

hr.line {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
} */
</style>
