<template>
    <BurgerWindow />
    <section class="home" id="home">
        <div class="container">
            <div class="home__inner">
                <div class="home__content">
                    <h1 class="home__title h1">{{ $t('home.title-1') }} <br> {{ $t('home.title-2') }}</h1>
                    <blockquote class="home__subtitle subtitle">{{ $t('home.subtitle') }}</blockquote>
                    <p class="home__text subtitle">{{ $t('home.text') }}</p>
                    <div class="home__btns">
                        <a :href="`https://wa.me/+994777108108?text=${$t('reserve-message')}`" target="_blank"
                            class="home__btn home__btn-1 btn-1 subtitle">{{
                                $t('home.btn-1')
                            }}</a>
                        <a href="#menu" class="home__btn btn-2 subtitle">{{ $t('home.btn-2') }}</a>
                    </div>
                </div>
                <div class="home__img-cont">
                    <img :src="'images/home.webp'" alt="de rama cafe" class="home__img">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home {
    background-color: $bg-1;

    &__inner {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__content {
        display: flex;
        flex-direction: column;
        width: calc(100% - 703px - 60px);
        margin-right: 60px;
        animation: appearFromLeft 1.5s ease-in;
    }

    &__title {
        color: $text-1;
    }

    &__subtitle {
        margin-top: 20px;
        margin-bottom: 40px;
        color: $acsent-2;
        width: 70%;
    }

    &__text {
        color: $text-1;
    }

    &__btns {
        display: flex;
        margin-top: 40px;
        animation: appearFromBottom 1.5s ease-in 2s;
        animation-fill-mode: both;
    }

    &__btn-1 {
        margin-right: 30px;
    }

    &__img-cont {
        width: 703px;
        height: 440px;
        border-radius: 60px;
        animation: appearFromRightAndScale 1.5s ease-in;
        overflow: hidden;
    }

    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

@media (max-width: 1600px) {
    .home {

        &__content {
            width: calc(100% - 582px);
            margin-right: 40px;
        }

        &__subtitle {
            margin-top: 20px;
            margin-bottom: 30px;
            width: 85%;
        }

        &__btns {
            margin-top: 30px;
        }

        &__btn-1 {
            margin-right: 24px;
        }

        &__img-cont {
            width: 582px;
            height: 360px;
        }
    }
}

@media (max-width: 1300px) {
    .home__lang-switch {
        display: none;
    }

    .home {
        &__inner {
            flex-direction: column;
            align-items: flex-start;
        }

        &__content {
            width: 100%;
            margin-right: 0;
        }

        &__subtitle {
            margin-bottom: 40px;
        }

        &__btns {
            margin-top: 40px;
        }

        &__img-cont {
            width: 634px;
            height: 396px;
            margin-top: 80px;
        }
    }
}

@media (max-width: 800px) {
    .home {

        &__img-cont {
            width: 100%;
            height: auto;
            margin-top: 60px;
        }

        &__btn-1 {
            margin-right: 16px;
        }
    }
}

@media (max-width: 600px) {
    .home {
        &__title {
            margin-top: 60px;
        }

        &__btns {
            flex-direction: column;
            margin-top: 16px;
        }

        &__btn {
            width: fit-content;
        }

        &__btn-1 {
            margin-right: 0;
            margin-bottom: 16px;
        }

        &__subtitle {
            margin-top: 12px;
            margin-bottom: 16px;
        }

        &__img-cont {
            margin-top: 30px;
        }
    }
}
</style>