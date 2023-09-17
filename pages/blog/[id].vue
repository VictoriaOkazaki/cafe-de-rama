<template>
    <div>
        Single blog page {{ blogId }}
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const blogId = route.params.id
</script>

<style scoped></style>