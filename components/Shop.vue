<template>
    <CardsSection anchor="shop" :title="$t('shop.title')" :text="$t('shop.text')" :btn="{
        text: $t('shop.btn'),
        href: 'shop'
    }">
        <Card v-for="(card, i) in cards" :imgSrc="card.src" :title="card.title" :text="card.text" :data-index="i">
            <span class="section__price text">{{ card.price }} AZN</span>
        </Card>
    </CardsSection>
</template>

<script setup lang="ts">
import { ShopCard } from '~/types'
import { useWindowSizes } from '~/composables/useWindowSizes'

const { width } = useWindowSizes()
const cards = computed(() => {
    const index = width.value >= 1200 ? 3 : 2
    return allCards.slice(0, index)
})

const allCards: ShopCard[] = [
    {
        id: '1',
        src: '',
        price: 5,
        text: 'Описание продукции Описание продукции Описание продукции',
        title: 'Название продукции'
    },
    {
        id: '1',
        src: '',
        price: 5,
        text: 'Описание продукции Описание продукции Описание продукции',
        title: 'Название продукции'
    },
    {
        id: '1',
        src: '',
        price: 5,
        text: 'Описание продукции Описание продукции Описание продукции',
        title: 'Название продукции'
    }
]
</script>

<style lang="scss" scoped>
.section__price {
    color: $acsent-2;
}
</style>