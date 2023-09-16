<template>
    <h2 class="menu__title title">{{ $t('menu-f.title2') }}</h2>
    <ul class="menu__category" id="drink-nonalco">
        <li class="menu__category-item text" v-for="c in category" :class="{ 'active': c.id === activeCategory.id }"
            @click="activeCategory = c">{{ c.name }}</li>
    </ul>
    <h3 class="menu__category-desc subtitle">{{ activeCategory.title }}</h3>
    <div class="menu__items">
        <div class="menu__item" v-for="drink in drinks.filter(drink => drink.category === activeCategory.id)">
            <div class="menu__item-left">
                <img :src="'images/drink1.png'" class="menu__item-img">
            </div>
            <div class="menu__item-right">
                <span class="menu__item-name text">{{ drink.name }}</span>
                <span class="menu__item-ingredient helper-text">{{ drink.ingredient }}</span>
                <span class="menu__item-price text">{{ drink.price }} AZN</span>
            </div>
        </div>
    </div>
    <a href="#food" class="menu__to-category" @click.prevent="smoothScrollToSection('food')">
        <span class="helper-text">{{ $t('menu-f.to-category') }}</span>
        <img src="../assets/images/to-category.svg" class="menu__to-category-img">
    </a>
    <!-- alco-drinks -->
    <h2 class="menu__title title">{{ $t('menu-f.title3') }}</h2>
    <ul class="menu__category" id="drink-nonalco">
        <li class="menu__category-item text" v-for="c in alcoCategory" :class="{ 'active': c.id === activeAlcoCategory.id }"
            @click="activeAlcoCategory = c">{{ c.name }}</li>
    </ul>
    <!-- <h3 class="menu__category-desc subtitle">{{ activeAlcoCategory.title }}</h3> -->
    <div class="menu__items">
        <div class="menu__item"
            v-for="alcoDrink in alcoDrinks.filter(alcoDrink => alcoDrink.category === activeAlcoCategory.id)">
            <div class="menu__item-left">
                <img :src="'images/alco1.png'" class="menu__item-img">
            </div>
            <div class="menu__item-right">
                <span class="menu__item-name text">{{ alcoDrink.name }}</span>
                <span class="menu__item-ingredient helper-text">{{ alcoDrink.ingredient }}</span>
                <span class="menu__item-price text">{{ alcoDrink.price }} AZN</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const { drinks, category } = useDrinkList()
const activeCategory = ref(category.value[0])
const { alcoDrinks, alcoCategory } = useAlcoList()
const activeAlcoCategory = ref(alcoCategory.value[0])
</script>

<style lang="scss" scoped>
.active {
    background-color: $acsent-1 !important;
}

.menu {
    &__category {
        border-radius: 20px;
        overflow: hidden;
        margin: 60px 0 60px;
        display: flex;
        width: 1135px;
        flex-wrap: wrap;
        background-color: $bg-2;

    }

    &__category-item {
        cursor: pointer;
        color: $text-1;
        padding: 16px 24px;
    }

    &__category-desc {
        color: $text-2;
        margin-bottom: 30px;
    }

    &__items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 60px;
        margin-bottom: 60px;
    }

    &__item {
        display: flex;
    }

    &__item-img {
        width: 222px;
        height: 240px;
        border-radius: 60px;
    }

    &__item-price {
        color: $acsent-2;
        margin-top: 20px;
    }

    &__item-right {
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        width: 348px;
    }

    &__item-name {
        color: $acsent-2;
        margin-bottom: 20px;
    }

    &__item-ingredient {
        color: $text-1;
    }

    &__to-category {
        color: $text-2;
        display: flex;
        align-self: flex-end;
        align-items: center;
        transition: color .5s ease-in;
        margin-bottom: 60px;

        &:hover {
            color: $acsent-1;
        }
    }

    &__to-category-img {
        margin-left: 16px;
        width: 36px;
    }
}

@media (max-width: 1600px) {
    .menu {
        &__category {
            width: 1013px;

        }

        &__category-item {
            padding: 16px 24px;
        }

        &__items {
            grid-gap: 60px;
            margin-bottom: 40px;
        }

        &__item-img {
            width: 174px;
            height: 188px;
        }

        &__item-right {
            width: 167px;
        }
    }
}

@media (max-width: 1300px) {
    .menu {
        &__category {
            width: 700px;
            margin: 40px 0 40px;
        }

        &__category-item {
            padding: 12px 18px;
        }

        &__items {
            display: flex;
            flex-direction: column;
        }

        &__item-img {
            width: 130px;
            height: 140px;
        }

        &__item-right {
            width: calc(100% - 130px - 30px);
        }

        &__to-category {
            margin-bottom: 40px;
        }
    }
}

@media (max-width: 800px) {
    .menu {
        &__category {
            width: 100%;
            flex-direction: column;
            text-align: center;
        }

        &__item-name {
            margin-bottom: 12px;
        }

        &__item-price {
            margin-top: 12px;
        }

        &__item-right {
            width: calc(100% - 130px - 20px);
            margin-left: 20px;
        }

        &__to-category-img {
            margin-left: 18px;
            width: 26px;
        }
    }
}

@media (max-width: 600px) {
    .menu {
        &__category {
            margin: 30px 0 30px;
        }

        &__category-item {
            padding: 6px 8px;
        }

        &__item-name {
            margin-bottom: 6px;
        }

        &__item-img {
            width: 82px;
            height: 88px;
            border-radius: 30px;
        }

        &__item-right {
            width: calc(100% - 82px - 20px);
            margin-left: 20px;
        }

        &__item-price {
            margin-top: 6px;
        }

        &__category {
            margin-bottom: 30px;
        }

        &__to-category-img {
            margin-left: 8px;
            width: 20px;
        }
    }
}
</style>