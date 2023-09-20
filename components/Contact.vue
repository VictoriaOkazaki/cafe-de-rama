<template>
    <section class="contact" id="contact">
        <div class="container section">
            <div class="contact__inner">
                <h2 class="contact__title title">{{ $t('contact.title') }}</h2>
                <div class="contact__info">
                    <div class="contact__content">
                        <a href="https://maps.app.goo.gl/jXcKT4E8pK9ptgkA9" target="_blank" class="contact__adress text">{{
                            $t('adress')
                        }}</a>
                        <span class="contact__adress-desc text">{{
                            $t('contact.place') }}</span>
                        <span class="contact__time text">{{ $t('time') }}</span>
                        <WhatsappLink />
                        <div class="contact__mail">
                            <img loading="lazy" src="../assets/images/mail.svg" alt="mail"
                                class="social-logo contact__mail-img">
                            <a href="mailto:de.rama.cafe.baku@outlook.com"
                                class="contact__mail-link">de.rama.cafe.baku@outlook.com</a>
                        </div>
                        <span class="contact__parking helper-text">{{ $t('contact.parking') }}</span>
                    </div>
                    <div class="contact__map">
                        <iframe class="contact__map-frame" title="map"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5074.8830744733!2d49.854534775949496!3d40.377607652019826!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307ddaa1562825%3A0xb49f05f8bbae77d9!2sDeRama%20Cafe%20Baku!5e0!3m2!1sru!2saz!4v1695036120843!5m2!1sru!2saz"
                            width="951" height="573" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
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
            margin-left: 8px;
        }

        &__map-frame {
            height: 372px;
        }
    }
}
</style>