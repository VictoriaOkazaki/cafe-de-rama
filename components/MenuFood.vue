<template>
    <h2 class="menu__title title">{{ $t('menu-f.title1') }}</h2>
    <ul class="menu__category" id="food">
        <li class="menu__category-item text" v-for="c in category" :class="{ 'active': c.id === activeCategory.id }"
            @click="activeCategory = c">{{ c.name }}</li>
    </ul>
    <h3 class="menu__category-desc subtitle">{{ activeCategory.title }}</h3>
    <div class="menu__items" ref="menuItems">
        <div class="menu__item" v-for="food in  foods.filter(food => food.category === activeCategory.id) ">
            <div class="menu__item-left">
                <img loading="lazy" :src="food.src" :alt="food.name" class="menu__item-img">
                <span class="menu__item-price text">{{ food.price }} AZN</span>
            </div>
            <div class="menu__item-right">
                <span class="menu__item-country helper-text">{{ food.country }}</span>
                <span class="menu__item-name text">{{ food.name }}</span>
                <span class="menu__item-ingredient helper-text">{{ food.ingredient }}</span>
            </div>
        </div>
    </div>
    <a href="#food" class="menu__to-category" @click.prevent="smoothScrollToSection('food')">
        <span class="helper-text">{{ $t('menu-f.to-category') }}</span>
        <img loading="lazy" src="../assets/images/arrow.svg" class="menu__to-category-img">
    </a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { foods, category } = useFoodList()
const activeCategory = ref(category.value[0])

const { locale } = useI18n()

watch(locale, () => {
    activeCategory.value = category.value.find(c => c.id === activeCategory.value.id)
})

const menuItems = ref()
useIntersection(menuItems, (entry) => {
    entry.target.style.animation = "appearFromTop 1.5s ease-in"
    entry.target.style.animationFillMode = "both"
}, {
    workTrueOnce: true,
    workTrueOnly: true
})
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
        width: fit-content;
    }

    &__category-item {
        cursor: pointer;
        color: $text-1;
        padding: 16px 24px;
        background-color: $bg-2;
    }

    &__category-desc {
        color: $text-2;
        margin-bottom: 20px;
    }

    &__items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 60px;
        margin-bottom: 60px;
    }

    &__item {
        display: flex;
    }

    &__item-img {
        width: 280px;
        height: 180px;
        border-radius: 60px;
        margin-bottom: 30px;
        object-fit: cover;
    }

    &__item-price {
        color: $acsent-2;
    }

    &__item-right {
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        width: 456px;
    }

    &__item-country {
        color: $text-2;
    }

    &__item-name {
        color: $acsent-2;
        margin: 16px 0 20px;
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
        &__items {
            margin-bottom: 40px;
        }

        &__item-img {
            width: 200px;
            height: 128px;
        }

        &__item-right {
            width: 323px;
        }
    }
}

@media (max-width: 1300px) {
    .menu {

        &__category {
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
            width: 150px;
            height: 96px;
            margin-bottom: 20px;
        }

        &__item-right {
            width: calc(100% - 150px - 30px);
        }

        &__to-category {
            margin-bottom: 40px;
        }
    }
}

@media (max-width: 800px) {
    .menu {

        &__item-img {
            margin-bottom: 24px;
        }

        &__item-right {
            margin-left: 20px;
            width: calc(100% - 150px - 20px);
        }

        &__item-name {
            margin: 12px 0 14px;
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
            flex-direction: column;
            width: 100%;
        }

        &__category-item {
            text-align: center;
            padding: 6px 8px;

            &:first-child {
                border-radius: 20px 20px 0px 0px;
            }

            &:last-child {
                border-radius: 0px 0px 20px 20px;
            }
        }

        &__items {
            margin-bottom: 30px;
        }

        &__item-img {
            width: 95px;
            height: 61px;
            margin-bottom: 12px;
        }

        &__item-right {
            margin-left: 12px;
            width: calc(100% - 95px - 12px);
        }

        &__item-name {
            margin: 6px 0 8px;
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