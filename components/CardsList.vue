<template>
  <div class="section__inner">
    <h2 class="section__title title">{{ $t(`${pageType}.title`) }}</h2>
    <p class="section__text text">{{ $t(`${pageType}.text`) }}</p>
    <ul class="section__list">
      <Card
        v-for="(card, i) in localeCards"
        :imgSrc="card.mainFile.src"
        :title="card.title"
        :text="card.text"
        :data-index="i"
      >
        <span v-if="entityName === 'goods'" class="section__price text"
          >{{ (card as LocaleShopCard).price }} AZN</span
        >

        <NuxtLink class="blog__btn text" :to="`/${pageType}/${card.id}`">{{
          $t(`${pageType}.btn2`)
        }}</NuxtLink>
      </Card>
    </ul>
    <button
      v-show="canIncreaseShowCount"
      class="section__btn btn-2 subtitle"
      ref="cardsBtn"
    >
      <a @click.prevent="increaseCurShowCount" :href="nextPageSrc">{{
        $t(`${pageType}.btn`)
      }}</a>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useLocaleCards } from "~/composables/card";
import { EntityName } from "~/server/modules/entity";
import { CardEntity, LocaleShopCard } from "~/types";

const route = useRoute();
const pageNum = Number(route.query.page || 1);

const props = defineProps<{
  entityName: EntityName;
}>();

const pageType = props.entityName === "blogs" ? "blog" : "shop";

const itemsCount = computed(() => 12);

const { currentItems, canIncreaseShowCount, increaseCurShowCount } =
  useShowMoreRequest<CardEntity>(
    itemsCount,
    pageNum,
    `/api/entity/${props.entityName}`
  );

const localeCards = computed(() => {
  const cards = useLocaleCards(props.entityName, currentItems.value);
  return cards;
});

await increaseCurShowCount();

const nextPageSrc = canIncreaseShowCount.value
  ? `${route.path}?page=${pageNum + 1}`
  : "#";
</script>

<style scoped lang="scss">
.section__price {
  color: $acsent-2;
  margin-bottom: 20px;
}
.blog__btn {
  color: $text-1;
  transition: color 0.5s ease-in;
  text-decoration: underline;
  padding-bottom: 10px;

  &:hover {
    color: $acsent-1;
  }
}
.section {
  background-color: $bg-1;

  &__inner {
    margin-top: 30px;
  }

  &__title {
    color: $text-1;
  }

  &__text {
    margin: 60px 0;
    width: 47%;
    color: $text-1;
  }

  &__list {
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
  }
  &__btn {
    background: linear-gradient($bg-2, $bg-2) padding-box, $grad border-box;
    &:hover {
      background: $acsent-1;
    }
  }
  &__btn > a {
    color: $text-1;
  }
}

@media (max-width: 1600px) {
  .section {
    &__text {
      width: 66%;
    }
  }
}

@media (max-width: 1200px) {
  .section {
    &__text {
      margin: 40px 0;
      width: 100%;
    }

    &__list {
      margin-bottom: 40px;
      justify-content: space-evenly;
    }
  }
}

@media (max-width: 900px) {
  .section {
    &__list {
      justify-content: space-between;
    }
  }
}

@media (max-width: 700px) {
  .section {
    &__text {
      margin: 30px 0;
    }

    &__list {
      margin-bottom: 30px;
      flex-direction: column;
    }
  }
}
</style>
