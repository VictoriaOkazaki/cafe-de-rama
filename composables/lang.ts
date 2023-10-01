import { useI18n } from "vue-i18n";

export type Lang = 'ru' | 'az' | 'en'

const getPageMeta = (lang: Lang, routePath: string) => {
    let title = 'De Rama Vegetarian & Vegan Cafe'
    let description = 'The first vegatarian & vegan cafe in Baku with a wide range of dishes from all over the world, excellent service and cool atmosphere.'

    if (lang === 'ru') {
        title = "Де Рама Вегетарианское & Веганское кафе"
        description = "Первое вегетарианское и веганское кафе в Баку с широким ассортиментом блюд со всего мира, отличным сервисом и крутой атмосферой."
    }

    if (lang === 'az') {
        title = "De Rama Vegetarian & Vegan Kafe"
        description = "Bakıda ilk vegetarian və vegan kafesi. Dünyanın hər yerindən geniş çeşiddə yeməklər, yüksək səviyyəli xidmət və rahatlaşdırıcı atmosfer."
    }

    if (routePath.startsWith('/blog')) {
        title = 'De Rama Blog'
        description = 'Our articles related to vegetarian & vegan theme and healthy lifestyle.'
        if (lang === 'az') {
            title = 'De Rama Bloq'
            description = 'Vegetarian və vegan mövzusu və sağlam həyat tərzi ilə bağlı məqalələrimiz.'
        }
        if (lang === 'ru') {
            title = 'Де Рама Блог'
            description = 'Наши статьи, посвященные вегетарианской и веганской тематике, а также здоровому образу жизни.'
        }
    }

    if (routePath.startsWith('/shop')) {
        title = 'De Rama Shop'
        description = 'Our products and souvenirs are practical, aesthetic, and suitable as a gift for both yourself and loved ones.'
        if (lang === 'az') {
            title = 'De Rama Mağaza'
            description = 'Məhsullarımız və suvenirlərimiz praktikdir, estetikdir və həm özünüzə, həm də sevdiklərinizə hədiyyə etmək üçün uyğundur.'
        } if (lang === 'ru') {
            title = 'Де Рама Магазин'
            description = 'Наша продукция и сувениры практичны, эстетичны и подходят в качестве подарка как себе, так и близким.'
        }
    }

    return { title, description }
}

export const useLangPageData = () => {
    const { locale } = useI18n();
    const route = useRoute()
    const router = useRouter();

    const pageTitle = ref('')
    const pageDescription = ref('')
    const pageLang = ref('')

    const queryLangExists = !!route.query.lang

    let queryLang = queryLangExists ? String(route.query.lang) as Lang : 'ru'
    if (!['ru', 'en', 'az'].includes(queryLang)) {
        queryLang = 'ru'
    }

    locale.value = queryLang;

    const { title, description } = getPageMeta(queryLang, route.path);

    const updatePageDataRefs = (ln: Lang, title: string, description: string) => {
        pageTitle.value = title
        pageDescription.value = description
        pageLang.value = queryLang
        // console.log('Update lang page data', pageLang.value, pageTitle.value, pageDescription.value)
    }

    updatePageDataRefs(queryLang, title, description)

    let mounted = false
    onMounted(() => {
        console.log('On mounted')
        mounted = true
        if (queryLangExists) return;
        const lang = localStorage.getItem("locale") || "ru";
        locale.value = lang;
    });

    const updatePageData = (routePath: string) => {
        const lang = locale.value as Lang
        const { title, description } = getPageMeta(lang, routePath);
        // console.log('Update page data routePath', routePath, 'title', title, 'description', description)

        updatePageDataRefs(lang, title, description)

        if (!mounted) return
        localStorage.setItem("locale", locale.value);
        document.title = title;
        document
            .querySelector('meta[name="description"]')
            ?.setAttribute("content", description);
    }

    watch(locale, () => {
        // console.log('On locale changed', lang)
        updatePageData(route.path)
    });

    watch(() => route.path, (routePath) => {
        // console.log('On route changed', routePath)
        updatePageData(routePath)
    })

    return { pageLang, pageTitle, pageDescription }
}
