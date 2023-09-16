<template>
    <div class="loader-wrapper">
        <div class="loader"></div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
/* loader */
.loader-wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(129, 144, 110, 0.285);
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
    width: 220px;
    height: 220px;
    position: relative;
}

.loader:after,
.loader:before {
    content: "";
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center center;
}

.loader:before {
    box-shadow: inset 0 20px 0 rgba(153, 165, 141, 0.26), inset 20px 0 0 rgba(119, 148, 91, 0.26), inset 0 -20px 0 rgba(113, 186, 41, 0.26), inset -20px 0 0 rgba(126, 245, 7, 0.26);
    animation: rotate-before 2s -0.5s linear infinite;
}

.loader:after {
    box-shadow: inset 0 20px 0 rgba(199, 158, 92, 0.23), inset 20px 0 0 rgba(228, 168, 71, 0.23), inset 0 -20px 0 rgba(243, 159, 24, 0.23), inset -20px 0 0 rgba(250, 156, 4, 0.393);
    animation: rotate-after 2s -0.5s linear infinite;
}

@keyframes rotate-after {
    0% {
        transform: rotateZ(0deg) scaleX(1) scaleY(1);
    }

    50% {
        transform: rotateZ(180deg) scaleX(0.82) scaleY(0.95);
    }

    100% {
        transform: rotateZ(360deg) scaleX(1) scaleY(1);
    }
}

@keyframes rotate-before {
    0% {
        transform: rotateZ(0deg) scaleX(1) scaleY(1);
    }

    50% {
        transform: rotateZ(-180deg) scaleX(0.95) scaleY(0.85);
    }

    100% {
        transform: rotateZ(-360deg) scaleX(1) scaleY(1);
    }
}
</style>