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
        "name": "Şorbalar",
        "id": "soup"
    },
    {
        "name": "Salatlar",
        "id": "salad"
    },
    {
        "name": "Əsas yeməklər",
        "id": "main"
    },
    {
        "name": "Şirniyyatlar",
        "id": "desert",
        "title": "Yumurtasız – (Vegetarian)"
    },
]
const CATEGORY_FOOD_EN = [
    {
        "name": "Soups",
        "id": "soup"
    },
    {
        "name": "Salads",
        "id": "salad"
    },
    {
        "name": "Main dishes",
        "id": "main"
    },
    {
        "name": "Desserts",
        "id": "desert",
        "title": "Egg Free – (VEGETARIAN)"
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
        "name": "Хумус",
        "ingredient": "(ВЕГАН или ВЕГЕТАРИАН) пюре из нута, оливковое масло, кунжутная паста, помидоры и специи",
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
        "name": "Ферреро Рошe",
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
        "country": "Hindistan",
        "name": "Soyuq Rayta Şorba – Çiy Qida Növü",
        "ingredient": "(VEGETARİAN) Qatıq, xiyar, göyərti çeşidləri, nanə və ədviyyatlar",
        "price": "6",
        "src": "images/menu/soup/1.webp",
        "category": "soup"
    },
    {
        "country": "Yunanıstan",
        "name": "Qaymaqlı Göbələkli Şorba",
        "ingredient": "(VEGAN və ya VEGETARİAN) çörək kraker ilə verilir, göbələk, qaymaq, kartof və ədviyyatlar",
        "price": "7",
        "src": "images/menu/soup/2.webp",
        "category": "soup"
    },
    {
        "country": "İspaniya",
        "name": "Qaymaqlı Qırmızı Kələm Şorba",
        "ingredient": "(VEGAN və ya VEGETARİAN) Çörək kraker ilə verilir (qırmızı kələm, qaymaq, kartof və ədviyyatlar)",
        "price": "6",
        "src": "images/menu/soup/3.webp",
        "category": "soup"
    },
    {
        "country": "Yaponiya",
        "name": "Miso Şorba – aşağı kalorili yemək",
        "ingredient": "(VEGAN və ya VEGETARİAN) miso – soya pastası, panir pendir, dəniz otu, şirin bibər və adviyyatlar, yanında düyü ilə verilir",
        "price": "7",
        "src": "images/menu/soup/4.webp",
        "category": "soup"
    },
    {
        "country": "Mərakeş",
        "name": "Qaymaqlı Ispanaq Şorba",
        "ingredient": "(VEGAN və ya VEGETARİAN) spanaq, qaymaq, kartof və ədviyyatlar, çörək kraker ilə verilir",
        "price": "6",
        "src": "images/menu/soup/5.webp",
        "category": "soup"
    },
    {
        "country": "Livan",
        "name": "Yaşıl Salat, çiy qida növü, aşağı kalorili yemək",
        "ingredient": "(VEGAN və ya VEGETARİAN) yaşıl salat, pomidor, xiyar, bolqar bibəri, qoz, xardallı portağal şirəsi",
        "price": "8",
        "src": "images/menu/salad/1.webp",
        "category": "salad"
    },
    {
        "country": "Rusiya",
        "name": "Şuba Salatı",
        "ingredient": "(VEGAN və ya VEGETARİAN) çuğundur, kartof, yerkökü, badımcan, dəniz otu & ev sayağı vegan mayonez və xüsusi kükürdlü duz",
        "price": "7",
        "src": "images/menu/salad/2.webp",
        "category": "salad"
    },
    {
        "country": "Cənubi Afrika",
        "name": "Brokoli & Avokado Salatı, çiy qida növü, aşağı kalorili yemək",
        "ingredient": "(VEGAN və ya VEGETARİAN) brokoli, avokado, ispanağ, aysberq kahı, pomidor, tsukini balqabaq, zeytun yağı, limon suyu, keş Hind qozu və göyərtilər",
        "price": "9",
        "src": "images/menu/salad/3.webp",
        "category": "salad"
    },
    {
        "country": "İtaliya",
        "name": "Sezar Salatı",
        "ingredient": "(VEGAN və ya VEGETARİAN) xüsusi ev sayağı adi VEGAN ya SARIMSAQLI VEGAN sousu ilə (aysberq kahı, pomidor, soya əti, parmesan pendiri, ispanağ, limon suyu, çörək krekerlər ilə)",
        "price": "8",
        "src": "images/menu/salad/4.webp",
        "category": "salad"
    },
    {
        "country": "İran",
        "name": "Xumus",
        "ingredient": "(VEGAN və ya VEGETARİAN) noxud püresi, zeytun yağı, küncüd pastası, pomidor və ədviyyatlar",
        "price": "7",
        "src": "images/menu/salad/5.webp",
        "category": "salad"
    },
    {
        "country": "İsrail",
        "name": "Qızardılmış Falafel Bükmə",
        "ingredient": "(seçim ev sayağı VEGAN Sousu ya xüsusi SARIMSAQLI Sous ilə) ev sayağı lavaş, noxudlu kotlet, aysberq kahı, ispanaq, pomidor, turşu xiyar",
        "price": "9",
        "src": "images/menu/main/1.webp",
        "category": "main"
    },
    {
        "country": "Meksika",
        "name": "Qızardılmış İstiotlu Burrito",
        "ingredient": "(VEGAN və ya VEGETARİAN) ev sayağı lavaş, soya ət dilimləri, pomidor, qarğıdalı, qırmızı lobya, mozzarella pendiri, şirin bibər, ispanaq, aysberq kahı və evdə hazırlanmış istiotlu Salsa sous",
        "price": "9",
        "src": "images/menu/main/2.webp",
        "category": "main"
    },
    {
        "country": "Tailand",
        "name": "Qızardılmış Əriştə – (adi un əriştə ya da qarabaşaq undan əriştə)",
        "ingredient": "(VEGAN soya ətlə və ya VEGETARIAN panir pendirlə) – istiotun dərəçəsini soruşun - şirin bibər, yerkökü, zucchini balqabaq, küncüt yağı və soya sousu)",
        "price": "10",
        "src": "images/menu/main/3.webp",
        "category": "main"
    },
    {
        "country": "Malayziya",
        "name": "Qızardılmış Tərəvəzli Düyü – QLUTENSİZ",
        "ingredient": "(VEGAN - soya ətlə və ya VEGETARIAN - panir pendirlə) – istiotun dərəçəsini soruşun (basmati düyü, şirin bibər, yerkökü, zucchini balqabaq, küncüt yağı və soya sousu)",
        "price": "10",
        "src": "images/menu/main/4.webp",
        "category": "main"
    },
    {
        "country": "ABŞ",
        "name": "Xüsusi Vegan Burger (Beyond Meat) ",
        "ingredient": "seçim SARIMSAQLI Sous və ya xüsusi VEGAN Sous) - kənd sayağı kartof və pomidor sousu ilə verilir - çuğundurlu burger çörəyi, xüsusi tərəvəzli VEGAN burgeri, turşu xiyar, pomidor, aysberq kahı",
        "price": "18",
        "src": "images/menu/main/5.webp",
        "category": "main"
    },
    {
        "country": "ABŞ",
        "name": "Xüsusi Vegetarian Burger Pendirlə (Beyond Meat)",
        "ingredient": "seçim SARIMSAQLI Sous və ya xüsusi VEGAN Sous) - kənd sayağı kartof və pomidor sousu ilə verilir - çuğundurlu burger çörəyi, xüsusi tərəvəzli VEGAN burgeri, turşu xiyar, pomidor, aysberq kahı",
        "price": "19",
        "src": "images/menu/main/6.webp",
        "category": "main"
    },
    {
        "country": "Azərbaycan",
        "name": "Üzüm Yarpaq Dolması",
        "ingredient": "(VEGETARİAN) basmati düyü, qarışıq göyərtilər, duzlu  kəsmik və ədviyyatlar, xama və çörək krekerlər ilə verilir",
        "price": "10",
        "src": "images/menu/main/7.webp",
        "category": "main"
    },
    {
        "country": "Gürcüstan",
        "name": "Qızardılmış Xingal",
        "ingredient": "(VEGAN və ya VEGETARİAN) – ağ un xəmir, soya əti, şirin bibər, qarışıq göyərtilər, pomidor və adviyyatlar, xama və ya xüsusi VEGAN sousu ya da pomidor sosu ilə verilir",
        "price": "9",
        "src": "images/menu/main/8.webp",
        "category": "main"
    },
    {
        "country": "Fransa",
        "name": "Farfalle pastası (GLUTENSİZ makaron əlavə 5 AZN)",
        "ingredient": "(VEGETARİAN) Mozzarella pendiri, ispanaq, keş qozu, albalı pomidoru, xardal və zeytun",
        "price": "12",
        "src": "images/menu/main/9.webp",
        "category": "main"
    },
    {
        "country": "Oman",
        "name": "Ərəb Üslubda Makaron (GLUTENSİZ makaron əlavə 5 AZN)",
        "ingredient": "(VEGAN) Avokado, bolqar bibəri, kök, keş qozu, badımcan, pomidor sousu və zeytun yağı",
        "price": "10",
        "src": "images/menu/main/10.webp",
        "category": "main"
    },
    {
        "country": "",
        "name": "“De Rama” Boul",
        "ingredient": "(VEGAN) Düyü, falafel, xiyar, ceri pomidor, qırmızı kələm, xumus, qarışıq göyərtilər",
        "price": "15",
        "src": "images/menu/main/11.webp",
        "category": "main"
    },
    {
        "country": "",
        "name": "“De Rama” Boul",
        "ingredient": "(VEGETARİAN) Düyü, xumus, xiyar, ceri pomidor, panir pendiri, qırmızı kələm, qarışıq göyərtilər",
        "price": "15",
        "src": "images/menu/main/12.webp",
        "category": "main"
    },
    {
        "country": "Türkiyə",
        "name": "Xüsusi Vegetarian Şaurma (Beyond Meat)",
        "ingredient": "(seçim SARIMSAQLI Sous və ya xüsusi VEGAN Sous) - kənd sayağı kartof və pomidor sousu ilə verilir - lavaş çörəyi, xüsusi tərəvəzli VEGAN əti, Mozarella pendiri, turşu xiyar, pomidor, aysberq kahı",
        "price": "19",
        "src": "images/menu/main/13.webp",
        "category": "main"
    },
    {
        "country": "Türkiyə",
        "name": "Xüsusi Vegan Şaurma (Beyond Meat)",
        "ingredient": "(seçim SARIMSAQLI Sous və ya xüsusi VEGAN Sous) - kənd sayağı kartof və pomidor sousu ilə verilir - lavaş çörəyi, xüsusi tərəvəzli VEGAN əti, turşu xiyar, pomidor, aysberq kahı",
        "price": "18",
        "src": "images/menu/main/14.webp",
        "category": "main"
    },
    {
        "country": "Rusiya",
        "name": "Göbələkli Julyen",
        "ingredient": "(VEGETARİAN) göbələk qaymaq Mozarella pendiri ya da (VEGAN) göbələk kokos qaymaq və kartof",
        "price": "9",
        "src": "images/menu/main/15.webp",
        "category": "main"
    },
    {
        "country": "Hindistan",
        "name": "Chana Dal (noxud) – Istiotlu",
        "ingredient": "Zəfəran düyü, Qaram Masala ilə noxud dal, asafetida, pomidor, zəncəfil, cəfəri, kərə yağı, zirə, çili bibəri, mixək, zərdəçal, xardal toxumu, darçın, şirin paprika, keşniş",
        "price": "15",
        "src": "images/menu/main/16.webp",
        "category": "main"
    },
    {
        "country": "",
        "name": "Ballı Tort",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/1.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Tiramisu Oreo & Kakao",
        "ingredient": "",
        "price": "9",
        "src": "images/menu/dessert/2.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Snikers",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/3.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Çizkeyk",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/4.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Ferrero Rocher",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/5.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Yerkökü Keyk (VEGAN)",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/dessert/6.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Dondurma (3 porsiyon)",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/dessert/7.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Rafaello (5 ədəd)",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/dessert/8.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Sırniki",
        "ingredient": "",
        "price": "9",
        "src": "images/menu/dessert/9.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Qarışıq mövsümü meyvə tabağı",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/10.webp",
        "category": "desert"
    }
]

const FOOD_LIST_EN = [
    {
        "country": "India",
        "name": "Cold Raita Soup (Raw Food)",
        "ingredient": "(VEGETARIAN) yoghurt, cucumber, assorted herbs, mint and spices ",
        "price": "6",
        "src": "images/menu/soup/1.webp",
        "category": "soup"
    },
    {
        "country": "Greece",
        "name": "Mushroom Cream Soup",
        "ingredient": "(VEGAN or VEGETARIAN) served with crouton bread, mushroom, cream, potato & spices",
        "price": "7",
        "src": "images/menu/soup/2.webp",
        "category": "soup"
    },
    {
        "country": "Spain",
        "name": "Red Cabbage Cream Soup",
        "ingredient": "(VEGAN or VEGETARIAN) served with crouton bread, red cabbage, cream, potato & spices",
        "price": "6",
        "src": "images/menu/soup/3.webp",
        "category": "soup"
    },
    {
        "country": "Japan",
        "name": "Miso Soup – (low calorie dish)",
        "ingredient": "(VEGAN or VEGETARIAN) miso – soya paste, paneer cheese, seaweed, bell pepper & spices, served with rice on the side",
        "price": "7",
        "src": "images/menu/soup/4.webp",
        "category": "soup"
    },
    {
        "country": "Morocco",
        "name": "Cream Spinach Soup",
        "ingredient": "(VEGAN or VEGETARIAN) served with crouton bread, spinach, cream, potato & spices",
        "price": "6",
        "src": "images/menu/soup/5.webp",
        "category": "soup"
    },
    {
        "country": "Lebanon",
        "name": "Fresh Salad suitable for RAW FOOD eaters, low calorie dish",
        "ingredient": "(VEGAN or VEGETARIAN) green salad, tomato, cucumber, bell pepper, walnuts, orange mustard dressing",
        "price": "8",
        "src": "images/menu/salad/1.webp",
        "category": "salad"
    },
    {
        "country": "Russia",
        "name": "Shuba Salad",
        "ingredient": "(VEGAN or VEGETARIAN) beetroot, potato, carrot, eggplant, sea weed & homemade vegan mayonnaise and special black salt",
        "price": "7",
        "src": "images/menu/salad/2.webp",
        "category": "salad"
    },
    {
        "country": "South Africa",
        "name": "Broccoli & Avocado Salad suitable for RAW FOOD eaters, low calorie dish",
        "ingredient": "(VEGAN or VEGETARIAN) broccoli, avocado, spinach, iceberg lettuce, tomato, zucchini, lemon juice, olive oil, cashew nuts and herbs",
        "price": "9",
        "src": "images/menu/salad/3.webp",
        "category": "salad"
    },
    {
        "country": "Italy",
        "name": "Caesar Salad",
        "ingredient": "(VEGAN or VEGETARIAN) with special homemade VEGAN sauce or VEGAN GARLIC sauce (iceberg lettuce, tomato, soya meat, parmesan cheese, spinach, lemon juice with crouton bread)",
        "price": "8",
        "src": "images/menu/salad/4.webp",
        "category": "salad"
    },
    {
        "country": "Iran",
        "name": "Khumus",
        "ingredient": "(VEGAN or VEGETARIAN) chickpea puree, olive oil, sesame paste, tomatoes & spices",
        "price": "7",
        "src": "images/menu/salad/5.webp",
        "category": "salad"
    },
    {
        "country": "Israel",
        "name": "Grilled Falafel Roll",
        "ingredient": "(choice of Special VEGAN Sauce or GARLIC Sauce) local homemade lavash bread, cheek pea cutlet, iceberg lettuce, spinach, tomato, cucumber pickle",
        "price": "9",
        "src": "images/menu/main/1.webp",
        "category": "main"
    },
    {
        "country": "Mexico",
        "name": "Grilled Spicy Burrito",
        "ingredient": "(VEGAN or VEGETARIAN) local homemade lavash bread, soya meat slices, tomato, sweet corn, red beans, mozzarella cheese, bell pepper, spinach, iceberg lettuce with homemade spicy Salsa sauce",
        "price": "9",
        "src": "images/menu/main/2.webp",
        "category": "main"
    },
    {
        "country": "Thailand",
        "name": "Wok Fried Noodles – (regular wheat noodles or buckwheat noodles)",
        "ingredient": "(VEGAN with Soya Meat or VEGETARIAN with Paneer Cheese) - please ask for spice level (bell pepper, carrot, zucchini, sesame seed oil, soya sauce)",
        "price": "10",
        "src": "images/menu/main/3.webp",
        "category": "main"
    },
    {
        "country": "Malaysia",
        "name": "Vegetable Fried Rice (GLUTEN FREE)",
        "ingredient": "(VEGAN with Soya Meat or VEGETARIAN with Paneer Cheese) - please ask for spice level (basmati rice, bell pepper, carrot, zucchini, sesame seed oil, soya sauce)",
        "price": "10",
        "src": "images/menu/main/4.webp",
        "category": "main"
    },
    {
        "country": "USA",
        "name": "Special Vegan Burger (Beyond Meat)",
        "ingredient": "(choice of Special GARLIC Sauce or Special VEGAN Sauce) served with homemade potato wedges & tomato sauce (beetroot bread bun, Very Special Vegan Burger, cucumber pickle, tomato, iceberg lettuce)",
        "price": "18",
        "src": "images/menu/main/5.webp",
        "category": "main"
    },
    {
        "country": "USA",
        "name": "Special Vegetarian Cheeseburger (Beyond Meat)",
        "ingredient": "(choice of Special GARGLIC or Special VEGAN Sauce) served with homemade potato wedges & tomato sauce (beetroot bread bun, Gouda Cheese, Very Special Vegan Burger, cucumber pickle, tomato, iceberg lettuce)",
        "price": "19",
        "src": "images/menu/main/6.webp",
        "category": "main"
    },
    {
        "country": "Azerbaijan",
        "name": "Grape Leaf Dolma",
        "ingredient": "(VEGETARIAN) served with sour cream & crouton bread (basmati rice, selection of herbs, cottage cheese and spices)",
        "price": "10",
        "src": "images/menu/main/7.webp",
        "category": "main"
    },
    {
        "country": "Georgia",
        "name": "Fried Khinkali",
        "ingredient": "(VEGETARIAN or VEGAN) – served with your choice of regular Sour Cream or special Vegan Sauce or Tomato Sauce - (wheat flour, soya meat, bell pepper, mixed herbs, tomato and spices)",
        "price": "9",
        "src": "images/menu/main/8.webp",
        "category": "main"
    },
    {
        "country": "France",
        "name": "Farfalle Pasta (GLUTEN FREE pasta additional 5 azn)",
        "ingredient": "(VEGETARIAN) Mozzarella cheese, spinach, cashew nuts, cherry tomato, mustard and olive oil",
        "price": "12",
        "src": "images/menu/main/9.webp",
        "category": "main"
    },
    {
        "country": "Oman",
        "name": "Arabic Style Penne (GLUTEN FREE pasta additional 5 azn)",
        "ingredient": "(VEGAN) Avocado, bell pepper, carrot, eggplant, cashew nuts, tomato sauce and olive oil",
        "price": "10",
        "src": "images/menu/main/10.webp",
        "category": "main"
    },
    {
        "country": "",
        "name": "“De Rama” Bowl",
        "ingredient": "(VEGAN) Rice, falafel, cucumber, cherry tomato, red cabbage, humus, assorted herbs",
        "price": "15",
        "src": "images/menu/main/11.webp",
        "category": "main"
    },
    {
        "country": "",
        "name": "“De Rama” Bowl",
        "ingredient": "(VEGETARIAN) Rice, humus, cucumber, cherry tomato, paneer cheese, red cabbage, assorted herbs",
        "price": "15",
        "src": "images/menu/main/12.webp",
        "category": "main"
    },
    {
        "country": "Turkiye",
        "name": "Special Shaurma (Beyond Meat) – (choice of Special GARLIC Sauce or Special VEGAN Sauce)",
        "ingredient": "(VEGETARIAN) served with homemade potato wedges & tomato sauce (local lavash bread, Very Special Vegan Meat, Mozzarella cheese, cucumber pickle, tomato, iceberg lettuce)",
        "price": "19",
        "src": "images/menu/main/13.webp",
        "category": "main"
    },
    {
        "country": "Turkiye",
        "name": "Special Shaurma (Beyond Meat) – (choice of Special GARLIC Sauce or Special VEGAN Sauce)",
        "ingredient": "(VEGAN) served with homemade potato wedges & tomato sauce (local lavash bread, Very Special Vegan Meat, cucumber pickle, tomato, iceberg lettuce)",
        "price": "18",
        "src": "images/menu/main/14.webp",
        "category": "main"
    },
    {
        "country": "Russia",
        "name": "Mushroom Julienne",
        "ingredient": "VEGETARIAN (Mushrooms, cream, Mozzarella cheese) or VEGAN (Mushrooms, coconut cream & potato)",
        "price": "9",
        "src": "images/menu/main/15.webp",
        "category": "main"
    },
    {
        "country": "India",
        "name": "Chana Dal (with chickpea) - Spicy",
        "ingredient": "Saffron rice, chickpea dal with Garam Masala, asafetida, tomato, ginger, cilantro, butter, cumin, chili pepper, clove, curcuma, turmeric, mustard seeds, cinnamon, sweet paprika, coriander",
        "price": "15",
        "src": "images/menu/main/16.webp",
        "category": "main"
    },
    {
        "country": "",
        "name": "Honey Cake",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/1.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Tiramisu Oreo & Cacao",
        "ingredient": "",
        "price": "9",
        "src": "images/menu/dessert/2.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Snickers",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/3.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Cheesecake",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/4.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Ferrero Rocher",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/5.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Carrot Cake (VEGAN)",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/dessert/6.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Ice Cream (3 scoops)",
        "ingredient": "",
        "price": "6",
        "src": "images/menu/dessert/7.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Rafaello (5 scoops)",
        "ingredient": "",
        "price": "5",
        "src": "images/menu/dessert/8.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Syrniki",
        "ingredient": "",
        "price": "9",
        "src": "images/menu/dessert/9.webp",
        "category": "desert"
    },
    {
        "country": "",
        "name": "Assorted seasonal fruit plate",
        "ingredient": "",
        "price": "8",
        "src": "images/menu/dessert/10.webp",
        "category": "desert"
    }
]