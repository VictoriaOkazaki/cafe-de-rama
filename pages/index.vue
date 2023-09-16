<template>
    <!-- <h1>{{ $t('hello') }}</h1>
        <form>
            <label for="locale-select">{{ $t('language') }}: </label>
            <select id="locale-select" v-model="$i18n.locale">
                <option value="ru">ru</option>
                <option value="en">en</option>
                <option value="az">az</option>
            </select>
        </form> -->
    <div class="hero">
        <Header class="header" />
        <Home class="home" />
        <HomeBottom />
    </div>
    <About />
    <Menu />
    <Action />
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.hero {
    height: 100vh;
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
    }
}

@media (max-width: 500px) {
    .hero {
        padding-bottom: 30px;
    }
}
</style>