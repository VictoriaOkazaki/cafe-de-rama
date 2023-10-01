<template>
    <div class="wrapper" :class="{ latin: ['az', 'en'].includes(locale) }">
        <audio ref="audio" class="audio" src="music/music.mp3" loop></audio>

        <slot />
        <Footer />
    </div>
    <!-- <Loader v-if="loading" /> -->
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useLangPageData } from "~/composables/lang";

const { locale } = useI18n();

const { isBurgerOpen } = useBurger();
const route = useRoute();
watch(() => route.path, () => {
    isBurgerOpen.value = false;
    scrollOnTopOfPage();
})

const audio = ref();
onMounted(() => {
    if (!audio) return;
    audio.value.volume = 0.2;
    let interval = setInterval(async () => {
        try {
            await audio.value.play();
            clearInterval(interval);
        } catch (err) {
            // console.error('Error start audio', err)
        }
    }, 1000);
});

const nuxtApp = useNuxtApp();

const loading = ref(false);
nuxtApp.hook("page:start", () => {
    loading.value = true;
});
nuxtApp.hook("page:finish", async () => {
    // Test delay
    // await (new Promise(resolve => setTimeout(resolve, 5000)));
    loading.value = false;
});

const { pageTitle, pageDescription, pageLang } = useLangPageData()

useHead({
    title: pageTitle,
    meta: [
        { name: "description", content: pageDescription },
        {
            name: "google-site-verification",
            content: "MItRq3_-WquKx9L3QkzQsJvUsE-xZV0fgV1p51JXTfY",
        },
        { name: "yandex-verification", content: "6aa96e22b82c3017" },
    ],
    htmlAttrs: {
        lang: pageLang,
    },
    link: [
        {
            href: "https://fonts.googleapis.com",
            rel: "preconnect",
        },
        {
            href: "https://fonts.gstatic.com",
            rel: "preconnect",
            crossorigin: "",
        },
        {
            href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Fira+Sans+Condensed:wght@400;700&family=Kalam:wght@400;500&display=swap" rel="stylesheet',
            rel: "stylesheet",
        },
        {
            rel: "icon",
            href: "/favicon.ico",
        },
    ],
});
</script>

<style scoped>
.unvisible {
    visibility: hidden;
}
</style>
