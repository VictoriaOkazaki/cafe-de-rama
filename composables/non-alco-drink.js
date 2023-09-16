import { useI18n } from 'vue-i18n'

export const useDrinkList = () => {
    const { locale } = useI18n()
    const drinks = computed(() => {
        if (locale.value === 'ru') {
            return DRINK_LIST_RU
        } else if (locale.value === 'az') {
            return DRINK_LIST_AZ
        } else if (locale.value === 'en') {
            return DRINK_LIST_EN
        }
        return []
    })

    const category = computed(() => {
        if (locale.value === 'ru') {
            return CATEGORY_DRINK_RU
        } else if (locale.value === 'az') {
            return CATEGORY_DRINK_AZ
        } else if (locale.value === 'en') {
            return CATEGORY_DRINK_EN
        }
        return []
    })

    return { drinks, category }
}

const CATEGORY_DRINK_RU = [
    {
        "name": "Кофе",
        "id": "cofe",
        "title": "(с кофеином или без) - ВЫБЕРИТЕ ТИП МОЛОКА"
    },
    {
        "name": "Чайник чая",
        "id": "teapot"
    },
    {
        "name": "Чашка чая",
        "id": "cup"
    },
    {
        "name": "Вода",
        "id": "water"
    },
    {
        "name": "Холодные напитки",
        "id": "cold"
    },
    {
        "name": "Свежевыжатые соки",
        "id": "juice"
    },
    {
        "name": "Вино(безалкг.)",
        "id": "winenonalco"
    },
    {
        "name": "Пиво(безалкг.)",
        "id": "beernonalco"
    },
    {
        "name": "Моктейль",
        "id": "mocktail"
    },
]
const CATEGORY_DRINK_AZ = []
const CATEGORY_DRINK_EN = []

const DRINK_LIST_RU = [
    {
        "name": "Капучино",
        "ingredient": "",
        "price": "5",
        "src": "",
        "category": "cofe"
    },
    {
        "name": "Американо",
        "ingredient": "",
        "price": "3",
        "src": "",
        "category": "cofe"
    },
    {
        "name": "Одинарный или двойной эспрессо ",
        "ingredient": "",
        "price": "3",
        "src": "",
        "category": "cofe"
    },
    {
        "name": "Кофе латте",
        "ingredient": "",
        "price": "5",
        "src": "",
        "category": "cofe"
    },
    {
        "name": "Кофе по-турецки с мороженым",
        "ingredient": "",
        "price": "8",
        "src": "",
        "category": "cofe"
    },
    {
        "name": "Цикорий",
        "ingredient": "",
        "price": "4",
        "src": "",
        "category": "cofe"
    },
    {
        "name": "Кофе со льдом",
        "ingredient": "",
        "price": "5",
        "src": "",
        "category": "cofe"
    },
    {
        "name": "Холодный Шейк Латте ",
        "ingredient": "",
        "price": "8",
        "src": "",
        "category": "cofe"
    },
    {
        "name": "Сироп",
        "ingredient": "",
        "price": "1",
        "src": "",
        "category": "cofe"
    },
    {
        "name": "Кокосовое Молоко",
        "ingredient": "",
        "price": "4",
        "src": "",
        "category": "cofe"
    },
    {
        "name": "Зеленый чай",
        "ingredient": "c жасмином или фруктами",
        "price": "8",
        "src": "",
        "category": "teapot"
    },
    {
        "name": "Африканский ройбуш",
        "ingredient": "",
        "price": "8",
        "src": "",
        "category": "teapot"
    },
    {
        "name": "Азиатский гибискус",
        "ingredient": "",
        "price": "8",
        "src": "",
        "category": "teapot"
    },
    {
        "name": "Гречишный Чай",
        "ingredient": "",
        "price": "8",
        "src": "",
        "category": "teapot"
    },
    {
        "name": "Тимьян с гвоздикой",
        "ingredient": "",
        "price": "8",
        "src": "",
        "category": "teapot"
    },
    {
        "name": "Иван Чай",
        "ingredient": "",
        "price": "8",
        "src": "",
        "category": "teapot"
    },
    {
        "name": "Туласи Деви",
        "ingredient": "святой базилик",
        "price": "3",
        "src": "",
        "category": "cup"
    },
    {
        "name": "Pомашка",
        "ingredient": "",
        "price": "3",
        "src": "",
        "category": "cup"
    },
    {
        "name": "Mята перечная",
        "ingredient": "",
        "price": "3",
        "src": "",
        "category": "cup"
    },
    {
        "name": "Мистика",
        "ingredient": "черный чай, корица, листья ежевики, имбирь, ваниль, гвоздика",
        "price": "3",
        "src": "",
        "category": "cup"
    },
    {
        "name": "Голубая Бабочка – Clitoria Ternatea (средство для зрения)",
        "ingredient": "",
        "price": "5",
        "src": "",
        "category": "cup"
    },
    {
        "name": "Сираб",
        "ingredient": "(с газом или без) 0,5lt",
        "price": "3.5",
        "src": "",
        "category": "water"
    },
    {
        "name": "Вода",
        "ingredient": "(настоянная в медном термусе) 0,18 cl",
        "price": "2",
        "src": "",
        "category": "water"
    },
    {
        "name": "Вода",
        "ingredient": "(настоянная в серебренном стакане) 0,18 cl",
        "price": "3",
        "src": "",
        "category": "water"
    },
    {
        "name": "Лимонад домашний",
        "ingredient": "(сироп на выбор)",
        "price": "6",
        "src": "",
        "category": "cold"
    },
    {
        "name": "Холодный Чай",
        "ingredient": "(сироп на выбор)",
        "price": "6",
        "src": "",
        "category": "cold"
    },
    {
        "name": "Лимонад баночный",
        "ingredient": "(манго или лайм)",
        "price": "4",
        "src": "",
        "category": "cold"
    },
    {
        "name": "Комбуча",
        "ingredient": "",
        "price": "5",
        "src": "",
        "category": "cold"
    },
    {
        "name": "Шиповник",
        "ingredient": "",
        "price": "3",
        "src": "",
        "category": "cold"
    },
    {
        "name": "Pepsi Cola",
        "ingredient": "",
        "price": "4",
        "src": "",
        "category": "cold"
    },
    {
        "name": "Coca Cola Zero",
        "ingredient": "",
        "price": "4",
        "src": "",
        "category": "cold"
    },
    {
        "name": "Детокс",
        "ingredient": "(уксусный напиток)",
        "price": "3",
        "src": "",
        "category": "cold"
    },
    {
        "name": "Яблоко",
        "ingredient": "",
        "price": "6",
        "src": "",
        "category": "juice"
    },
    {
        "name": "Морковь",
        "ingredient": "",
        "price": "6",
        "src": "",
        "category": "juice"
    },
    {
        "name": "Апельсин",
        "ingredient": "",
        "price": "7",
        "src": "",
        "category": "juice"
    },
    {
        "name": "Грейпфрут",
        "ingredient": "",
        "price": "8",
        "src": "",
        "category": "juice"
    },
    {
        "name": "Сезонные Фрукты",
        "ingredient": "",
        "price": "5",
        "src": "",
        "category": "juice"
    },
    {
        "name": "Розовое Рубаи",
        "ingredient": "Азербайджан 2018 (Полусладкое) - 0,75lt",
        "price": "18",
        "src": "",
        "category": "winenonalco"
    },
    {
        "name": "Красное Рубаи",
        "ingredient": "Азербайджан 2018 (Полусладкое) - 0,75lt",
        "price": "18",
        "src": "",
        "category": "winenonalco"
    },
    {
        "name": "Белое Кахраба",
        "ingredient": "Азербайджан 2018 (Полусладкое) - 0,75lt",
        "price": "18",
        "src": "",
        "category": "winenonalco"
    },
    {
        "name": "Красное “Just 0”",
        "ingredient": "Франция 2022 (Полусухое) - 0,75lt",
        "price": "25",
        "src": "",
        "category": "winenonalco"
    },
    {
        "name": "Белое “Just 0”",
        "ingredient": "Франция 2022 (Полусухое) - 0,75lt",
        "price": "25",
        "src": "",
        "category": "winenonalco"
    },
    {
        "name": "Балтика - Россия (0,5lt)",
        "ingredient": "",
        "price": "6",
        "src": "",
        "category": "beernonalco"
    },
    {
        "name": "Heineken - Голандия (0,33 lt)",
        "ingredient": "",
        "price": "6",
        "src": "",
        "category": "beernonalco"
    },
    {
        "name": "Mохито",
        "ingredient": "(на выбор сироп)",
        "price": "8",
        "src": "",
        "category": "mocktail"
    },
    {
        "name": "Инь Ян",
        "ingredient": "апельсиновый сок, карамельный сироп и эспрессо кофе",
        "price": "10",
        "src": "",
        "category": "mocktail"
    },
    {
        "name": "Сангрия",
        "ingredient": "(вино со свежими сезонными фруктами) 0.75lt",
        "price": "29",
        "src": "",
        "category": "mocktail"
    }
]
const DRINK_LIST_AZ = []
const DRINK_LIST_EN = []