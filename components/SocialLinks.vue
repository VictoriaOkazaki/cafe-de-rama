<template>
    <div class="social">
        <a href="https://www.facebook.com/DeRamaCafe" target="_blank" class="social__link">
            <img src="../assets/images/fb.svg" alt="facebook" class="social-logo">
        </a>
        <a href="https://www.instagram.com/de.rama.cafe.baku/" target="_blank" class="social__link">
            <img src="../assets/images/insta.svg" alt="instagram" class="social-logo">
        </a>
        <a href="https://www.linkedin.com/in/de-rama-cafe-baku-760605270/" target="_blank" class="social__link">
            <img src="../assets/images/linkedin.svg" alt="linkedin" class="social-logo">
        </a>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.social {
    display: flex;

    &__link {
        margin-right: 40px;

        &:last-child {
            margin-right: 0;
        }
    }
}

@media (max-width: 800px) {
    .social {
        &__link {
            margin-right: 20px;
        }
    }
}
</style>