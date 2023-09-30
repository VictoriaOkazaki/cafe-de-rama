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
import { useI18n } from "vue-i18n";
import { BlogCard } from "~/types";
import { useWindowSizes } from "~/composables/useWindowSizes";

const { locale } = useI18n();

const { width } = useWindowSizes();
const cards = computed(() => {
  const index = width.value >= 1200 ? 3 : 2;

  const langCards = allCards.value.map((card) => {
    const { localeTitle, localeText } = useLocaleTitleAndText(card);

    return {
      id: card.id,
      title: localeTitle.value,
      text: localeText.value,
      mainFile: card.mainFile,
      extraFiles: card.extraFiles,
    };
  });

  return langCards.slice(0, index);
});

const itemsCount = computed(() => 3);
const pageNum = 1;

const { currentItems: allCards, increaseCurShowCount } =
  useShowMoreRequest<BlogCard>(itemsCount, pageNum, "/api/entity/blogs");

await increaseCurShowCount();
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
