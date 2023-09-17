<template>
    <section class="gallery" id="gallery">
        <div class="container section">
            <div class="gallery__inner">
                <h2 class="gallery__title title">{{ $t('gallery') }}</h2>
                <div class="gallery__videos">
                    <video src="" controls poster="" preload="metadata"></video>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.gallery {
    &__title {
        color: $text-1;
    }

    &__videos {
        margin-top: 60px;
    }
}
</style>