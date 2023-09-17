export type BaseCard = {
    id: string,
    src: string,
    title: string,
    text: string
}

export type ShopCard = BaseCard & {
    price: number
}

export type BlogCard = BaseCard
