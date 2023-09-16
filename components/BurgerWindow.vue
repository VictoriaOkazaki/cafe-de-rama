<template>
    <div class="burger__window" :class="{ 'burger__window-active': isBurgerOpen }">
        <HomeBottom class="home-bottom" />
    </div>
</template>

<script setup>
const { isBurgerOpen } = useBurger()
</script>

<style lang="scss" scoped>
.burger__window {
    display: none;
}

.burger__window-active {
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: $bg-1;
    position: absolute;
    top: 0;
    left: 0;
    top: 0;
    left: 0;
    z-index: 5;
    animation: 2s alternate slidein;
}

@media (max-width: 1300px) {
    .home-bottom {
        display: flex !important;
        position: absolute;
        left: 0;
        bottom: 40px;
    }
}
</style>