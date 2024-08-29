<template>
    <section class="contact" id="contact">
        <div class="container section">
            <div class="contact__inner">
                <h2 class="contact__title title">{{ $t('contact.title') }}</h2>
                <div class="contact__info">
                    <div class="contact__content">
                        <span class="contact__adress-desc text">{{
                            $t('filials') }}</span>
                        <div class="contact__filials contact__filials">
                            <NuxtLink to="/filials/28may" class="contact__filial-btn btn-2 subtitle">{{ $t('filial28.name') }}</NuxtLink>
                            <NuxtLink to="/filials/elmler" class="contact__filial-btn btn-2 subtitle">{{ $t('filialElmler.name') }}</NuxtLink>
                        </div>
                        <div class="contact__filials">
                            <NuxtLink to="/filials/seabreeze" class="contact__filial-btn btn-2 subtitle">{{ $t('filialSeaBreeze.name') }}</NuxtLink>
                            <NuxtLink to="/filials/icherisheher" class="contact__filial-btn btn-2 subtitle">{{ $t('filialIcheri.name') }}</NuxtLink>
                        </div>
                        <WhatsappLink />
                        <div class="contact__mail">
                            <img loading="lazy" src="../assets/images/mail.svg" alt="mail"
                                class="social-logo contact__mail-img">
                            <a href="mailto:de.rama.cafe.baku@outlook.com"
                                class="contact__mail-link">de.rama.cafe.baku@outlook.com</a>
                        </div>
                    </div>
                    <div class="contact__map">
                        <img class="contact__map-img" src="images/collage.png" alt="">
                        <div class="contact__map-bg"></div>
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
    }

    &__content {
        width: 30%;
        display: flex;
        flex-direction: column;
    }
    &__filials {
        margin-bottom: 40px;
        display: flex;
    }
    &__filial-btn {
        background: none;
        border-color: $acsent-1;
        margin-right: 20px;
        &:hover {
            background-color: $acsent-1;
            color: $bg-2;
        }
    }

    &__adress-desc {
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

    &__map {
        position: relative;
        border-radius: 60px 60px 0px 60px;
        width: 951px;
        height: 573px;
    }
    &__map img {
        border-radius: inherit;
        height: inherit;
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

        &__map {
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

        &__mail {
            margin: 40px 0;
        }

        &__map {
            order: 1;
            width: 100%;
            height: auto;
        }
    }
}

@media (max-width: 800px) {
    .contact {

        &__mail {
            margin: 20px 0;
        }

        &__mail a {
            margin-left: 12px;
        }
        &__adress-desc {
            margin-bottom: 20px;
        }
    }
}

@media (max-width: 600px) {
    .contact {
        &__info {
            margin-top: 30px;
        }

        &__mail a {
            margin-left: 0;
        }
        &__filial-btn {
            font-size: 16px;
            padding: 12px 24px;
        }
    }
}
@media (max-width: 450px) {
    .contact {
        &__info {
            margin-top: 30px;
        }

        &__mail a {
            margin-left: 0;
        }
        &__filial-btn {
            font-size: 14px;
            margin-right: 10px;
        }
    }
}
</style>