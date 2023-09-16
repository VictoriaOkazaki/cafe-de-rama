<template>
    <a v-if="link.href.startsWith('#')" :href="link.href" @click.prevent="smoothScrollToSection(link.href.substring(1))">
        {{ link.title }}
    </a>
    <NuxtLink v-else :to="link.href">{{ link.title }}</NuxtLink>
</template>

<script setup>
defineProps({
    link: {
        required: true
    }
})
</script>

<style lang="scss" scoped>
a {
    color: $text-2;
    transition: color .5s ease-in;

    &:hover {
        color: $acsent-1;
    }
}
</style>