<template>
    <CardsSection anchor="blog" :title="$t('blog.title')" :text="$t('blog.text')" :btn="{
        text: $t('blog.btn'),
        href: 'blog'
    }">
        <Card v-for="card in cards" :imgSrc="card.src" :title="card.title" :text="card.text">
            <NuxtLink class="blog__btn text" :to="`/blog/${card.id}`">{{ $t('blog.btn2') }}</NuxtLink>
        </Card>
    </CardsSection>
</template>

<script setup lang="ts">
import { BlogCard } from '~/types'
import { useWindowSizes } from '~/composables/useWindowSizes'

const { width } = useWindowSizes()
const cards = computed(() => {
    const index = width.value >= 1200 ? 3 : 2
    return allCards.slice(0, index)
})

const allCards: BlogCard[] = [
    {
        id: '1',
        src: '',
        title: 'Название статьи',
        text: 'Текст статьи Текст статьи Текст Текст статьи Текст статьи Текст статьиТекст статьиТекст статьи Текст статьи Текст...'
    },
    {
        id: '1',
        src: '',
        title: 'Название статьи',
        text: 'Текст статьи Текст статьи Текст Текст статьи Текст статьи Текст статьиТекст статьиТекст статьи Текст статьи Текст...'
    },
    {
        id: '1',
        src: '',
        title: 'Название статьи',
        text: 'Текст статьи Текст статьи Текст Текст статьи Текст статьи Текст статьиТекст статьиТекст статьи Текст статьи Текст...'
    }
]
</script>

<style scoped lang="scss">
.blog__btn {
    color: $text-1;
    transition: color .5s ease-in;
    text-decoration: underline;
    padding-bottom: 10px;

    &:hover {
        color: $acsent-1;
    }
}
</style>