import admin from "firebase-admin";
import { createEntity, getEntityNameFromRoute } from "~/server/modules/entity";
import { initFirebaseApp } from "~/server/modules/firebase";

export default defineEventHandler(async (event) => {
  initFirebaseApp()
  const entityName = getEntityNameFromRoute(event);
  const entityId = getRouterParam(event, "id") || "";

  const db = admin.firestore();
  const docRef = db.collection(entityName).doc(entityId);

  const doc = await docRef.get();
  const data = doc.data() as any;

  const entity = createEntity(doc.id, data);

  return entity;
});
