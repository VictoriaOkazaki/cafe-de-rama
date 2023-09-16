import { useI18n } from 'vue-i18n'

export const useAlcoList = () => {
    const { locale } = useI18n()
    const alcoDrinks = computed(() => {
        if (locale.value === 'ru') {
            return ALCO_LIST_RU
        } else if (locale.value === 'az') {
            return ALCO_LIST_AZ
        } else if (locale.value === 'en') {
            return ALCO_LIST_EN
        }
        return []
    })

    const alcoCategory = computed(() => {
        if (locale.value === 'ru') {
            return ALCO_CATEGORY_RU
        } else if (locale.value === 'az') {
            return ALCO_CATEGORY_AZ
        } else if (locale.value === 'en') {
            return ALCO_CATEGORY_EN
        }
        return []
    })

    return { alcoDrinks, alcoCategory }
}

const ALCO_CATEGORY_RU = [
    {
        "name": "Вино(алкг.)",
        "id": "winealco"
    },
    {
        "name": "Коктейль",
        "id": "cocktail"
    },
    {
        "name": "Аперитив – Дижестив",
        "id": "aperitiv"
    }
]
const ALCO_CATEGORY_AZ = []
const ALCO_CATEGORY_EN = []

const ALCO_LIST_RU = [
    {
        "name": "Домашнее Регион Кахетия",
        "ingredient": "2020 (Грузия) - 0,75 lt",
        "price": "35",
        "src": "",
        "category": "winealco"
    },
    {
        "name": "Джаганат",
        "ingredient": "егермейстер, апельсиновый сок",
        "price": "12",
        "src": "",
        "category": "cocktail"
    },
    {
        "name": "Санрайз",
        "ingredient": "текилла,  апельсиновый сок",
        "price": "15",
        "src": "",
        "category": "cocktail"
    },
    {
        "name": "Сангрия",
        "ingredient": "домашнее вино со свежими сезонными фруктами 0.75 лт",
        "price": "45",
        "src": "",
        "category": "cocktail"
    },
    {
        "name": "Jägermeister – (Германия) (0,5\u00A0cl)",
        "ingredient": "настойка из 56 различных видов трав и специй",
        "price": "5",
        "src": "",
        "category": "aperitiv"
    },
    {
        "name": "Текила Сауза Голд – (Куба) (0,5\u00A0cl)",
        "ingredient": "натуральная агава  ",
        "price": "9",
        "src": "",
        "category": "aperitiv"
    }
]
const ALCO_LIST_AZ = []
const ALCO_LIST_EN = []