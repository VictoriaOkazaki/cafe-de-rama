<template>
    <footer class="footer">
        <div class="container section footer-container">
            <div class="footer__inner">
                <NuxtLink to="/" class="logo-link footer__logo">
                    <img loading="lazy" src="../assets/images/logo.svg" alt="logo" class="logo">
                </NuxtLink>
                <span class="footer__copyright helper-text">© De Rama <br> Vegetarian & Vegan Cafe. <br> All Rights
                    Reserved.</span>
                <SocialLinks />
                <a class="footer__to-top" @click.prevent="scrollOnTopOfPage(true)">
                    <img loading="lazy" alt="to top" src="../assets/images/arrow.svg" class="footer__to-top-img">
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
    position: relative;
    border-radius: 0px 60px 0px 0px;
    background-color: $bg-1;

    &__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__logo {
        animation: rotate 5s ease-in infinite;
        // animation-iteration-count: 3;
    }

    &__copyright {
        color: $text-2;
    }

    &__to-top {
        position: absolute;
        right: 30px;
        top: 30px;
    }
}

@media (max-width: 800px) {
    .footer {
        &__to-top-img {
            width: 26px;
            height: 28px;
        }
    }
}

@media (max-width: 600px) {
    .footer {
        &-container {
            padding-top: 20px;
            padding-bottom: 20px;
        }

        &__inner {
            flex-direction: column;
            align-items: flex-start;
        }

        &__copyright {
            margin: 20px 0;
        }

        &__to-top-img {
            top: 20px;
            right: 20px;
        }
    }
}
</style>