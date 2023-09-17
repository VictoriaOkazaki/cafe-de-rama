<template>
    <div class="hero">
        <Header class="header" />
        <Home class="home" />
        <HomeBottom />
    </div>
    <About />
    <Menu />
    <Action />
    <Review />
    <Shop />
    <Gallery />
    <Blog />
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
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
        height: calc(100vh + 40px);
    }
}

@media (max-width: 500px) {
    .hero {
        padding-bottom: 30px;
        height: calc(100vh + 30px);
    }
}
</style>