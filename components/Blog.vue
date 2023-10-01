<template>
  <CardsSection
    anchor="blog"
    :title="$t('blog.title')"
    :text="$t('blog.text')"
    :btn="{
      text: $t('blog.btn'),
      href: 'blog',
    }"
  >
    <Card
      v-for="(card, i) in cards"
      :imgSrc="card.mainFile.src"
      :title="card.title"
      :text="card.text"
      :data-index="i"
    >
      <NuxtLink class="blog__btn text" :to="`/blog/${card.id}`">{{
        $t("blog.btn2")
      }}</NuxtLink>
    </Card>
  </CardsSection>
</template>

<script setup lang="ts">
import { LocaleBlogCard } from "~/types";

defineProps<{
  cards: LocaleBlogCard[];
}>();
</script>

<style scoped lang="scss">
.blog__btn {
  color: $text-1;
  transition: color 0.5s ease-in;
  text-decoration: underline;
  padding-bottom: 10px;

  &:hover {
    color: $acsent-1;
  }
}
</style>
