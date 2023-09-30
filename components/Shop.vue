<template>
  <CardsSection
    anchor="shop"
    :title="$t('shop.title')"
    :text="$t('shop.text')"
    :btn="{
      text: $t('shop.btn'),
      href: 'shop',
    }"
  >
    <Card
      v-for="(card, i) in cards"
      :imgSrc="card.mainFile.src"
      :title="card.title"
      :text="card.text"
      :data-index="i"
    >
      <span class="section__price text">{{ card.price }} AZN</span>
    </Card>
  </CardsSection>
</template>

<script setup lang="ts">
import { ShopCard } from "~/types";
import { useWindowSizes } from "~/composables/useWindowSizes";

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
      price: card.price,
    };
  });

  return langCards.slice(0, index);
});

const itemsCount = computed(() => 3);
const pageNum = 1;

const { currentItems: allCards, increaseCurShowCount } =
  useShowMoreRequest<ShopCard>(itemsCount, pageNum, "/api/entity/goods");

await increaseCurShowCount();
</script>

<style lang="scss" scoped>
.section__price {
  color: $acsent-2;
}
</style>
