<template>
    <section class="gallery" id="gallery">
        <div class="container section">
            <div class="gallery__inner">
                <div class="gallery__videos">
                    <Video v-for="video in videos" :src="video.src" :poster="video.poster" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const videos = [
    {
        "src": "https://www.youtube.com/embed/lHdLRrUocOA?si=yEPW4sxoZQhD-abK",
        "poster": ""
    },
    {
        "src": "https://www.youtube.com/embed/c1DcFmUrxUQ?si=n6QxPGR-wla3dH5E",
        "poster": ""
    }
]
</script>

<style lang="scss" scoped>
.gallery__video[poster] {
    object-fit: cover;
}

.gallery {

    &__videos {
        margin-top: 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }


}

@media (max-width: 1700px) {
    .gallery {
        &__videos {
            margin-top: 40px;
        }

    }
}

@media (max-width: 1300px) {
    .gallery {
        &__videos {
            flex-direction: column;
        }
    }
}

@media (max-width: 700px) {
    .gallery {
        &__videos {
            margin-top: 30px;
        }
    }
}
</style>