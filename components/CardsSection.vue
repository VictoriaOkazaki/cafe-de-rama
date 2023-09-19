<template>
    <section :id="anchor">
        <div class="container section">
            <div class="section__inner">
                <h2 class="section__title title">{{ title }}</h2>
                <p class="section__text text">{{ text }}</p>
                <ul class="section__list">
                    <slot />
                </ul>
                <button class="section__btn btn-2 subtitle" ref="cardsBtn">
                    <NuxtLink :to="btn.href">{{ btn.text }}</NuxtLink>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    text: string,
    anchor: string,
    btn: {
        text: string,
        href: string
    }
}>()

const cardsBtn = ref()

useIntersection(cardsBtn, (entry) => {
    const target = entry.target as any
    target.style.animation = "appearFromBottom 1.5s ease-out"
    target.style.animationFillMode = "both"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})
</script>

<style scoped lang="scss">
.section {
    background-color: $bg-1;

    &__title {
        color: $text-1;
    }

    &__text {
        margin: 60px 0;
        width: 47%;
        color: $text-1;
    }

    &__list {
        margin-bottom: 60px;
        display: flex;
        justify-content: space-between;
    }

    &__btn>a {
        color: $text-1;
    }
}

@media (max-width: 1600px) {
    .section {
        &__text {
            width: 66%;
        }
    }
}

@media (max-width: 1200px) {
    .section {
        &__text {
            margin: 40px 0;
            width: 100%;
        }

        &__list {
            margin-bottom: 40px;
            justify-content: space-evenly;
        }
    }
}

@media (max-width: 900px) {
    .section {
        &__list {
            justify-content: space-between;
        }
    }
}

@media (max-width: 700px) {
    .section {
        &__text {
            margin: 30px 0;
        }

        &__list {
            margin-bottom: 30px;
            flex-direction: column;
        }
    }
}
</style>