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
const CATEGORY_DRINK_AZ = [
    {
        "name": "Qəhvə",
        "id": "cofe",
        "title": "(kafein yada kafeinsiz) - SÜD NÖVÜN SEÇİN"
    },
    {
        "name": "Çay (çaynik)",
        "id": "teapot"
    },
    {
        "name": "Çay (fincanda)",
        "id": "cup"
    },
    {
        "name": "Su",
        "id": "water"
    },
    {
        "name": "Sərinləşdirici içki",
        "id": "cold"
    },
    {
        "name": "Yeni sıxılmış meyvə çirəsi",
        "id": "juice"
    },
    {
        "name": "Şərab(alkoqolsuz)",
        "id": "winenonalco"
    },
    {
        "name": "Pivə(alkoqolsuz)",
        "id": "beernonalco"
    },
    {
        "name": "Moktail",
        "id": "mocktail"
    },
]
const CATEGORY_DRINK_EN = [
    {
        "name": "Coffee",
        "id": "cofe",
        "title": "(with or without caffeine) - ASK FOR MILK TYPE"
    },
    {
        "name": "Pot of tea",
        "id": "teapot"
    },
    {
        "name": "Cup of tea",
        "id": "cup"
    },
    {
        "name": "Water",
        "id": "water"
    },
    {
        "name": "Soft drink",
        "id": "cold"
    },
    {
        "name": "Fresh juice",
        "id": "juice"
    },
    {
        "name": "Wine(non-alco)",
        "id": "winenonalco"
    },
    {
        "name": "Beer(non-alco)",
        "id": "beernonalco"
    },
    {
        "name": "Mocktail",
        "id": "mocktail"
    },
]

const DRINK_LIST_EN = [
    {
        "name": "Cappuccino",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cofe/1.webp",
        "category": "cofe"
    },
    {
        "name": "Americano",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cofe/2.webp",
        "category": "cofe"
    },
    {
        "name": "Single or Double Espresso",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cofe/3.webp",
        "category": "cofe"
    },
    {
        "name": "Coffee Latte",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cofe/4.webp",
        "category": "cofe"
    },
    {
        "name": "Turkish Coffee with Ice Cream",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/cofe/5.webp",
        "category": "cofe"
    },
    {
        "name": "Chicory",
        "ingredient": "",
        "price": "4",
        "src": "images/menu/cofe/6.webp",
        "category": "cofe"
    },
    {
        "name": "Iced Coffee",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cofe/7.webp",
        "category": "cofe"
    },
    {
        "name": "Сold Shaked Latte",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/cofe/8.webp",
        "category": "cofe"
    },
    {
        "name": "Syrup",
        "ingredient": "",
        "price": "1",
        "src": "images/menu/cofe/9.webp",
        "category": "cofe"
    },
    {
        "name": "Coconut Milk",
        "ingredient": "",
        "price": "4",
        "src": "images/menu/cofe/10.webp",
        "category": "cofe"
    },
    {
        "name": "Green Tea",
        "ingredient": "with Jasmine or with Fruits",
        "price": "8",
        "src": "images/menu/teapot/1.webp",
        "category": "teapot"
    },
    {
        "name": "African Rooibos",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/2.webp",
        "category": "teapot"
    },
    {
        "name": "Asian Hibiscus",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/3.webp",
        "category": "teapot"
    },
    {
        "name": "Buckwheat Tea",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/4.webp",
        "category": "teapot"
    },
    {
        "name": "Thyme with Clove",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/5.webp",
        "category": "teapot"
    },
    {
        "name": "Ivan Chai",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/6.webp",
        "category": "teapot"
    },
    {
        "name": "Black Earl Gray",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/7.webp",
        "category": "teapot"
    },
    {
        "name": "Tulasi Devi",
        "ingredient": "Holy Basil",
        "price": "3",
        "src": "images/menu/cup/1.webp",
        "category": "cup"
    },
    {
        "name": "Chamomile",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cup/2.webp",
        "category": "cup"
    },
    {
        "name": "Peppermint",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cup/3.webp",
        "category": "cup"
    },
    {
        "name": "Mystic",
        "ingredient": "black tea, cinnamon, blackberry leaves, ginger, vanilla, clove",
        "price": "3",
        "src": "images/menu/cup/4.webp",
        "category": "cup"
    },
    {
        "name": "Blue Tea (Butterfly Pea, Clitoria Ternatea ) - eye remedy",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cup/5.webp",
        "category": "cup"
    },
    {
        "name": "Sirab",
        "ingredient": "(Still or Sparkling) 0,5lt",
        "price": "3.5",
        "src": "images/menu/water/1.webp",
        "category": "water"
    },
    {
        "name": "Special Copper Bottled Water 0,18cl",
        "ingredient": "",
        "price": "2",
        "src": "images/menu/water/2.webp",
        "category": "water"
    },
    {
        "name": "Water Kept in Silver Cup 0,18cl",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/water/3.webp",
        "category": "water"
    },
    {
        "name": "Homemade Lemonade",
        "ingredient": "(ask for selection)",
        "price": "6",
        "src": "images/menu/cold/1.webp",
        "category": "cold"
    },
    {
        "name": "Homemade Ice Tea",
        "ingredient": "(ask for selection)",
        "price": "6",
        "src": "images/menu/cold/2.webp",
        "category": "cold"
    },
    {
        "name": "Lemonade Can",
        "ingredient": "(Mango or Lime)",
        "price": "4",
        "src": "images/menu/cold/3.webp",
        "category": "cold"
    },
    {
        "name": "Kombucha",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cold/4.webp",
        "category": "cold"
    },
    {
        "name": "Rose Hip",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cold/5.webp",
        "category": "cold"
    },
    {
        "name": "Pepsi",
        "ingredient": "",
        "price": "4",
        "src": "images/menu/cold/6.webp",
        "category": "cold"
    },
    {
        "name": "Coca Cola Zero",
        "ingredient": "",
        "price": "4",
        "src": "images/menu/cold/7.webp",
        "category": "cold"
    },
    {
        "name": "Detox",
        "ingredient": "(Vinegar Drink)",
        "price": "3",
        "src": "images/menu/cold/8.webp",
        "category": "cold"
    },
    {
        "name": "Apple",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/juice/1.webp",
        "category": "juice"
    },
    {
        "name": "Carrot",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/juice/2.webp",
        "category": "juice"
    },
    {
        "name": "Orange",
        "ingredient": "",
        "price": "7",
        "src": "images/menu/juice/3.webp",
        "category": "juice"
    },
    {
        "name": "Grapefruit",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/juice/4.webp",
        "category": "juice"
    },
    {
        "name": "Seasonal Fruits",
        "ingredient": "",
        "price": "5",
        "src": "",
        "category": "juice"
    },
    {
        "name": "Rose Rubai",
        "ingredient": "Azerbaijan 2018 (Semi Sweet) 0,75lt",
        "price": "18",
        "src": "images/menu/wine-nonalco/1.webp",
        "category": "winenonalco"
    },
    {
        "name": "Red Rubai",
        "ingredient": "Azerbaijan 2018 (Semi Sweet) 0,75lt",
        "price": "18",
        "src": "images/menu/wine-nonalco/2.webp",
        "category": "winenonalco"
    },
    {
        "name": "White Kahraba",
        "ingredient": "Azerbaijan 2018 (Semin Sweet) 0,75lt",
        "price": "18",
        "src": "images/menu/wine-nonalco/3.webp",
        "category": "winenonalco"
    },
    {
        "name": "Red “Just 0”",
        "ingredient": "France 2022 (Semi Dry) 0,75lt",
        "price": "25",
        "src": "images/menu/wine-nonalco/4.webp",
        "category": "winenonalco"
    },
    {
        "name": "White “Just 0”",
        "ingredient": "France 2022 (Semi Dry) 0,75lt",
        "price": "25",
        "src": "images/menu/wine-nonalco/5.webp",
        "category": "winenonalco"
    },
    {
        "name": "Baltika (Russia) 0,5lt",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/beer/1.webp",
        "category": "beernonalco"
    },
    {
        "name": "Heineken (Holland) 0,33lt",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/beer/2.webp",
        "category": "beernonalco"
    },
    {
        "name": "Mojito",
        "ingredient": "(your choice of syrup)",
        "price": "8",
        "src": "images/menu/mocktail/1.webp",
        "category": "mocktail"
    },
    {
        "name": "Yin & Yang",
        "ingredient": "orange juice, caramel syrup and double espresso",
        "price": "10",
        "src": "images/menu/mocktail/2.webp",
        "category": "mocktail"
    },
    {
        "name": "Sangriya",
        "ingredient": "(wine with fresh seasonal fruits) 0,75lt",
        "price": "29",
        "src": "images/menu/mocktail/3.webp",
        "category": "mocktail"
    }
]
const DRINK_LIST_AZ = [
    {
        "name": "Kapuçino",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cofe/1.webp",
        "category": "cofe"
    },
    {
        "name": "Amerikano",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cofe/2.webp",
        "category": "cofe"
    },
    {
        "name": "Tək və ya ikiqat Espresso",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cofe/3.webp",
        "category": "cofe"
    },
    {
        "name": "Kofe Latte",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cofe/4.webp",
        "category": "cofe"
    },
    {
        "name": "Türk Qəhvəsi Dondurma ilə",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/cofe/5.webp",
        "category": "cofe"
    },
    {
        "name": "Hindiba",
        "ingredient": "",
        "price": "4",
        "src": "images/menu/cofe/6.webp",
        "category": "cofe"
    },
    {
        "name": "Buzlu Qəhvə",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cofe/7.webp",
        "category": "cofe"
    },
    {
        "name": "Soyuq Latte ",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/cofe/8.webp",
        "category": "cofe"
    },
    {
        "name": "Sirop",
        "ingredient": "",
        "price": "1",
        "src": "images/menu/cofe/9.webp",
        "category": "cofe"
    },
    {
        "name": "Kokos Südü (fincan)",
        "ingredient": "",
        "price": "4",
        "src": "images/menu/cofe/10.webp",
        "category": "cofe"
    },
    {
        "name": "Yaşıl çay",
        "ingredient": "jasmin ya da meyvəli",
        "price": "8",
        "src": "images/menu/teapot/1.webp",
        "category": "teapot"
    },
    {
        "name": "Afrikan Roiboş",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/2.webp",
        "category": "teapot"
    },
    {
        "name": "Asiya Hibiskus",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/3.webp",
        "category": "teapot"
    },
    {
        "name": "Qarabaşaq Çayı",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/4.webp",
        "category": "teapot"
    },
    {
        "name": "Kəklikotu Mixəylə",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/5.webp",
        "category": "teapot"
    },
    {
        "name": "Ivan Çay",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/6.webp",
        "category": "teapot"
    },
    {
        "name": "Qara Berqamont",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/7.webp",
        "category": "teapot"
    },
    {
        "name": "Tulasi Devi",
        "ingredient": "Qüdsi Reyhan",
        "price": "3",
        "src": "images/menu/cup/1.webp",
        "category": "cup"
    },
    {
        "name": "Çobanyastığı",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cup/2.webp",
        "category": "cup"
    },
    {
        "name": "Nanə",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cup/3.webp",
        "category": "cup"
    },
    {
        "name": "Mistika",
        "ingredient": "qara çay, darçın, böyürtkən yarpağı, zəncəfil, vanil, mixək",
        "price": "3",
        "src": "images/menu/cup/4.webp",
        "category": "cup"
    },
    {
        "name": "Mavi Kəpənək - Clitoria Ternatea (göz dərmanı)",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cup/5.webp",
        "category": "cup"
    },
    {
        "name": "Sirab",
        "ingredient": "Qazlı ya Qazsız 0,5lt",
        "price": "3.5",
        "src": "images/menu/water/1.webp",
        "category": "water"
    },
    {
        "name": "Mis Termosda Saxlanılan Su",
        "ingredient": "",
        "price": "2",
        "src": "images/menu/water/2.webp",
        "category": "water"
    },
    {
        "name": "Gümüş Stəkanda Saxlanılan Su",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/water/3.webp",
        "category": "water"
    },
    {
        "name": "Ev sayağı limonad",
        "ingredient": "(sirop çeşidiniz)",
        "price": "6",
        "src": "images/menu/cold/1.webp",
        "category": "cold"
    },
    {
        "name": "Ev sayağı soyuq Çay",
        "ingredient": "(sirop çeşidiniz)",
        "price": "6",
        "src": "images/menu/cold/2.webp",
        "category": "cold"
    },
    {
        "name": "Limonad banka",
        "ingredient": "(Mango ya Laym)",
        "price": "4",
        "src": "images/menu/cold/3.webp",
        "category": "cold"
    },
    {
        "name": "Kombuça",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cold/4.webp",
        "category": "cold"
    },
    {
        "name": "İtburnu",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cold/5.webp",
        "category": "cold"
    },
    {
        "name": "Pepsi",
        "ingredient": "",
        "price": "4",
        "src": "images/menu/cold/6.webp",
        "category": "cold"
    },
    {
        "name": "Coca Cola Zero",
        "ingredient": "",
        "price": "4",
        "src": "images/menu/cold/7.webp",
        "category": "cold"
    },
    {
        "name": "Detoks",
        "ingredient": "(sirkəli içki)",
        "price": "3",
        "src": "images/menu/cold/8.webp",
        "category": "cold"
    },
    {
        "name": "Alma",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/juice/1.webp",
        "category": "juice"
    },
    {
        "name": "Yerkökü",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/juice/2.webp",
        "category": "juice"
    },
    {
        "name": "Portağal",
        "ingredient": "",
        "price": "7",
        "src": "images/menu/juice/3.webp",
        "category": "juice"
    },
    {
        "name": "Greypfrut",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/juice/4.webp",
        "category": "juice"
    },
    {
        "name": "Mövsümə uyğun",
        "ingredient": "",
        "price": "5",
        "src": "",
        "category": "juice"
    },
    {
        "name": "Çəhrayı Rübai",
        "ingredient": "Azərbaycan 2018 (Kəm Şirin) şüşə 0,75lt",
        "price": "18",
        "src": "images/menu/wine-nonalco/1.webp",
        "category": "winenonalco"
    },
    {
        "name": "Qırmızı Rübai",
        "ingredient": "Azərbaycan 2018 (Kəm Şirin) şüşə 0,75lt",
        "price": "18",
        "src": "images/menu/wine-nonalco/2.webp",
        "category": "winenonalco"
    },
    {
        "name": "Ağ Kəhraba",
        "ingredient": "Azərbaycan 2018 (Kəm Şirin) şüşə 0,75lt",
        "price": "18",
        "src": "images/menu/wine-nonalco/3.webp",
        "category": "winenonalco"
    },
    {
        "name": "Qırmızı “Just 0”",
        "ingredient": "Fransa 2022 (Kəm Turş) şüşə 0.75lt",
        "price": "25",
        "src": "images/menu/wine-nonalco/4.webp",
        "category": "winenonalco"
    },
    {
        "name": "Ağ “Just 0",
        "ingredient": "Fransa 2022 (Kəm Turş) şüşə 0.75lt",
        "price": "25",
        "src": "images/menu/wine-nonalco/5.webp",
        "category": "winenonalco"
    },
    {
        "name": "Baltika Pivə (Rusiya) 0,5lt",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/beer/1.webp",
        "category": "beernonalco"
    },
    {
        "name": "Heineken Pivə (Hollanda) 0,33lt",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/beer/2.webp",
        "category": "beernonalco"
    },
    {
        "name": "Moxito",
        "ingredient": "(sirop seçiminiz)",
        "price": "8",
        "src": "images/menu/mocktail/1.webp",
        "category": "mocktail"
    },
    {
        "name": "In & Yan",
        "ingredient": "yeni sıxılmış portağal şirəsi, karamel siropu və espreso qəhvəsi",
        "price": "10",
        "src": "images/menu/mocktail/2.webp",
        "category": "mocktail"
    },
    {
        "name": "Sanqriya",
        "ingredient": "(şərab təzə mövsümü meyvələr ilə) 0.75lt",
        "price": "29",
        "src": "images/menu/mocktail/3.webp",
        "category": "mocktail"
    }
]
const DRINK_LIST_RU = [
    {
        "name": "Капучино",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cofe/1.webp",
        "category": "cofe"
    },
    {
        "name": "Американо",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cofe/2.webp",
        "category": "cofe"
    },
    {
        "name": "Одинарный или двойной эспрессо ",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cofe/3.webp",
        "category": "cofe"
    },
    {
        "name": "Кофе латте",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cofe/4.webp",
        "category": "cofe"
    },
    {
        "name": "Кофе по-турецки с мороженым",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/cofe/5.webp",
        "category": "cofe"
    },
    {
        "name": "Цикорий",
        "ingredient": "",
        "price": "4",
        "src": "images/menu/cofe/6.webp",
        "category": "cofe"
    },
    {
        "name": "Кофе со льдом",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cofe/7.webp",
        "category": "cofe"
    },
    {
        "name": "Холодный Шейк Латте ",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/cofe/8.webp",
        "category": "cofe"
    },
    {
        "name": "Сироп",
        "ingredient": "",
        "price": "1",
        "src": "images/menu/cofe/9.webp",
        "category": "cofe"
    },
    {
        "name": "Кокосовое Молоко",
        "ingredient": "",
        "price": "4",
        "src": "images/menu/cofe/10.webp",
        "category": "cofe"
    },
    {
        "name": "Зеленый чай",
        "ingredient": "c жасмином или фруктами",
        "price": "8",
        "src": "images/menu/teapot/1.webp",
        "category": "teapot"
    },
    {
        "name": "Африканский ройбуш",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/2.webp",
        "category": "teapot"
    },
    {
        "name": "Азиатский гибискус",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/3.webp",
        "category": "teapot"
    },
    {
        "name": "Гречишный Чай",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/4.webp",
        "category": "teapot"
    },
    {
        "name": "Тимьян с гвоздикой",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/5.webp",
        "category": "teapot"
    },
    {
        "name": "Иван Чай",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/6.webp",
        "category": "teapot"
    },
    {
        "name": "Черный Бергамот",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/teapot/7.webp",
        "category": "teapot"
    },
    {
        "name": "Туласи Деви",
        "ingredient": "святой базилик",
        "price": "3",
        "src": "images/menu/cup/1.webp",
        "category": "cup"
    },
    {
        "name": "Pомашка",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cup/2.webp",
        "category": "cup"
    },
    {
        "name": "Mята перечная",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cup/3.webp",
        "category": "cup"
    },
    {
        "name": "Мистика",
        "ingredient": "черный чай, корица, листья ежевики, имбирь, ваниль, гвоздика",
        "price": "3",
        "src": "images/menu/cup/4.webp",
        "category": "cup"
    },
    {
        "name": "Голубая Бабочка – Clitoria Ternatea (средство для зрения)",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cup/5.webp",
        "category": "cup"
    },
    {
        "name": "Сираб",
        "ingredient": "(с газом или без) 0,5lt",
        "price": "3.5",
        "src": "images/menu/water/1.webp",
        "category": "water"
    },
    {
        "name": "Вода",
        "ingredient": "(настоянная в медном термусе) 0,18 cl",
        "price": "2",
        "src": "images/menu/water/2.webp",
        "category": "water"
    },
    {
        "name": "Вода",
        "ingredient": "(настоянная в серебренном стакане) 0,18 cl",
        "price": "3",
        "src": "images/menu/water/3.webp",
        "category": "water"
    },
    {
        "name": "Лимонад домашний",
        "ingredient": "(сироп на выбор)",
        "price": "6",
        "src": "images/menu/cold/1.webp",
        "category": "cold"
    },
    {
        "name": "Холодный Чай",
        "ingredient": "(сироп на выбор)",
        "price": "6",
        "src": "images/menu/cold/2.webp",
        "category": "cold"
    },
    {
        "name": "Лимонад баночный",
        "ingredient": "(манго или лайм)",
        "price": "4",
        "src": "images/menu/cold/3.webp",
        "category": "cold"
    },
    {
        "name": "Комбуча",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/cold/4.webp",
        "category": "cold"
    },
    {
        "name": "Шиповник",
        "ingredient": "",
        "price": "3",
        "src": "images/menu/cold/5.webp",
        "category": "cold"
    },
    {
        "name": "Pepsi Cola",
        "ingredient": "",
        "price": "4",
        "src": "images/menu/cold/6.webp",
        "category": "cold"
    },
    {
        "name": "Coca Cola Zero",
        "ingredient": "",
        "price": "4",
        "src": "images/menu/cold/7.webp",
        "category": "cold"
    },
    {
        "name": "Детокс",
        "ingredient": "(уксусный напиток)",
        "price": "3",
        "src": "images/menu/cold/8.webp",
        "category": "cold"
    },
    {
        "name": "Яблоко",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/juice/1.webp",
        "category": "juice"
    },
    {
        "name": "Морковь",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/juice/2.webp",
        "category": "juice"
    },
    {
        "name": "Апельсин",
        "ingredient": "",
        "price": "7",
        "src": "images/menu/juice/3.webp",
        "category": "juice"
    },
    {
        "name": "Грейпфрут",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/juice/4.webp",
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
        "src": "images/menu/wine-nonalco/1.webp",
        "category": "winenonalco"
    },
    {
        "name": "Красное Рубаи",
        "ingredient": "Азербайджан 2018 (Полусладкое) - 0,75lt",
        "price": "18",
        "src": "images/menu/wine-nonalco/2.webp",
        "category": "winenonalco"
    },
    {
        "name": "Белое Кахраба",
        "ingredient": "Азербайджан 2018 (Полусладкое) - 0,75lt",
        "price": "18",
        "src": "images/menu/wine-nonalco/3.webp",
        "category": "winenonalco"
    },
    {
        "name": "Красное “Just 0”",
        "ingredient": "Франция 2022 (Полусухое) - 0,75lt",
        "price": "25",
        "src": "images/menu/wine-nonalco/4.webp",
        "category": "winenonalco"
    },
    {
        "name": "Белое “Just 0”",
        "ingredient": "Франция 2022 (Полусухое) - 0,75lt",
        "price": "25",
        "src": "images/menu/wine-nonalco/5.webp",
        "category": "winenonalco"
    },
    {
        "name": "Балтика - Россия (0,5lt)",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/beer/1.webp",
        "category": "beernonalco"
    },
    {
        "name": "Heineken - Голандия (0,33 lt)",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/beer/2.webp",
        "category": "beernonalco"
    },
    {
        "name": "Mохито",
        "ingredient": "(на выбор сироп)",
        "price": "8",
        "src": "images/menu/mocktail/1.webp",
        "category": "mocktail"
    },
    {
        "name": "Инь Ян",
        "ingredient": "апельсиновый сок, карамельный сироп и эспрессо кофе",
        "price": "10",
        "src": "images/menu/mocktail/2.webp",
        "category": "mocktail"
    },
    {
        "name": "Сангрия",
        "ingredient": "(вино со свежими сезонными фруктами) 0.75lt",
        "price": "29",
        "src": "images/menu/mocktail/3.webp",
        "category": "mocktail"
    }
]