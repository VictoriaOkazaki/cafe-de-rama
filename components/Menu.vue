<template>
    <section class="menu" id="menu">
        <div class="container section">
            <div class="menu__inner">
                <div class="menu__menu">
                    <MenuFood />
                    <MenuDrink />
                    <div class="menu__bottom">
                        <div class="menu__bottom-item">
                            <p class="menu__bottom-text text">{{ $t('menu-f.text-1') }}</p>
                            <a href="" class="menu__bottom-btn btn-1 subtitle" id="btn1">{{ $t('menu-f.btn-1') }}</a>
                        </div>
                        <div class="menu__bottom-item">
                            <p class="menu__bottom-text text">{{ $t('menu-f.text-2') }}</p>
                            <div class="menu__bottom-btns">
                                <a href="" class="menu__bottom-btn btn-2 subtitle" id="btn2">{{ $t('menu-f.btn-2') }}</a>
                                <a href="" class="menu__bottom-btn btn-2 subtitle" id="btn3">{{ $t('menu-f.btn-3') }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
#btn2,
#btn3 {
    color: $text-2;
}

#btn1 {
    color: $bg-2;
}

.menu {
    background-color: $bg-1;

    &__menu {
        display: flex;
        flex-direction: column;
        margin-bottom: 60px;
    }

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

@media (max-width: 800px) {
    .menu {
        &__menu {
            margin-bottom: 40px;
        }
    }
}

@media (max-width: 600px) {
    .menu {
        &__menu {
            margin-bottom: 30px;
        }

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