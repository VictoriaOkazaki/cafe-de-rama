import { CardEntity, ShopCard } from "~/types";
import { useI18n } from "vue-i18n";
import { useWindowSizes } from "~/composables/useWindowSizes";
import { EntityName } from "~/server/modules/entity";

export function useLocaleTitleAndText(card: CardEntity) {
  const { locale } = useI18n();

  const localeTitle = computed(() => {
    let langTitle = card.title;

    if (locale.value === "en") {
      langTitle = card.titleEn;
    }

    if (locale.value === "az") {
      langTitle = card.titleAz;
    }

    return langTitle;
  });

  const localeText = computed(() => {
    let langText = card.text;

    if (locale.value === "en") {
      langText = card.textEn;
    }

    if (locale.value === "az") {
      langText = card.textAz;
    }

    return langText;
  });

  return { localeTitle, localeText };
}

export function useLocaleCards(entityName: EntityName, allCards: CardEntity[]) {
  const langCards = allCards.map((card) => {
    const { localeTitle, localeText } = useLocaleTitleAndText(card);

    const resCard = {
      id: card.id,
      title: localeTitle.value,
      text: localeText.value,
      mainFile: card.mainFile,
      extraFiles: card.extraFiles,
    };

    if (entityName === "goods") {
      (resCard as ShopCard).price = (card as ShopCard).price;
    }

    return resCard;
  });

  return langCards;
}

export async function usePreviewCards(entityName: EntityName) {
  const { width } = useWindowSizes();
  const cards = computed(() => {
    const index = width.value >= 1200 ? 3 : 2;

    const langCards = useLocaleCards(entityName, allCards.value);

    return langCards.slice(0, index);
  });

  const itemsCount = computed(() => 3);
  const pageNum = 1;

  const { currentItems: allCards, increaseCurShowCount } =
    useShowMoreRequest<CardEntity>(
      itemsCount,
      pageNum,
      `/api/entity/${entityName}`
    );

  try {
    await increaseCurShowCount();

    return { cards, exists: allCards.value.length > 0 };
  } catch (err) {
    console.error(`Error get ${entityName} preview cards`, err);
  }
  return { cards: [], exists: false };
}
