<template>
    <BurgerWindow />
    <section class="filial">
        <Header class="header" />
        <div class="container section">
            <LangSwitch class="pages-langs-switch" />
            <div class="filial__inner">
                <h2 class="contact__title title">{{ $t('filialIcheri.name') }}</h2>
                <h3>{{ $t('temporary') }}</h3>
                <SocialLinks />
                <img src="../../../public/images/cow.png" alt="">
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
img {
    max-height: 500px;
}
.filial__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.contact {
    background-color: $bg-2;

    &__info {
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
    }

    &__title {
        color: $text-1;
        margin-top: 40px;
    }

    &__content {
        width: 30%;
        display: flex;
        flex-direction: column;
    }

    &__adress {
        color: $acsent-2;
        margin-bottom: 30px;
        padding-bottom: 1px;
        border-bottom: 1px $acsent-1 solid;
        width: fit-content;
        cursor: pointer;
    }

    &__adress-desc {
        color: $text-1;
        margin-bottom: 60px;
    }

    &__time {
        color: $text-1;
        margin-bottom: 60px;
    }

    &__mail {
        display: flex;
        margin: 60px 0;
        align-items: center;
    }

    &__mail a {
        color: $text-2;
        margin-left: 20px;
        transition: color .5s ease-in;

        &:hover {
            color: $acsent-1;
        }
    }

    &__parking {
        color: $text-2;
    }

    &__map {
        position: relative;
        border-radius: 60px 60px 0px 60px;
    }

    &__map-frame {
        border-radius: 60px 60px 0px 60px;
    }

    &__map-bg {
        pointer-events: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-image: linear-gradient(0deg, rgba(248, 223, 184, 0.20) 0%, rgba(248, 223, 184, 0.20) 100%);
    }
}

@media (max-width: 1600px) {
    .contact {
        &__mail a {
            margin-left: 16px;
        }

        &__content {
            width: 42%;
        }

        &__map-frame {
            width: 710px;
            height: 428px;
        }
    }
}

@media (max-width: 1300px) {
    .contact {
        &__info {
            flex-direction: column;
            margin-top: 40px;
        }

        &__content {
            width: 100%;
            order: 2;
            margin-top: 40px;
        }

        &__adress-desc {
            margin-bottom: 40px;
        }

        &__time {
            margin-bottom: 30px;
        }

        &__mail {
            margin: 40px 0;
        }

        &__map {
            order: 1;
        }

        &__map-frame {
            width: 100%;
            height: 505px;
        }
    }
}

@media (max-width: 800px) {
    .contact {

        &__adress-desc {
            margin-bottom: 20px;
        }

        &__time {
            margin-bottom: 20px;
        }

        &__mail {
            margin: 20px 0;
        }

        &__mail a {
            margin-left: 12px;
        }

        &__map-frame {
            height: 391px;
        }
    }
}

@media (max-width: 600px) {
    .contact {
        &__info {
            margin-top: 30px;
        }

        &__adress {
            margin-bottom: 24px;
        }

        &__mail a {
            margin-left: 0;
        }

        &__map-frame {
            height: 372px;
        }
    }
}
.gallery {
    margin-top: 40px;


    &__list {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
&__list-1 {
    margin-top: 40px;
}
    &__list-2 {
        flex-wrap: wrap;
    }

    &__img {
        border-radius: 60px;
        object-fit: cover;
    }

    &__img-1 {
        width: 716px;
        height: 402px;
        border-radius: 60px 60px 0px 60px;
    }

    &__img-2 {
        width: calc(100%/ 3 - 20px);
        height: auto;
        margin-top: 60px;
    }
&__img-3 {
    background-image: url('/images/galleryelmler/9.webp');
}
&__img-4 {
    background-image: url('/images/galleryelmler/16.webp');
}
    &__img-3,
    &__img-4 {
        width: 100%;
        height: 500px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 60px;
    }
}

@media (max-width: 1700px) {
    .gallery {

        &__img-1 {
            width: 565px;
            height: auto;
            border-radius: 60px 60px 0px 60px;
        }

        &__img-3,
        &__img-4 {
            height: 400px;
            margin-top: 40px;
        }
    }
}

@media (max-width: 1300px) {
    .gallery {

        &__img {
            border-radius: 40px;
        }

        &__list-1 {
            flex-direction: column;
        }

        &__img-1 {
            width: 100%;
            border-radius: 40px 40px 0px 40px;
            margin-bottom: 40px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        &__img-2 {
            width: calc(100% / 2 - 20px);
            margin-top: 40px;
        }

        &__img-3,
        &__img-4 {
            height: 400px;
        }
    }
}

@media (max-width: 800px) {
    .gallery {

        &__img-3,
        &__img-4 {
            height: 300px;
            border-radius: 40px;
            background-attachment: initial;
        }
    }
}

@media (max-width: 700px) {
    .gallery {

        &__img-2 {
            width: 100%;
            margin-top: 30px;
            border-radius: 20%;
        }

        &__img-3,
        &__img-4 {
            height: 200px;
            border-radius: 20px;
        }
    }
}
</style>