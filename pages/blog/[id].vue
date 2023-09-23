<template>
    <BurgerWindow />
    <section class="blog-post">
        <Header />
        <div class="container section">
            <LangSwitch class="pages-langs-switch" />
            <div class="blog-post__inner">
                <div class="blog-post__img-cont">
                    <img src="" alt="" class="blog-post__img">
                </div>
                <h2 class="blog-post__title title">Post name{{ blogId }}</h2>
                <p class="blog-post__text text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore soluta
                    ipsam unde, deserunt mollitia consequatur nihil saepe odit at voluptatum, aliquid porro doloremque
                    repellendus suscipit blanditiis odio voluptatem quaerat eius.<br>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore soluta
                    ipsam unde, deserunt mollitia consequatur nihil saepe odit at voluptatum, aliquid porro doloremque
                    repellendus suscipit blanditiis odio voluptatem quaerat eius.</p>
                <ul class="blog-post__files">
                    <li class="blog-post__item">
                        <img src="" alt="" class="blog-post__item-img">
                    </li>
                    <li class="blog-post__item">
                        <img src="" alt="" class="blog-post__item-img">
                    </li>
                    <li class="blog-post__item">
                        <img src="" alt="" class="blog-post__item-img">
                    </li>
                </ul>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
const route = useRoute()
const blogId = route.params.id
</script>

<style scoped lang="scss">
.blog-post {
    &__inner {
        margin-top: calc(44px + 20px);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__img-cont {
        margin-bottom: 100px;
        width: 100%;
        height: 500px;
        background-color: #fff;
        border-radius: 0 0 40px 40px;
    }


    &__img {
        object-fit: cover;
    }

    &__title {
        color: $text-1;
        margin-bottom: 60px;
    }

    &__title,
    &__text {
        width: 58%;
        text-align: left;
    }

    &__text {
        color: $text-1;
    }

    &__files {
        margin-top: 180px;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    &__item {
        background-color: #fff;
        width: calc(100% / 3 - 45px);
        height: 300px;
        border-radius: 40px;
    }

    &__item-img {
        object-fit: contain;
    }
}

@media (max-width: 1600px) {
    .blog-post {

        &__img-cont {
            margin-bottom: 80px;
            height: 400px;
        }

        &__title,
        &__text {
            width: 80%;
        }

        &__title {
            margin-bottom: 40px;
        }

        &__files {
            margin-top: 150px;
        }

        &__item {
            width: calc(100% / 3 - 25px);
        }
    }
}


@media (max-width: 1300px) {
    .blog-post {

        &__img-cont {
            margin-bottom: 60px;
            height: 300px;
        }

        &__title,
        &__text {
            width: 100%;
        }

        &__files {
            margin-top: 120px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 40px;
        }

        &__item {
            width: auto;
            height: 200px;
        }
    }
}

@media (max-width: 800px) {
    .blog-post {

        &__files {
            margin-top: 80px;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 40px;
        }

        &__item {
            height: 300px;
        }
    }
}

@media (max-width: 600px) {
    .blog-post {
        &__inner {
            margin-top: 40px;
        }

        &__img-cont {
            height: 200px;
            margin-bottom: 40px;
        }

        &__title {
            margin-bottom: 30px;
        }

        &__files {
            margin-top: 60px;
            grid-gap: 30px;
        }

        &__item {
            height: 230px;
        }
    }
}
</style>