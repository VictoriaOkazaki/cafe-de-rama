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
import { LocaleShopCard } from "~/types";

defineProps<{
  cards: LocaleShopCard[];
}>();
</script>

<style lang="scss" scoped>
.section__price {
  color: $acsent-2;
}
</style>
