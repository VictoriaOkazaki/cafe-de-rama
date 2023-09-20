<template>
    <div class="gallery__video-cont">
        <button v-show="isShowPlayBtn" class="gallery__video-btn" @click="playVideo">
            <img loading="lazy" src="../assets/images/play.svg" alt="play">
        </button>
        <video ref="video" class="gallery__video" @pause="onPause" :src="src" controls :poster="poster"
            preload="metadata"></video>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    src: string,
    poster: string
}>()

const isShowPlayBtn = ref(true)
const video = ref<HTMLVideoElement | null>(null)

const playVideo = () => {
    console.log('Press play btn')
    isShowPlayBtn.value = false
    video.value?.play()
}

const onPause = () => {
    isShowPlayBtn.value = true
}
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

    &__video-btn {
        background: none;
        border: none;
        border-radius: 100%;
        display: block;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        position: absolute;
        top: calc(400px / 2 - 100px / 2);
        left: calc(770px /2 - 100px / 2);
        z-index: 2;
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

        &__video-btn {
            top: calc(307px / 2 - 100px / 2);
            left: calc(540px /2 - 100px / 2);
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

        &__video-btn {
            width: 80px;
            height: 80px;
            top: calc(307px / 2 - 80px / 2);
            left: calc(540px /2 - 80px / 2);
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

        &__video-btn {
            // width: 40px;
            // height: 40px;
            // top: calc(100% / 2 - 40px / 2);
            // left: calc(50% - 40px / 2);
        }
    }
}
</style>