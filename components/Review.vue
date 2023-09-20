<template>
    <section class="review" id="review">
        <div class="container section">
            <div class="review__inner">
                <h2 class="review__title title">{{ $t('review.title') }}</h2>
                <div class="review__lists">
                    <ul class="review__list" ref="reviewList1">
                        <li class="review__item">
                            <div class="review__item-count helper-text">1</div>
                            <div class="review__item-content">
                                <span class="review__item-name text">Jeddah, Saudi Arabia</span>
                                <span class="review__item-platform helper-text">happycow</span>
                                <p class="review__item-text text">{{ $t('review.1') }}</p>
                            </div>
                        </li>
                        <li class="review__item">
                            <div class="review__item-count helper-text">2</div>
                            <div class="review__item-content">
                                <span class="review__item-name text">Turkay Rahimli</span>
                                <span class="review__item-platform helper-text">google maps</span>
                                <p class="review__item-text text">{{ $t('review.2') }}</p>
                            </div>
                        </li>
                        <li class="review__item">
                            <div class="review__item-count helper-text">3</div>
                            <div class="review__item-content">
                                <span class="review__item-name text">Мішра Адарш</span>
                                <span class="review__item-platform helper-text">google maps</span>
                                <p class="review__item-text text">{{ $t('review.3') }}</p>
                            </div>
                        </li>
                        <li class="review__item">
                            <div class="review__item-count helper-text">4</div>
                            <div class="review__item-content">
                                <span class="review__item-name text">FellowTraveler473789</span>
                                <span class="review__item-platform helper-text">tripadvisor</span>
                                <p class="review__item-text text">{{ $t('review.4') }}</p>
                            </div>
                        </li>
                        <li class="review__item">
                            <div class="review__item-count helper-text">5</div>
                            <div class="review__item-content">
                                <span class="review__item-name text">Gary Butcher</span>
                                <span class="review__item-platform helper-text">google maps</span>
                                <p class="review__item-text text">{{ $t('review.5') }}</p>
                            </div>
                        </li>
                    </ul>
                    <ul class="review__list" ref="reviewList2">
                        <li class="review__item">
                            <div class="review__item-count helper-text">6</div>
                            <div class="review__item-content">
                                <span class="review__item-name text">OliverJähnke</span>
                                <span class="review__item-platform helper-text">happycow</span>
                                <p class="review__item-text text">{{ $t('review.6') }}</p>
                            </div>
                        </li>
                        <li class="review__item">
                            <div class="review__item-count helper-text">7</div>
                            <div class="review__item-content">
                                <span class="review__item-name text">ХаялДжамилов</span>
                                <span class="review__item-platform helper-text">happycow</span>
                                <p class="review__item-text text">{{ $t('review.7') }}</p>
                            </div>
                        </li>
                        <li class="review__item">
                            <div class="review__item-count helper-text">8</div>
                            <div class="review__item-content">
                                <span class="review__item-name text">Алексей Кольцов</span>
                                <span class="review__item-platform helper-text">google maps</span>
                                <p class="review__item-text text">{{ $t('review.8') }}</p>
                            </div>
                        </li>
                        <li class="review__item">
                            <div class="review__item-count helper-text">9</div>
                            <div class="review__item-content">
                                <span class="review__item-name text">Артём Фёдоров</span>
                                <span class="review__item-platform helper-text">google maps</span>
                                <p class="review__item-text text">{{ $t('review.9') }}</p>
                            </div>
                        </li>
                        <li class="review__item">
                            <div class="review__item-count helper-text">10</div>
                            <div class="review__item-content">
                                <span class="review__item-name text">Manasa Shastry</span>
                                <span class="review__item-platform helper-text">google maps</span>
                                <p class="review__item-text text">{{ $t('review.10') }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="review__logos">
                    <div class="review__logo" ref="reviewLogo1">
                        <img loading="lazy" src="../assets/images/happycow.svg" alt="happycow" class="review__logo-img">
                    </div>
                    <div class="review__logo" ref="reviewLogo2">
                        <img loading="lazy" src="../assets/images/trip.svg" alt="tripadvisor" class="review__logo-img">
                    </div>
                    <div class="review__logo" ref="reviewLogo3">
                        <img loading="lazy" src="../assets/images/google.svg" alt="google" class="review__logo-img">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const reviewList1 = ref()
const reviewList2 = ref()
const reviewLogo1 = ref()
const reviewLogo2 = ref()
const reviewLogo3 = ref()

useIntersection(reviewList1, (entry) => {
    entry.target.style.animation = "appearFromLeft 1.5s ease-out"
    entry.target.style.animationFillMode = "both"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})

useIntersection(reviewList2, (entry) => {
    entry.target.style.animation = "appearFromLeft 1.5s ease-out 1s"
    entry.target.style.animationFillMode = "both"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})
useIntersection(reviewLogo1, (entry) => {
    entry.target.style.animation = "appearFromLeft 1.5s ease-out .5s"
    entry.target.style.animationFillMode = "both"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})
useIntersection(reviewLogo2, (entry) => {
    entry.target.style.animation = "appearFromLeft 1.5s ease-out 2s"
    entry.target.style.animationFillMode = "both"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})
useIntersection(reviewLogo3, (entry) => {
    entry.target.style.animation = "appearFromLeft 1.5s ease-out 3s"
    entry.target.style.animationFillMode = "both"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})
</script>

<style lang="scss" scoped>
.review {
    background-color: $bg-2;

    &__lists {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        justify-content: space-between;
    }

    &__title {
        color: $text-1;
    }

    &__list {
        display: flex;
        flex-direction: column;
        width: calc(100% / 2 - 15px);
    }

    &__item {
        display: flex;
        margin-top: 30px;
    }

    &__item-count {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
        border: 1px $text-2 solid;
        border-radius: 20px;
        width: 50px;
        height: 50px;
        color: $text-2;
    }

    &__item-content {
        display: flex;
        flex-direction: column;
        width: calc(100% - 50px - 16px);
    }

    &__item-name {
        color: $acsent-2;
    }

    &__item-platform {
        color: $text-2;
        margin: 10px 0;
    }

    &__item-text {
        color: $text-1;
    }

    &__logos {
        display: flex;
        margin-top: 60px;
    }

    &__logo {
        width: 200px;
        height: 133px;
        background-color: #fff;
        border-radius: 40px;
        margin-right: 60px;
        display: flex;
        justify-content: center;
        align-items: center;


        &:last-child {
            margin-right: 0;
        }
    }

    &__logo-img {
        width: 80%;
        height: 80%;
        object-fit: contain;
    }
}

@media (max-width: 1600px) {
    .review {

        &__lists {
            margin-top: 20px;
        }

        &__list {
            width: calc(100% / 2 - 15px);
        }

        &__item-count {
            width: 42px;
            height: 42px;
            border-radius: 15px;
        }

        &__item-content {
            width: calc(100% - 42px - 16px);
        }

        &__logos {
            margin-top: 40px;
        }

        &__logo {
            width: 150px;
            height: 98px;
            border-radius: 30px;
            margin-right: 30px;
        }
    }
}

@media (max-width: 1300px) {
    .review {

        &__lists {
            flex-direction: column;
            margin-top: 20px;
        }

        &__list {
            width: 100%;
        }

        &__logo {
            width: 120px;
            height: 80px;
            margin-right: 20px;
        }
    }
}

@media (max-width: 800px) {
    .review {

        &__item {
            margin-top: 20px;
        }

        &__item-count {
            margin-right: 12px;
        }

        &__item-content {
            width: calc(100% - 42px - 12px);
        }

        &__item-platform {
            margin: 8px 0;
        }
    }
}

@media (max-width: 600px) {
    .review {
        &__lists {
            margin-top: 10px;
        }

        &__item {
            margin-top: 18px;
        }

        &__item-count {
            margin-right: 8px;
            width: 30px;
            height: 30px;
            border-radius: 10px;
        }

        &__item-content {
            width: calc(100% - 30px - 8px);
        }

        &__item-platform {
            margin: 6px 0;
        }

        &__logos {
            margin-top: 30px;
            justify-content: space-between;
        }
    }
}

@media (max-width: 400px) {
    .review {
        &__logo {
            width: 80px;
            height: 53px;
            border-radius: 20px;
        }
    }
}
</style>