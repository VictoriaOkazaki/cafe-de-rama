<template>
    <section class="menu" id="menu">
        <div class="container section">
            <div class="menu__inner">
                <div class="menu__menu">
                    <MenuFood />
                    <MenuDrink />
                </div>
            </div>
        </div>
        <MenuBottom />
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.menu {
    background-color: $bg-1;

    &__menu {
        display: flex;
        flex-direction: column;
        margin-bottom: 60px;
    }
}

@media (max-width: 800px) {
    .menu {
        &__menu {
            margin-bottom: 40px;
        }
    }
}

@media (max-width: 600px) {
    .menu {
        &__menu {
            margin-bottom: 30px;
        }
    }
}
</style>