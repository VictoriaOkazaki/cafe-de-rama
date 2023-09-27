export type Lang = 'ru' | 'az' | 'en'

export const useQueryLang = () => {
    const route = useRoute()
    const queryLangExists = !!route.query.lang

    let queryLang = queryLangExists ? String(route.query.lang) as Lang : 'ru'
    if (!['ru', 'en', 'az'].includes(queryLang)) {
        queryLang = 'ru'
    }

    return { queryLang, queryLangExists, ...getPageMeta(queryLang) }
}

export const getPageMeta = (lang: Lang) => {
    const route = useRoute()
    const routePath: string = route.path

    let pageTitle = 'De Rama Vegetarian & Vegan Cafe'
    let pageDescription = 'The first vegatarian & vegan cafe in Baku with a wide range of dishes from all over the world, excellent service and cool atmosphere.'

    if (lang === 'ru') {
        pageTitle = "Де Рама Вегетарианское & Веганское кафе"
        pageDescription = "Первое вегетарианское и веганское кафе в Баку с широким ассортиментом блюд со всего мира, отличным сервисом и крутой атмосферой."
    }

    if (lang === 'az') {
        pageTitle = "De Rama Vegetarian & Vegan Kafe"
        pageDescription = "Bakıda ilk vegetarian və vegan kafesi. Dünyanın hər yerindən geniş çeşiddə yeməklər, yüksək səviyyəli xidmət və rahatlaşdırıcı atmosfer."
    }

    if (routePath.startsWith('/blog')) {
        pageTitle = 'De Rama Blog'
        pageDescription = 'Our articles related to vegetarian & vegan theme and healthy lifestyle.'
    }

    if (routePath.startsWith('/shop')) {
        pageTitle = 'De Rama Shop'
        pageDescription = 'Our products and souvenirs are practical, aesthetic, and suitable as a gift for both yourself and loved ones.'
    }

    // console.log('Page meta', routePath, lang, pageTitle, pageDescription)

    return { pageTitle, pageDescription }
}
