<template>
    <div class="home__bottom container">
        <ul class="home__bottom-info">
            <li class="home__bottom-item helper-text">{{ $t('adress') }}</li>
            <li class="home__bottom-item helper-text">{{ $t('time') }}</li>
        </ul>
        <LangSwitch class="home__lang-switch" />
        <SocialLinks class="home__bottom-social" />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home {
    &__bottom {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    &__bottom-item {
        color: $text-2;

        &:first-child {
            margin-bottom: 10px;
        }
    }
}

@media (max-width: 1300px) {
    .home__bottom {
        display: none;
    }

    .home__lang-switch {
        display: none;
    }
}

@media (max-width: 600px) {
    .home__bottom {
        flex-direction: column;
        align-items: flex-start;

        &-info {
            order: 2;
        }

        &-social {
            order: 1;
        }

        &-item {
            &:first-child {
                margin-top: 20px;
            }
        }
    }
}
</style>