<template>
    <li class="section__item" ref="card">
        <div class="section__item-img-cont">
            <img loading="lazy" class="section__item-img" :src="imgSrc" alt="">
        </div>
        <h3 class="section__item-title text">{{ title }}</h3>
        <span class="section__item-text helper-text">{{ previewText(text) }}</span>
        <slot />
    </li>
</template>

<script setup lang="ts">
defineProps<{
    imgSrc: string,
    title: string,
    text: string
}>()

const previewText = (text: string) => {
    const maxWords = 20
    const words = text.split(' ')
    if (words.length < maxWords) return text
    return words.slice(0, maxWords).join(' ') + '...'
}

const card = ref()
useIntersection(card, (entry) => {
    const target = entry.target as any
    const delay = Number(target.dataset.index || '0')
    target.style.animation = `appearFromLeft 1.5s ease-out ${delay}s`
    target.style.animationFillMode = "both"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})
</script>

<style scoped lang="scss">
.section__item {
    display: flex;
    flex-direction: column;
    width: 404px;
    padding: 45px 30px;
    border-radius: 40px;
    border: 1px solid $acsent-1;
    box-shadow: 6px 6px 20px 0px #697e53;

    &-img-cont {
        width: 344px;
        height: 196px;
        border-radius: 20px;
        margin-bottom: 20px;
        overflow: hidden;
    }

    &-img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    &-title {
        color: $text-1;
        margin-bottom: 20px;
    }

    &-text {
        color: $text-2;
        margin-bottom: 20px;
        white-space: pre-wrap;
    }
}

@media (max-width: 1600px) {
    .section__item {
        width: 340px;

        &-img-cont {
            width: 279px;
            height: 159px;
        }
    }
}

@media (max-width: 900px) {
    .section__item {
        width: 268px;
        padding: 30px 20px;

        &-img-cont {
            width: 228px;
            height: 130px;
            margin-bottom: 16px;
        }

        &-title,
        &-text {
            margin-bottom: 16px;
        }
    }
}

@media (max-width: 700px) {
    .section__item {
        width: 100%;
        padding: 24px 16px;
        margin-bottom: 30px;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>