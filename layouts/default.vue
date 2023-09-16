<template>
    <div class="wrapper" :class="{ 'unvisible': loading }">
        <slot />
        <Footer />
    </div>
    <Loader v-if="loading" />
</template>

<script setup lang="ts">
useHead({
    link: [
        {
            href: 'https://fonts.googleapis.com',
            rel: 'preconnect'
        },
        {
            href: 'https://fonts.gstatic.com',
            rel: 'preconnect',
            crossorigin: ''
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Fira+Sans+Condensed:wght@400;700&family=Kalam:wght@400;700&display=swap" rel="stylesheet',
            rel: 'stylesheet'
        },
    ]
})

const nuxtApp = useNuxtApp()

const loading = ref(false)
nuxtApp.hook("page:start", () => {
    loading.value = true;
})
nuxtApp.hook("page:finish", async () => {
    // Test delay
    // await (new Promise(resolve => setTimeout(resolve, 5000)));
    loading.value = false;
})
</script>

<style scoped>
.unvisible {
    visibility: hidden;
}
</style>
