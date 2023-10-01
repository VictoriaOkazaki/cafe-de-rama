import admin from "firebase-admin";
import { createEntity, getEntityNameFromRoute } from "~/server/modules/entity";
// import { initFirebaseApp } from "~/server/modules/firebase";

export default defineEventHandler(async (event) => {
  // initFirebaseApp()
  const entityName = getEntityNameFromRoute(event);

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
  const ref = db.collection(entityName).orderBy("date", "desc");

  const allCount = (await ref.count().get()).data().count;
  const curCount = offset + limit;
  const next = curCount < allCount;

  const snapshot = await ref.offset(offset).limit(limit).get();
  const items: any[] = [];
  snapshot.forEach((doc) => {
    const data = doc.data() as any;

    const entity = createEntity(doc.id, data);

    items.push(entity);
  });

  return { items, next };
});
