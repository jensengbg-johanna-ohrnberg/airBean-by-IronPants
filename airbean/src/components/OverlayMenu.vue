<template>
  <article>
    <section class="show-overlay">

            <div @click="closeMenu" class="close-button">
              <img
                class="img-button"
                src="../assets/graphics/close.svg"
                alt="close"
              />
            </div>

          <ul class="show-overlay-nav">
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
  methods: {
    closeMenu () {
      this.$emit('closeMenu')
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
  }
}
</script>

<style>
.close-button {
  position: relative;
  height: 50px;
  width: 50px;
  display: block;
  z-index: 999;
  border: 0;
  border-radius: 0;
  background-color: #ffffff;
  pointer-events: all;
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
  z-index: 999;
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
}
</style>
