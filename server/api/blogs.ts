import admin from "firebase-admin";
import { BlogCard, FirebaseDtoBlogCard } from "~~/types";
import { getFirebaseFileUrl } from "~/server/modules/bucket";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const offset: number = query.offset ? Number(query.offset) : 0;
  const limit: number = query.limit ? Number(query.limit) : 100;
  if (!Number.isInteger(offset) || offset < 0) {
    throw createError({
      statusCode: 400,
      statusMessage: `offset ${offset} should be an integer and >= 0`,
    });
  }
  if (!Number.isInteger(limit) || limit <= 0) {
    throw createError({
      statusCode: 400,
      statusMessage: `limit ${limit} should be an integer and > 0`,
    });
  }
  const db = admin.firestore();
  const ref = db.collection("blogs").orderBy("date", "desc");

  const allCount = (await ref.count().get()).data().count;
  const curCount = offset + limit;
  const next = curCount < allCount;

  const snapshot = await ref.offset(offset).limit(limit).get();
  const items: BlogCard[] = [];
  snapshot.forEach((doc) => {
    const data = doc.data() as FirebaseDtoBlogCard;
    items.push({
      id: doc.id,
      date: data.date,
      text: data.text,
      title: data.title,
      mainFile: {
        fileName: data.mainFile.fileName,
        src: getFirebaseFileUrl(data.mainFile.fileName),
      },
      extraFiles: data.extraFiles.map((extraFile) => ({
        fileName: extraFile.fileName,
        src: getFirebaseFileUrl(extraFile.fileName),
      })),
    });
  });
  return { items, next };
});
