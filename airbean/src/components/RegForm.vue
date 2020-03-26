<template>
  <section class="formContent" action="#">
    <img src="../assets/graphics/logo.svg" alt="" />
    <h1>Välkommen till AirBean-familjen!</h1>
    <p>
      Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
    </p>
    <form>
      <label for="name"><p>Namn</p></label>
      <input type="text" placeholder="Your full name here" v-model="userName" />
      <label for="name"><p>Epost</p></label>
      <input
        type="email"
        placeholder="Your email address here"
        v-model="userEmail"
      />
      <article>
        <input type="checkbox" />
        <p>GDPR Ok!</p>
      </article>
    </form>
    <button class="btn" @click="createProfile">Brew me a cup!</button>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      userName: '',
      userEmail: ''
    }
  },
  methods: {
    createProfile: function() {
      this.$emit('clicked', this.userName, this.userEmail)
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin flex {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.formContent {
  width: 92vw;
  height: 88vh;
  background: #f3e4e1;
  @include flex;
  box-shadow: 10px 10px 25px 26px #0009;
  text-align: center;
  padding: 1rem;

  h1 {
    margin-top: 0.6rem;
    font-size: 2rem;
  }

  img {
    background: #ccc;
    padding: 0.3rem;
    border-radius: 50%;
  }

  form {
    width: 100%;
    @include flex;
    align-items: flex-start;

    input[type='text'],
    input[type='email'] {
      background: transparent;
      padding: 0.8rem 1.2rem;
      border: none;
      border: 1.5px solid #444;
      border-radius: 0.6rem;
      width: 100%;
      font-family: 'Work Sans', sans-serif;
      font-size: 1rem;
      outline: none;
    }

    label {
      margin-top: 1rem;
      p {
        font-size: 0.75rem;
      }
    }

    article {
      width: 100%;
      @include flex;
      flex-direction: row;
      justify-content: flex-start;
      margin: 1rem 0rem;

      p {
        margin-left: 1.2rem;
        font-size: 0.8rem;
      }

      input[type='checkbox'] {
        width: 0rem;
        margin-right: 0.8rem;
        position: relative;

        &:checked::before {
          background: #0e927d;
        }

        &::after {
          content: '';
          position: absolute;
          top: -2px;
          left: 0;
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          border: 1.5px solid #444;
          background: transparent;
          cursor: pointer;
          padding: 0.1rem;
        }

        &::before {
          width: 0.8rem;
          height: 0.8rem;
          content: '';
          position: absolute;
          top: 0.06rem;
          left: 3px;
          border-radius: 50%;
        }

        &:hover::before {
          background: #0e927d;
        }
      }
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.6rem;
    margin-top: 0.3rem;
  }
}
</style>
