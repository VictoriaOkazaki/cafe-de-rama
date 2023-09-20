<template>
    <div class="hero">
        <Header class="header" />
        <Home class="home" />
        <HomeBottom class="home-bottom" />
    </div>
    <About />
    <Menu />
    <Action />
    <Review />
    <Shop />
    <Gallery />
    <Blog />
    <Contact />
</template>

<script setup lang="ts">
definePageMeta({
    title: 'De Rama Vegetarian & Vegan Cafe',
    description: 'The first vegatarian & vegan cafe in Baku with a wide range of dishes from all over the world, excellent service and cool atmosphere.'
})
</script>

<style scoped lang="scss">
.home-bottom {
    animation: appearFromBottom 1.5s ease-out 1s;
    animation-fill-mode: both;
}

.hero {
    height: calc(100vh + 60px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $bg-1;
    padding-bottom: 60px;
}

.header,
.home {
    width: 100%;
}

@media (max-width: 1300px) {
    .hero {
        height: auto;
    }
}

@media (max-width: 800px) {
    .hero {
        padding-bottom: 40px;
        // height: calc(100vh + 40px);
    }
}

@media (max-width: 500px) {
    .hero {
        padding-bottom: 30px;
        // height: calc(100vh + 30px);
    }
}
</style>