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

export type ShopCard = BaseCard & {
  price: number;
};

export type BlogCard = BaseCard;

export const ZodFileDataAdd = z.object({
  fileName: z.string().min(1, "Empty"),
});

export type FileData = z.infer<typeof ZodFileDataAdd> & {
  src: string;
};

export const ZodBlogAddWithoutFile = z.object({
  title: z.string().min(1, "Не задан заголовок на русском"),
  text: z.string().min(1, "Не задан текст на русском"),
  titleEn: z.string().min(1, "Не задан заголовок на английском"),
  textEn: z.string().min(1, "Не задан текст на английском"),
  titleAz: z.string().min(1, "Не задан заголовок на азербайджанском"),
  textAz: z.string().min(1, "Не задан текст на азербайджанском"),
});
export const ZodBlogCardAdd = ZodBlogAddWithoutFile.merge(
  z.object({
    mainFile: ZodFileDataAdd,
    extraFiles: z.array(ZodFileDataAdd),
  })
);

export type BlogCardAdd = z.infer<typeof ZodBlogCardAdd>;

export type FirebaseDtoBlogCard = BlogCardAdd & {
  date: string;
};

export const ZodId = z.object({ id: z.string() });
const ZodDate = z.object({ date: z.string() });
export const ZodBlogCardEdit = ZodBlogCardAdd.partial()
  .merge(ZodId)
  .merge(ZodDate);
export type BlogCardEdit = z.infer<typeof ZodBlogCardEdit>;

export type NewFiles = {
  posterFile: File | null;
  extraFiles: File[];
};
