<template>
    <div class="bottom">
        <div class="container section">
            <div class="menu__bottom">
                <div class="menu__bottom-item">
                    <p class="menu__bottom-text text">{{ $t('menu-f.text-1') }}</p>
                    <a :href="`https://wa.me/+994555108108?text=${$t('reserve-message')}`" target="_blank"
                        class="menu__bottom-btn btn-1 subtitle" id="btn1">{{
                            $t('menu-f.btn-1') }}</a>
                </div>
                <div class="menu__bottom-item">
                    <p class="menu__bottom-text text">{{ $t('menu-f.text-2') }}</p>
                    <div class="menu__bottom-btns">
                        <a href="https://wolt.com/ru/aze/baku/restaurant/de-rama-cafe" target="_blank"
                            class="menu__bottom-btn btn-2 subtitle" id="btn2">{{ $t('menu-f.btn-2') }}</a>
                        <a href="https://food.bolt.eu/en-US/335-baku/p/72793-de-rama-cafe-baku" target="_blank"
                            class="menu__bottom-btn btn-2 subtitle" id="btn3">{{ $t('menu-f.btn-3') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#btn2,
#btn3 {
    color: $text-2;
    background: linear-gradient($bg-2, $bg-2) padding-box,
        $grad border-box;

    &:hover {
        background: $acsent-1;
    }
}

#btn1 {
    color: $bg-2;
}

.bottom {
    background-color: $bg-2;
}

.menu {
    &__bottom {
        display: flex;
        flex-direction: column;
    }

    &__bottom-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 60px;
    }

    &__bottom-text {
        color: $text-2;
    }

    &__bottom-btns {
        display: flex;
    }

    &__bottom-btn {
        margin-right: 30px;

        &:last-child {
            margin-right: 0;
        }
    }
}

@media (max-width: 1600px) {
    .menu {

        &__bottom-item {
            margin-bottom: 40px;
        }

        &__bottom-btn {
            margin-right: 24px;
        }
    }
}

@media (max-width: 1300px) {
    .menu {

        &__bottom-item {
            flex-direction: column;
            align-items: flex-start;
        }

        &__bottom-text {
            margin-bottom: 20px;
        }
    }
}

@media (max-width: 600px) {
    .menu {
        &__bottom-item {
            margin-bottom: 30px;
        }

        &__bottom-text {
            margin-bottom: 12px;
        }

        &__bottom-btns {
            flex-direction: column;
        }

        &__bottom-btn {
            margin-bottom: 12px;
            margin-right: 0;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>