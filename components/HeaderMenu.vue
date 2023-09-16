<template>
    <nav class="menu" :class="{ 'menu-active': isBurgerOpen }">
        <AppLink class="menu__item helper-text" v-for="link in links" :link="link">
            {{
                title }}</AppLink>
    </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { isBurgerOpen } = useBurger()

const { t } = useI18n()

const route = useRoute()
let links = [
    {
        title: t('menu.1'),
        href: '#about'
    },
    {
        title: t('menu.2'),
        href: '#menu'
    },
    {
        title: t('menu.3'),
        href: '#action'
    },
    {
        title: t('menu.4'),
        href: '#review'
    },
    {
        title: t('menu.5'),
        href: '#shop'
    },
    {
        title: t('menu.6'),
        href: '#gallery'
    },
    {
        title: t('menu.7'),
        href: '#blog'
    },
    {
        title: t('menu.8'),
        href: '#contact'
    }
];
</script>

<style lang="scss" scoped>
.menu {
    &__item {
        margin-right: 60px;

        &:last-child {
            margin-right: 0;
        }
    }
}

@media (max-width: 1600px) {
    .menu {
        &__item {
            margin-right: 30px;
        }
    }
}

@media (max-width: 1300px) {
    .menu {
        display: none;
        position: absolute;
        left: 0;
        top: 100px;

        &__item {
            font-size: 32px;
            padding: 10px 0;
            width: 100%;

            &:hover {
                background-color: $acsent-1;
                color: $text-2;
            }
        }
    }

    .menu-active {
        display: flex;
        flex-direction: column;
        animation: 2s alternate slidein;
        z-index: 10;
        position: absolute;
        top: calc(120px + 20px + 40px);
        padding: 0 80px;
        width: 100%;
    }
}

@media (max-width: 800px) {

    .menu-active {
        top: calc(80px + 20px + 40px);
        padding: 0 60px;
    }
}

@media (max-width: 600px) {
    .menu-active {
        top: calc(60px + 20px + 40px);
        padding: 0 40px;
    }

    .menu {

        &__item {
            font-size: 20px;
        }
    }

    .menu-active {
        top: calc(60px + 20px + 40px + 30px + 20px);
    }
}
</style>