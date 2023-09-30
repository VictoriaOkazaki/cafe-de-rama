import { z } from "zod";

export type BaseCard = {
  id: string;
  title: string;
  text: string;
  titleEn: string;
  textEn: string;
  titleAz: string;
  textAz: string;
  date: string;
  mainFile: FileData;
  extraFiles: FileData[];
};

export type BlogCard = BaseCard;
export type ShopCard = BaseCard & {
  price: number;
};

export type CardEntity = BlogCard | ShopCard;

export const ZodFileDataAdd = z.object({
  fileName: z.string().min(1, "Empty"),
});

export type FileData = z.infer<typeof ZodFileDataAdd> & {
  src: string;
};

export const ZodAdminBlogCardAdd = z.object({
  title: z.string().min(1, "Не задан заголовок на русском"),
  text: z.string().min(1, "Не задан текст на русском"),
  titleEn: z.string().min(1, "Не задан заголовок на английском"),
  textEn: z.string().min(1, "Не задан текст на английском"),
  titleAz: z.string().min(1, "Не задан заголовок на азербайджанском"),
  textAz: z.string().min(1, "Не задан текст на азербайджанском"),
});

const ZodPrice = z.object({
  price: z.number().positive("Не валидная цена"),
});
export const ZodAdminShopCardAdd = ZodAdminBlogCardAdd.merge(ZodPrice);

const ZodFiles = z.object({
  mainFile: ZodFileDataAdd,
  extraFiles: z.array(ZodFileDataAdd),
});
export type NewFiles = {
  posterFile: File | null;
  extraFiles: File[];
};

export const ZodBlogCardAdd = ZodAdminBlogCardAdd.merge(ZodFiles);
export const ZodShopCardAdd = ZodAdminShopCardAdd.merge(ZodFiles);

export type BlogCardAdd = z.infer<typeof ZodBlogCardAdd>;
export type ShopCardAdd = z.infer<typeof ZodShopCardAdd>;

export type EntityAdd = BlogCardAdd | ShopCardAdd;

export const ZodId = z.object({ id: z.string() });
const ZodDate = z.object({ date: z.string() });

export const ZodBlogCardEdit = ZodBlogCardAdd.partial()
  .merge(ZodId)
  .merge(ZodDate.partial());
export type BlogCardEdit = z.infer<typeof ZodBlogCardEdit>;

export const ZodShopCardEdit = ZodBlogCardAdd.partial()
  .merge(ZodId)
  .merge(ZodDate.partial())
  .merge(ZodPrice.partial());
export type ShopCardEdit = z.infer<typeof ZodShopCardEdit>;

export type EntityEdit = BlogCardEdit | ShopCardEdit;
