import { useI18n } from 'vue-i18n'

export const useFoodList = () => {
    const { locale } = useI18n()
    const foods = computed(() => {
        if (locale.value === 'ru') {
            return FOOD_LIST_RU
        } else if (locale.value === 'az') {
            return FOOD_LIST_AZ
        } else if (locale.value === 'en') {
            return FOOD_LIST_EN
        }
        return []
    })

    const category = computed(() => {
        if (locale.value === 'ru') {
            return CATEGORY_FOOD_RU
        } else if (locale.value === 'az') {
            return CATEGORY_FOOD_AZ
        } else if (locale.value === 'en') {
            return CATEGORY_FOOD_EN
        }
        return []
    })

    return { foods, category }
}
const CATEGORY_FOOD_RU = [
    {
        "name": "Супы",
        "id": "soup"
    },
    {
        "name": "Салаты",
        "id": "salad"
    },
    {
        "name": "Основные блюда",
        "id": "main"
    },
    {
        "name": "Десерты",
        "id": "desert",
        "title": "Без яиц - (Bегетариан)"
    },
]
const CATEGORY_FOOD_AZ = [
    {
        "name": "",
        "id": "soup"
    },
    {
        "name": "",
        "id": "salad"
    },
    {
        "name": "",
        "id": "main"
    },
    {
        "name": "",
        "id": "desert"
    },
]
const CATEGORY_FOOD_EN = [
    {
        "name": "",
        "id": "soup"
    },
    {
        "name": "",
        "id": "salad"
    },
    {
        "name": "",
        "id": "main"
    },
    {
        "name": "",
        "id": "desert"
    },
]
const FOOD_LIST_RU = [
    {
        "country": "Индия",
        "name": "Холодный Суп Райта (подходит для сыроедов)",
        "ingredient": "(ВЕГЕТАРИАН) йогурт, огурцы, ассорти зелень, мята и специи",
        "price": "6",
        "src": "images/menu/soup/1.webp",
        "category": "soup"
    },
    {
        "country": "Греция",
        "name": "Крем Суп из Грибов",
        "ingredient": "(ВЕГАН или ВЕГЕТАРИАН) подается с сухарями, грибы, сливки, картофель и специи",
        "price": "7",
        "src": "images/menu/soup/2.webp",
        "category": "soup"
    },
    {
        "country": "Испания",
        "name": "Крем Суп из Красной Капусты",
        "ingredient": "(ВЕГАН или ВЕГЕТАРИАН) подается с сухарями, красная капуста, сливки, картофель и специи",
        "price": "6",
        "src": "images/menu/soup/3.webp",
        "category": "soup"
    },
    {
        "country": "Япония",
        "name": "Мисо Суп – (низкокалорийное блюдо)",
        "ingredient": "(ВЕГАН или ВЕГЕТАРИАН) мисо – соевая паста, сыр панир, морские водоросли, болгарский перец и специи, подается с рисом на гарнир   ",
        "price": "7",
        "src": "images/menu/soup/4.webp",
        "category": "soup"
    },
    {
        "country": "Морокко",
        "name": "Крем Суп из Шпината",
        "ingredient": "(ВЕГАН или ВЕГЕТАРИАН) подается с сухарями, шпинат, сливки, картофель и специи ",
        "price": "6",
        "src": "images/menu/soup/5.webp",
        "category": "soup"
    },
    {
        "country": "Ливия",
        "name": "Свежий Салат подходит для сыроедов - низкокалорийное блюдо ",
        "ingredient": "(ВЕГАН или ВЕГЕТАРИАН) зеленый салат, помидоры, огурцы, болгарский перец, грецкие орехи, апельсина – горчичная заправка",
        "price": "8",
        "src": "images/menu/salad/1.webp",
        "category": "salad"
    },
    {
        "country": "Россия",
        "name": "Салат Шуба",
        "ingredient": "(ВЕГАН или ВЕГЕТАРИАН) свекла, картофель, морковь, баклажаны, морские водоросли, домашний веганский майонез и специальная серная соль",
        "price": "7",
        "src": "images/menu/salad/2.webp",
        "category": "salad"
    },
    {
        "country": "Южная Африка",
        "name": "Салат из Брокколи и Авокадо подходит для сыроедов, низкокалорийное блюдо",
        "ingredient": "(ВЕГАН или ВЕГЕТАРИАН) брокколи, авокадо, помидоры, цукини, шпинат, салат айсберг, орехи кешью, оливковое масло, лимонный сок и зелень",
        "price": "9",
        "src": "images/menu/salad/3.webp",
        "category": "salad"
    },
    {
        "country": "Италия",
        "name": "Традиционный Салат Цезарь",
        "ingredient": "(ВЕГАН или ВЕГЕТАРИАН) на выбор домашний ВЕГАНСКИЙ соус или ВЕГАНСКИЙ ЧЕСНОЧНЫЙ соус (салат айсберг, помидоры, соевое мясо, сыр пармезан, шпинат, лимонный сок и сухари)",
        "price": "8",
        "src": "images/menu/salad/4.webp",
        "category": "salad"
    },
    {
        "country": "Иран",
        "name": "Крем Суп из Шпината",
        "ingredient": "Хумус (ВЕГАН или ВЕГЕТАРИАН) пюре из нута, оливковое масло, кунжутная паста, помидоры и специи",
        "price": "7",
        "src": "images/menu/salad/5.webp",
        "category": "salad"
    },
    {
        "country": "Израиль",
        "name": "Жареный Рулет с Фалафелем",
        "ingredient": "(выбор ВЕГАНСКОГО или ЧЕСНОЧНОГО соуса) местный домашний лаваш, котлета из нута, салат айсберг, шпинат, помидор, соленые огурцы",
        "price": "9",
        "src": "images/menu/main/1.webp",
        "category": "main"
    },
    {
        "country": "Мексика",
        "name": "Острый Буррито на Гриле",
        "ingredient": "ВЕГАН или ВЕГЕТАРИАН) местный домашний лаваш, кусочки соевого мяса, помидоры, сладкая кукуруза, красная фасоль, сыр моцарелла, болгарский перец, шпинат, салат айсберг с острым домашним соусом Сальса",
        "price": "9",
        "src": "images/menu/main/2.webp",
        "category": "main"
    },
    {
        "country": "Таиланд",
        "name": "Жареная Лапша Вок – (пшеничная или гречневая лапша)",
        "ingredient": "(ВЕГАН с соевым мясом или ВЕГЕТАРИАН с сыром панир) - уточните уровень остроты - болгарский перец, морковь, цукини, кунжутное масло, соевый соус",
        "price": "10",
        "src": "images/menu/main/3.webp",
        "category": "main"
    },
    {
        "country": "Малазия",
        "name": "Жареный Рис (БЕЗ ГЛЮТЕНА)",
        "ingredient": "(ВЕГАНСКИЙ с соевым мясом или ВЕГЕТАРИАН с сыром панир) - уточните уровень остроты - рис басмати, болгарский перец, морковь, цукини, кунжутное масло, соевый соус",
        "price": "10",
        "src": "images/menu/main/4.webp",
        "category": "main"
    },
    {
        "country": "США",
        "name": "Специальный Веганский Бургер (Beyond Meat)",
        "ingredient": "(выбор специального ЧЕСНОЧНОГО соуса или специального ВЕГАНСКОГО соуса) булочка с добавкой свекольного сока, соленые огурцы, помидор, салат айсберг, подается с домашними дольками картофеля и кетчуп",
        "price": "18",
        "src": "images/menu/main/5.webp",
        "category": "main"
    },
    {
        "country": "США",
        "name": "Специальный Вегетарианский Бургер с Сыром (Beyond Meat)",
        "ingredient": "(выбор ЧЕСНОЧНОГО соуса или ВЕГАНСКОГО соуса) булочка с добавкой свекольного сока, голландский сыр, соленые огурцы, помидор, салат айсберг, подается с домашними дольками картофеля и кетчуп",
        "price": "19",
        "src": "images/menu/main/6.webp",
        "category": "main"
    },
    {
        "country": "Азербайджан",
        "name": "Долма из Виноградных Листьев",
        "ingredient": "(ВЕГЕТАРИАН) рис басмати, ассорти зелень, творог и специи - подается со сметаной и сухарями",
        "price": "10",
        "src": "images/menu/main/7.webp",
        "category": "main"
    },
    {
        "country": "Грузия",
        "name": "Жареные Хинкали",
        "ingredient": " (ВЕГАН или ВЕГЕТАРИАН) – ваш выбор с обычной сметаной или специальный веганский соус или томатный соус (пшеничная мука, соевое мясо, болгарский перец, смесь трав, помидор и специи)",
        "price": "9",
        "src": "images/menu/main/8.webp",
        "category": "main"
    },
    {
        "country": "Франция",
        "name": "Паста фарфалле (макароны БЕЗ ГЛЮТЕНА дополнительно 5 AZN)",
        "ingredient": "(ВЕГЕТАРИАН) Сыр моцарелла, шпинат, орехи кешью, помидоры черри, горчица и оливковое масло",
        "price": "12",
        "src": "images/menu/main/9.webp",
        "category": "main"
    },
    {
        "country": "Оман",
        "name": "Пенне в Арабском стиле – макароны БЕЗ ГЛЮТЕНА дополнительно 5 AZN",
        "ingredient": "(ВЕГАН)Авокадо, болгарский перец, морковь, баклажан, томатный соус, орехи кешью и оливковое масло",
        "price": "10",
        "src": "images/menu/main/10.webp",
        "category": "main"
    },
    {
        "country": "",
        "name": "“Де Рама” Боул",
        "ingredient": "(ВЕГАН) Хумус, рис, фалафель, огурцы, черри помидоры, красная капуста и ассорти зелень",
        "price": "15",
        "src": "images/menu/main/11.webp",
        "category": "main"
    },
    {
        "country": "",
        "name": "“Де Рама” Боул",
        "ingredient": "(ВЕГЕТАРИАН) Рис, хумус, огурцы, черри помидоры, красная капуста, сыр панир и ассорти зелень",
        "price": "15",
        "src": "images/menu/main/12.webp",
        "category": "main"
    },
    {
        "country": "Турция",
        "name": "Вегетарианская Шаурма (Beyond Meat)",
        "ingredient": "(выбор специального ЧЕСНОЧНОГО соуса или специального ВЕГАНСКОГО соуса) местный лаваш, сыр Моцарелла, соленые огурцы, помидор, салат айсберг, подается с домашними дольками картофеля и кетчуп",
        "price": "19",
        "src": "images/menu/main/13.webp",
        "category": "main"
    },
    {
        "country": "Турция",
        "name": "Веганская Шаурма (Beyond Meat)",
        "ingredient": "(выбор специального ЧЕСНОЧНОГО соуса или специального ВЕГАНСКОГО соуса) местный лаваш, соленые огурцы, помидор, салат айсберг, подается с домашними дольками картофеля и кетчуп",
        "price": "18",
        "src": "images/menu/main/14.webp",
        "category": "main"
    },
    {
        "country": "Россия",
        "name": "Грибной Жульен",
        "ingredient": "(ВЕГЕТАРИАН) - Грибы сливки сыр Моцарелла или (ВЕГАН) - Грибы, кокосовые сливки, картошка",
        "price": "9",
        "src": "images/menu/main/15.webp",
        "category": "main"
    },
    {
        "country": "Индия",
        "name": "Чана Дал (нут) – Острое блюдо",
        "ingredient": "Рис с шафраном, дал из нута с гарам масала, асафетида, помидоры, имбирь, кинза, сливочное масло, тмин, перец чили, гвоздика, куркума, куркума, семена горчицы, корица, сладкая паприка, кориандр",
        "price": "15",
        "src": "images/menu/main/16.webp",
        "category": "main"
    },
    {
        "country": "",
        "name": "Медовый торт",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/1.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Тирамису Орео & Какао",
        "ingredient": "",
        "price": "9",
        "src": "images/menu/dessert/2.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Сникерс",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/3.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Чизкейк",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/4.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Ферреро Рошан",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/5.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Морковный торт (ВЕГАН)",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/dessert/6.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Мороженое (3 шарика)",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/dessert/7.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Рафаелло (5 шариков)",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/dessert/8.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Сырники",
        "ingredient": "",
        "price": "9",
        "src": "images/menu/dessert/9.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Ассорти из сезонных фруктов",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/10.webp",
        "category": "desert"
    }
]

const FOOD_LIST_AZ = [
    {
        "name": "",
        "country": "",

    }
]

const FOOD_LIST_EN = [
    {
        "name": "",
        "country": "",

    }
]