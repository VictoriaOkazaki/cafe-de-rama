<template>
    <BurgerWindow />
    <section class="blog-post">
        <Header />
        <div class="container section">
            <LangSwitch class="pages-langs-switch" />
            <div class="container section"> Single blog page {{ blogId }}</div>
        </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    // TO DO dynamic title
    title: 'De Rama Blog',
    description: 'Our articles related to vegetarian & vegan theme and healthy lifestyle.'
})

const route = useRoute()
const blogId = route.params.id
</script>

<style scoped></style>