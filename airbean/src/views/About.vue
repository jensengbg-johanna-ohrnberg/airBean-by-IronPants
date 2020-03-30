<template>
  <article id="about">
    <nav class="main-nav">
      <MenuButton />
    </nav>

    <OverlayMenu class="overlay-menu" />

    <section>
      <h1 class="title">Vårt kaffe</h1>

      <p id="bold" class="paragraph">
        Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
        grounds dripper, crema, strong whipped, variety extra iced id lungo half
        and half mazagran. Pumpkin spice.
      </p>

      <p class="paragraph">
        Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich
        aftertaste, con panna milk black, arabica white rich beans single shot
        extra affogato. So affogato macchiato sit extraction instant grinder
        seasonal organic, turkish single shot, single origin, and robusta strong
        to go so dripper. Viennese froth, grounds caramelization skinny aromatic
        cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait
        flavour cultivar ut bar instant kopi-luwak.
        <br /><br />
        Roast id macchiato, single shot siphon mazagran milk fair trade est
        aroma a half and half and, so, galão iced to go, whipped as cream cup
        pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half
        and half at, that, percolator macchiato trifecta and body as arabica
        dripper. In galão black java milk sit trifecta, robusta, acerbic café au
        lait instant shop latte. Seasonal bar shop filter aroma id, crema,
        affogato viennese cultivar aftertaste, seasonal, percolator cream black,
        galão flavour, milk aromatic turkish skinny crema.
      </p>
    </section>

    <img
      class="eva-img"
      src="../assets/graphics/eva-cortado.jpg"
      alt="eva-cortado"
    />
    <h2 class="eva-name">Eva Cortado</h2>
    <h6 class="eva-info">VD & Grundare</h6>
  </article>
</template>

<script>
import MenuButton from '../components/MenuButton'
import OverlayMenu from '../components/OverlayMenu'

export default {
  name: 'About',
  components: {
    MenuButton,
    OverlayMenu
  },
  computed: {
    showMenu () {
      return this.$store.state.isNavOpen
    }
  }
}
</script>

<style scoped>
.overlay-menu {
  position: absolute;
}

#about {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: #f3e4e1;
  background-image: url('../assets/graphics/graphics-header.svg'),
    url('../assets/graphics/graphics-footer.svg');
  background-position: top, bottom;
  background-repeat: no-repeat, no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0rem 2rem;
}

.title {
  font-size: 42px;
  font-weight: bold;
  font-family: 'PT Serif';
  color: #2f2926;
  margin-top: 4rem;
}

.paragraph {
  font-size: 14px;
  font-family: 'Work Sans';
  color: #2f2926;
  margin: 2rem 0rem;
}

#bold {
  font-weight: bold;
}

.eva-img {
  border-radius: 50px;
  margin-top: 3rem;
}

.eva-name {
  color: #2f2926;
  font-size: 22px;
  font-weight: bold;
  font-family: 'PT Serif';
}

.eva-info {
  color: #2f2926;
  font-family: 'Work Sans';
  font-size: 10px;
  font-weight: lighter;
  margin-bottom: 6rem;
}
</style>
