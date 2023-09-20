<template>
    <div class="gallery__video-cont">
        <video ref="video" class="gallery__video" controls :src="src" :poster="poster" preload="metadata"></video>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    src: string,
    poster: string
}>()
</script>

<style lang="scss" scoped>
.gallery__video[poster] {
    object-fit: cover;
}

.gallery {
    &__video-cont {
        width: 770px;
        height: 400px;
        position: relative;
        transition: all 1s;
        margin-bottom: 60px;

        &:nth-child(2) {
            display: flex;
            align-self: flex-end;
        }
    }

    &__video {
        width: 100%;
        height: 100%;
        border-radius: 60px;
    }
}

@media (max-width: 1700px) {
    .gallery {
        &__video-cont {
            width: 540px;
            height: 307px;
            margin-bottom: 40px;
        }

        &__video {
            border-radius: 40px;
        }
    }
}

@media (max-width: 800px) {
    .gallery {
        &__video-cont {

            &:nth-child(2) {
                align-self: auto;
            }
        }
    }
}

@media (max-width: 700px) {
    .gallery {
        &__video-cont {
            border-radius: 20px;
            width: 100%;
            aspect-ratio: 3 / 2;
            height: auto;
            margin-bottom: 30px;
        }

        &__video {
            border-radius: 20px;
        }
    }
}
</style>