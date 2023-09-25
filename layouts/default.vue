<template>
    <div class="wrapper" :class="{ 'unvisible': loading, 'latin': ['az', 'en'].includes(locale) }">
        <audio ref="audio" class="audio" src="music/music.mp3" loop></audio>

        <slot />
        <Footer />
    </div>
    <Loader v-if="loading" />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { getPageMeta, Lang } from '~/composables/lang';

const audio = ref()
onMounted(() => {
    if (!audio) return
    audio.value.volume = 0.2;
    let interval = setInterval(async () => {
        try {
            await audio.value.play()
            clearInterval(interval)
        } catch (err) {
            // console.error('Error start audio', err)
        }
    }, 1000)

})

const { locale } = useI18n()

const { queryLang, queryLangExists, pageTitle, pageDescription } = useQueryLang()
locale.value = queryLang

onMounted(() => {
    if (queryLangExists) return
    const lang = localStorage.getItem('locale') || 'ru'
    locale.value = lang
})

const router = useRouter()
watch(locale, () => {
    localStorage.setItem('locale', locale.value)
    const { pageTitle, pageDescription } = getPageMeta(locale.value as Lang)
    document.title = pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageDescription)
    router.push('?lang=' + locale.value)
})

useHead({
    title: pageTitle,
    meta: [
        { name: 'description', content: pageDescription },
        { name: 'google-site-verification', content: 'MItRq3_-WquKx9L3QkzQsJvUsE-xZV0fgV1p51JXTfY' }
    ],
    htmlAttrs: {
        lang: queryLang
    },
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
            href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Fira+Sans+Condensed:wght@400;700&family=Kalam:wght@400;500&display=swap" rel="stylesheet',
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
