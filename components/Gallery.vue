<template>
    <section class="gallery" id="gallery">
        <div class="container section">
            <div class="gallery__inner">
                <h2 class="gallery__title title">{{ $t('gallery') }}</h2>
                <div class="gallery__videos">
                    <Video v-for="video in videos" :src="video.src" :poster="video.poster" />
                </div>
                <div class="gallery__list gallery__list-1">
                    <img loading="lazy" :src="'images/gallery/1.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-1">
                    <img loading="lazy" :src="'images/gallery/2.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-1">
                </div>
                <div class="gallery__list gallery__list-2">
                    <img loading="lazy" :src="'images/gallery/3.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-2">
                    <img loading="lazy" :src="'images/gallery/4.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-2">
                    <img loading="lazy" :src="'images/gallery/5.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-2">
                    <img loading="lazy" :src="'images/gallery/6.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-2">
                    <img loading="lazy" :src="'images/gallery/7.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-2">
                    <img loading="lazy" :src="'images/gallery/8.webp'" alt="de rama cafe"
                        class="gallery__img gallery__img-2">
                </div>
                <div class="gallery__img gallery__img-3"></div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const videos = [
    {
        "src": "https://api-test-vision.cubicservice.ru/storage/temp/20221027_1041_5832.mp4",
        "poster": "images/gallery/p-1.webp"
    },
    {
        "src": "",
        "poster": "images/gallery/p-2.webp"
    },
    {
        "src": "",
        "poster": "images/gallery/p-3.webp"
    }
]
</script>

<style lang="scss" scoped>
.gallery__video[poster] {
    object-fit: cover;
}

.gallery {
    background-color: $bg-2;

    &__title {
        color: $text-1;
    }

    &__videos {
        margin-top: 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }


    &__list {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__list-2 {
        flex-wrap: wrap;
    }

    &__img {
        border-radius: 60px;
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
        background-image: url('/de rama cafeimages/gallery/9.webp');
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
        &__videos {
            margin-top: 40px;
        }

        &__img-1 {
            width: 565px;
            height: auto;
            border-radius: 60px 60px 0px 60px;
        }

        &__img-3 {
            height: 400px;
            margin-top: 40px;
        }
    }
}

@media (max-width: 1300px) {
    .gallery {
        &__videos {
            flex-direction: column;
        }

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

        &__img-3 {
            height: 400px;
        }
    }
}

@media (max-width: 800px) {
    .gallery {

        &__img-3 {
            height: 300px;
            border-radius: 40px;
            background-attachment: initial;
        }
    }
}

@media (max-width: 700px) {
    .gallery {
        &__videos {
            margin-top: 30px;
        }

        &__img-2 {
            width: calc(100% / 2 - 10px);
            margin-top: 30px;
            border-radius: 20%;
        }

        &__img-3 {
            height: 200px;
            border-radius: 20px;
        }
    }
}</style>