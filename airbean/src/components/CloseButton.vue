<template>
    <article class="menu">
        <section class="menu-button">
            <img class="menu-img" src="../assets/graphics/close.svg" alt="CloseButton">
        </section>
    </article>
</template>

<script>
export default {
  name: 'CloseButton'
}
</script>

<style scoped>
    .menu-button {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-color: white;
        margin-top: 3.5%;
        margin-left: 3%;
    }

    .menu-img {
        margin-top: 15px;
        margin-left: 11.25px;
    }

    .menu {
        cursor: pointer;
    }
</style>
