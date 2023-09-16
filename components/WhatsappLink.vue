<template>
    <div class="wp">
        <img src="../assets/images/wp.svg" alt="whatsapp" class="social-logo wp-logo">
        <div class="wp__links">
            <a href="https://wa.me/+994777108108" class="wp__link helper-text">+994777108108</a>
            <a href="https://wa.me/+994555108108" class="wp__link helper-text">+994555108108</a>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.wp {
    display: flex;
    z-index: 10;

    &__links {
        display: flex;
        flex-direction: column;
    }

    &__link {
        color: $text-2;
        transition: color .5s ease-in;

        &:hover {
            color: $acsent-1;
        }

        &:first-child {
            margin-bottom: 8px;
        }
    }

    &-logo {
        margin-right: 16px;
        cursor: pointer;
    }
}

@media (max-width: 1100px) {
    .wp {
        &__link {
            &:first-child {
                margin-bottom: 4px;
            }
        }
    }
}

@media (max-width: 500px) {
    .wp-logo {
        margin-right: 8px;
    }
}
</style>