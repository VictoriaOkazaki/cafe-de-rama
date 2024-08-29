<template>
    <div class="social">
        <div class="gravityButton">
            <a href="https://www.facebook.com/DeRamaCafe" target="_blank" class="social__link">
                <img src="../assets/images/fb.svg" alt="facebook" class="social-logo">
            </a>
        </div>
        <div class="gravityButton">
            <a href="https://www.instagram.com/deramacafebaku/" target="_blank" class="social__link">
                <img src="../assets/images/insta.svg" alt="instagram" class="social-logo">
            </a>
        </div>
        <div class="gravityButton">
            <a href="https://www.linkedin.com/in/de-rama-cafe-baku-760605270/" target="_blank" class="social__link">
                <img src="../assets/images/linkedin.svg" alt="linkedin" class="social-logo">
            </a>
        </div>
    </div>
</template>

<script setup>
onMounted(() => {
    document.querySelectorAll('.gravityButton').forEach(btn => {

        btn.addEventListener('mousemove', (e) => {

            const rect = btn.getBoundingClientRect();
            const h = rect.width / 2;

            const x = e.clientX - rect.left - h;
            const y = e.clientY - rect.top - h;

            const r1 = Math.sqrt(x * x + y * y);
            const r2 = (1 - (r1 / h)) * r1;

            const angle = Math.atan2(y, x);
            const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
            const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;

            const op = (r2 / r1) + 0.25;

            btn.style.setProperty('--tx', `${tx}px`);
            btn.style.setProperty('--ty', `${ty}px`);
            btn.style.setProperty('--opacity', `${op}`);
        });

        btn.addEventListener('mouseleave', (e) => {
            btn.style.setProperty('--tx', '0px');
            btn.style.setProperty('--ty', '0px');
            btn.style.setProperty('--opacity', `${0.25}`);
        });
    })
})
</script>

<style lang="scss" scoped>
.gravityButton {
    display: grid;
    place-items: center;
    aspect-ratio: 1;

    &>a {
        width: 64px;
        aspect-ratio: 1;
        transform: translate(var(--tx, 0), var(--ty, 0));
        transition: all 0.2s ease-out;
    }
}

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

@media (max-width: 600px) {
    .social {
        .gravityButton>a {
            width: 34px;
        }
    }
}
</style>