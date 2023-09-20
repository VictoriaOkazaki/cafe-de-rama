<template>
    <BurgerWindow />
    <section class="blog-posts">
        <Header />
        <div class="container section">
            <LangSwitch class="pages-langs-switch" />
            <div class="container section">Blog page</div>
        </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    title: 'De Rama Blog',
    description: 'Our articles related to vegetarian & vegan theme and healthy lifestyle.'
})
</script>

<style scoped lang="scss"></style>