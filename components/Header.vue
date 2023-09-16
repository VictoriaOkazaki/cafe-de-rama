<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <NuxtLink to="/" class="logo-link">
                    <img src="../assets/images/logo.svg" alt="logo" class="logo">
                </NuxtLink>
                <HeaderMenu />
                <WhatsappLink class="header__wp-link" />
                <Burger />
                <LangSwitch class="header__lang-switch" />
            </div>
        </div>
    </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header__lang-switch {
    display: none;
}

.header__wp-link {
    margin: 0 20px;
}

.header {
    padding-top: 20px;

    &__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
}

@media (max-width: 1300px) {
    .header__lang-switch {
        display: flex;
    }
}

@media (max-width: 600px) {
    .header__lang-switch {
        position: absolute;
        left: 40px;
        top: calc(60px + 20px + 10px);
    }
}
</style>