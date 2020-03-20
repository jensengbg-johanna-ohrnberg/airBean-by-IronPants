<template>
    <article id='about'>
        <MenuButton />
        <section>
            <h1 class="title">Vårt kaffe</h1>
            <p id="bold" class="paragraph">
                Pumpkin spice mug,
                barista cup, sit macchiato,
                kopi-luwak, doppio,
                grounds dripper, crema,
                strong whipped,
                variety extra iced id lungo half and half mazagran.
                Pumpkin spice.
            </p>
            <p class="paragraph">
                Que dark fair trade,
                spoon decaffeinated,
                barista wings whipped,
                as rich aftertaste,
                con panna milk black,
                arabica white rich beans single shot extra affogato.
                So affogato macchiato sit extraction instant grinder seasonal organic,
                turkish single shot,
                single origin,
                and robusta strong to go so dripper.
                Viennese froth,
                grounds caramelization skinny aromatic cup kopi-luwak,
                fair trade flavour,
                frappuccino medium,
                café au lait flavour cultivar ut bar instant kopi-luwak.
                <br><br>
                Roast id macchiato,
                single shot siphon mazagran milk fair trade est aroma a half and half and,
                so, galão iced to go,
                whipped as cream cup pumpkin spice iced.
                At extra, rich grinder, brewed to go,
                steamed half and half at, that,
                percolator macchiato trifecta and body as arabica dripper.
                In galão black java milk sit trifecta, robusta,
                acerbic café au lait instant shop latte.
                Seasonal bar shop filter aroma id,
                crema, affogato viennese cultivar aftertaste,
                seasonal, percolator cream black, galão flavour,
                milk aromatic turkish skinny crema.
            </p>
        </section>
        <section>
            <img class="eva-img" src="../assets/graphics/eva-cortado.jpg" alt="eva-cortado">
            <h2 class="name">Eva Cortado</h2>
            <h6 class="eva-info">VD & Grundare</h6>
        </section>
    </article>
</template>

<script>
import MenuButton from '../components/MenuButton'

export default {
  name: 'About',
  components: {
    MenuButton
  }
}
</script>

<style scoped>
    #about {
       border: 1px solid black;
       width: 375px;
       height: 667px;
       margin: auto;
       background: #F3E4E1;
   }

   .title {
       font-size: 42px;
   }

   .paragraph {
       font-size: 14px;
       width: 311px;
       height: 60px;
   }

   #bold {
       font-weight: bold;
   }

   .eva-img {
       border-radius: 50px;
       margin-top: 270px;
       margin-left: 40%;
   }

   .name {
       margin-left: 35%;
   }

   .eva-info {
       margin-left: 43%;
   }
</style>
