<template>
    <ul class="lang-switch">
        <li class="lang-switch__item helper-text" :class="{ 'active': locale === 'az' }" @click="changeLang('az')">
            <a @click.prevent href="?lang=az">AZ</a>
        </li>
        <li class="lang-switch__item helper-text" :class="{ 'active': locale === 'ru' }" @click="changeLang('ru')">
            <a @click.prevent href="?lang=ru">RU</a>
        </li>
        <li class="lang-switch__item helper-text" :class="{ 'active': locale === 'en' }" @click="changeLang('en')">
            <a @click.prevent href="?lang=en">EN</a>
        </li>
    </ul>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const changeLang = (value) => {
    locale.value = value
}
</script>

<style lang="scss" scoped>
a {
    color: inherit;
}

.active {
    background-color: $acsent-1 !important;
}

.lang-switch {
    display: flex;
    z-index: 10;
    background-color: $bg-2;
    overflow: hidden;
    border-radius: 20px;
    width: fit-content;

    &__item {
        padding: 10px 16px;
        color: $text-2;
        cursor: pointer;
    }
}

@media (max-width: 1600px) {
    .lang-switch {
        &__item {
            padding: 8px 12px;
        }
    }
}

@media (max-width: 500px) {
    .lang-switch {
        &__item {
            padding: 6px 8px;
        }
    }
}
</style>