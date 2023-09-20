<template>
    <li class="section__item" ref="card">
        <img loading="lazy" class="section__item-img" :src="imgSrc" alt="">
        <h3 class="section__item-title text">{{ title }}</h3>
        <span class="section__item-text helper-text">{{ text }}</span>
        <slot />
    </li>
</template>

<script setup lang="ts">
defineProps<{
    imgSrc: string,
    title: string,
    text: string
}>()

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

    &-img {
        width: 344px;
        height: 196px;
        border-radius: 20px;
        background-color: #fff;
        margin-bottom: 20px;
    }

    &-title {
        color: $text-1;
        margin-bottom: 20px;
    }

    &-text {
        color: $text-2;
        margin-bottom: 20px;
    }
}

@media (max-width: 1600px) {
    .section__item {
        width: 340px;

        &-img {
            width: 279px;
            height: 159px;
        }
    }
}

@media (max-width: 900px) {
    .section__item {
        width: 268px;
        padding: 30px 20px;

        &-img {
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

        &-img {
            width: 228px;
            height: 130px;
        }
    }
}
</style>