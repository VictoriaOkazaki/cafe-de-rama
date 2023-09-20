<template>
    <section class="about" id="about">
        <div class="container section">
            <div class="about__inner">
                <div class="about__top" ref="aboutTop">
                    <h2 class="about__top-title title ">{{ $t('about.title') }}</h2>
                    <p class="about__text text" id="text1">{{ $t('about.text-top-1') }}</p>
                    <p class="about__text text" id="text2">{{ $t('about.text-top-2') }}</p>
                </div>
                <div class="about__bottom">
                    <div class="about__bottom-content" ref="aboutBottomContent">
                        <h3 class="about__bottom-subtitle subtitle">{{ $t('about.subtitle') }}</h3>
                        <p class="about__text text" id="text3">{{ $t('about.text-b-1') }}</p>
                        <p class="about__text text" id="text4">{{ $t('about.text-b-2') }}</p>
                        <div class="about__bottom-text text" id="text5">
                            <p class="about__bottom-text-2">{{ $t('about.text-b-3-1') }}</p><br>
                            <p class="about__bottom-text-2">{{ $t('about.text-b-3-2') }}</p>
                            <a id="link1" target="_blank" href="https://1plus1tv.ru/19537-sita-i-rama-siya-ke-ram-vse-serii-2015-smotret-onlayn-in
                                diyskiy-serial-na-russkom-yazyke.html">https:
                                //1plus1tv.ru/19537-sita-i-rama-siya-ke-ram-vse-serii-2015-smotret-onlayn-in
                                diyskiy-serial-na-russkom-yazyke.html</a>
                            <p class="about__bottom-text-2">{{ $t('about.text-b-3-3') }}</p>
                            <a id="link2" target="_blank"
                                href="https://1plus1tv.ru/17888-mahabharata-mahabharat-vse-serii-2013-smotret-onlayn-indiyskiy-serial-na-russkom-yazyke.html">https:
                                //1plus1tv.ru/17888-mahabharata-mahabharat-vse-serii-2013-smotret-onlayn-indiyskiy-serial-na-russkom-yazyke.html</a>
                        </div>
                    </div>
                    <div class="" ref="aboutBottomImg">
                        <img src="../assets/images/about.webp" alt="Rama king" class="about__img">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const aboutTop = ref()
const aboutBottomContent = ref()
const aboutBottomImg = ref()

useIntersection(aboutTop, (entry) => {
    entry.target.style.animation = "appearFromLeft 2s ease-in"
    entry.target.style.animationFillMode = "both"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})

useIntersection(aboutBottomContent, (entry) => {
    entry.target.style.animation = "appearFromLeft 1.5s ease-in 1s"
    entry.target.style.animationFillMode = "both"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})

useIntersection(aboutBottomImg, (entry) => {
    entry.target.style.animation = "appearFromRight 1.5s ease-in 1s"
    entry.target.style.animationFillMode = "both"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})
</script>

<style lang="scss" scoped>
#text1,
#text3,
#link1,
#text4 {
    margin-bottom: 20px;
}

#link1,
#link2 {
    color: $text-2;
    text-decoration: underline;
    display: inline-block;
}

.about {
    background-color: $bg-2;

    &__top {
        width: calc(100% - 602px - 20px);
    }

    &__top-title {
        color: $text-1;
        margin-bottom: 60px;
    }

    &__text {
        color: $text-1;
    }

    &__bottom {
        display: flex;
        align-items: center;
    }

    &__bottom-content {
        width: calc(100% - 602px - 20px);
    }

    &__bottom-subtitle {
        color: $acsent-2;
        margin-top: 60px;
        margin-bottom: 40px;
    }

    &__bottom-text-2 {
        color: $text-1;
    }

    &__img {
        width: 602px;
        height: 800px;
        border-radius: 40px;
        margin-left: 20px;
    }
}

@media (max-width: 1600px) {

    .about {

        &__top {
            width: calc(100% - 376px - 20px);
        }

        &__bottom-content {
            width: calc(100% - 376px - 20px);
        }

        &__img {
            width: 476px;
            height: auto;
        }
    }
}

@media (max-width: 1300px) {
    #text5 {
        width: 100%;
    }

    .about {

        &__top {
            width: calc(100% - 393px - 20px);
        }

        &__top-title {
            margin-bottom: 40px;
        }

        &__bottom-content {
            width: calc(100% - 393px - 20px);
        }

        &__img {
            width: 393px;
        }
    }
}

@media (max-width: 1100px) {
    #text5 {
        width: 150%;
    }

    .about {
        &__top {
            width: 100%;
        }

        &__bottom-content {
            width: calc(100% - 293px - 20px);
        }

        &__img {
            width: 293px;
        }
    }
}

@media (max-width: 800px) {
    #text5 {
        width: 100%;
    }

    .about {

        &__top-title {
            margin-bottom: 30px;
        }

        &__bottom {
            flex-direction: column;
        }

        &__bottom-content {
            width: 100%;
        }

        &__bottom-subtitle {
            margin-top: 30px;
            margin-bottom: 30px;
        }

        &__img {
            width: 100%;
            margin-left: 0;
            margin-top: 30px;
        }
    }
}

@media (max-width: 600px) {}
</style>