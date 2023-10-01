<template>
  <CardsSection anchor="shop" :title="$t('shop.title')" :text="$t('shop.text')" :btn="{
    text: $t('shop.btn'),
    href: 'shop',
  }">
    <Card v-for="(card, i) in cards" :imgSrc="card.mainFile.src" :title="card.title" :text="card.text" :data-index="i">
      <span class="section__price text">{{ card.price }} AZN</span>
      <NuxtLink class="blog__btn text" :to="`/shop/${card.id}`">{{
        $t("shop.btn2")
      }}</NuxtLink>
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
.blog__btn {
  color: $text-1;
  margin-top: 20px;
  transition: color 0.5s ease-in;
  text-decoration: underline;
  padding-bottom: 10px;

  &:hover {
    color: $acsent-1;
  }
}

.section__price {
  color: $acsent-2;
}
</style>
