<template>
    <BurgerWindow />
    <section class="filial">
        <Header class="header" />
        <div class="container section">
            <LangSwitch class="pages-langs-switch" />
            <div class="filial__inner">
                <h2 class="contact__title title">{{ $t('filialIcheri.name') }}</h2>
                <div class="contact__info">
                    <div class="contact__content">
                        <a href="https://maps.app.goo.gl/tpiU6UdmdE7pLZ9t6" target="_blank" class="contact__adress text">{{
                            $t('filialIcheri.adress')
                        }}</a>
                        <span class="contact__time text">{{ $t('filialIcheri.time') }}</span>
                        <WhatsappLink />
                        <div class="contact__mail">
                            <img loading="lazy" src="../../../assets/images/mail.svg" alt="mail"
                                class="social-logo contact__mail-img">
                            <a href="mailto:de.rama.cafe.baku@outlook.com"
                                class="contact__mail-link">de.rama.cafe.baku@outlook.com</a>
                        </div>
                    </div>
                    <div class="contact__map">
                        <iframe class="contact__map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5806121419123!2d49.810907463931315!3d40.37382268002771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dea0099f61f%3A0xc9afe605b1fc4392!2z0J3QsNGG0LjQvtC90LDQu9GM0L3QsNGPINCw0LrQsNC00LXQvNC40Y8g0L3QsNGD0Log0JDQt9C10YDQsdCw0LnQtNC20LDQvdCw!5e0!3m2!1sru!2saz!4v1724938080411!5m2!1sru!2saz" 
                        width="951" height="573" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div class="contact__map-bg"></div>
                    </div>
                </div>
                <div class="gallery">
                <div class="gallery__list gallery__list-2">
                    <img loading="lazy" :src="'../images/galleryelmler/1.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-2">
                    <img loading="lazy" :src="'../images/galleryelmler/2.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-2">
                    <img loading="lazy" :src="'../images/galleryelmler/3.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-2">
                    <img loading="lazy" :src="'../images/galleryelmler/4.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-2">
                    <img loading="lazy" :src="'../images/galleryelmler/5.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-2">
                    <img loading="lazy" :src="'../images/galleryelmler/6.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-2">
                </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
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