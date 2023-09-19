<template>
    <section class="action" id="action">
        <div class="container section">
            <div class="action__inner">
                <h2 class="action__title title">{{ $t('action.title') }}</h2>
                <div class="action__content">
                    <div class="action__info">
                        <img src="../assets/images/action-text.svg" alt="business lunch" class="action__info-img">
                        <p class="action__info-text text">{{ $t('action.days') }}</p>
                        <p class="action__info-text text">13:00 — 15:00</p>
                        <p class="action__info-text text">20% {{ $t('action.off') }}</p>
                    </div>
                    <img src="../assets/images/action-plate.png" ref="actionImg" alt="plate with de rama logo"
                        class="action__img">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const actionImg = ref()
useIntersection(actionImg, (entry) => {
    entry.target.style.animation = "pulse 3.5s alternate infinite ease-out"
    entry.target.style.animationFillMode = "both"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})
</script>

<style lang="scss" scoped>
.action {
    background-color: $acsent-1;

    &__inner {
        display: flex;
        width: 80%;
        justify-content: space-between;
    }

    &__title {
        color: $text-1;
    }

    &__content {
        display: flex;
        width: 80%;
        justify-content: space-between;
        align-items: center;
    }

    &__info {
        display: flex;
        flex-direction: column;
    }

    &__info-img {
        width: 383px;
        height: 80px;
        margin-bottom: 40px;
    }

    &__info-text {
        color: $text-1;

        &:nth-child(3) {
            margin: 16px 0;
        }

        &:last-child {
            color: $bg-2;
            font-weight: 700;
        }
    }

    &__img {
        width: 418px;
        height: 324px;
    }
}

@media (max-width: 1600px) {
    .action {

        &__inner {
            width: 94%;
        }

        &__content {
            width: 88%;
        }
    }
}

@media (max-width: 1300px) {
    .action {
        &__img {
            width: 300px;
            height: 232px;
        }

        &__info-img {
            width: 314px;
            height: 66px;
            margin-bottom: 30px;
        }
    }
}

@media (max-width: 800px) {
    .action {
        &__inner {
            width: 100%;
            flex-direction: column;
        }

        &__content {
            width: 100%;
            margin-top: 20px;
        }

        &__info {
            align-items: flex-start;
        }

        &__img {
            width: 234px;
            height: 181px;
        }

        &__info-img {
            width: 293px;
            height: 49px;
        }
    }
}

@media (max-width: 600px) {
    .action {
        &__content {
            flex-direction: column;
            align-items: flex-start;
        }

        &__img {
            width: 185px;
            height: 140px;
            margin-top: 20px;
        }

        &__info-img {
            width: 282px;
            height: 55px;
        }

        &__info-text {

            &:nth-child(3) {
                margin: 12px 0;
            }
        }
    }
}
</style>