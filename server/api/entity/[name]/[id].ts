import admin from "firebase-admin";
import { createEntity, getEntityNameFromRoute } from "~/server/modules/entity";

export default defineEventHandler(async (event) => {
  const entityName = getEntityNameFromRoute(event);
  const entityId = getRouterParam(event, "id") || "";

  const db = admin.firestore();
  const docRef = db.collection(entityName).doc(entityId);

  const doc = await docRef.get();
  const data = doc.data() as any;

  const entity = createEntity(doc.id, data);

  return entity;
});
