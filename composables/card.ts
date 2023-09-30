import { CardEntity } from "~/types";
import { useI18n } from "vue-i18n";

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
