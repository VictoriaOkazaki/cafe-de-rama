import admin from "firebase-admin";
import { checkUserRole } from "~/server/modules/user";
import { getUtcDate } from "~/server/modules/date";
import {
  createEntity,
  getEntityNameFromRoute,
  validateNewEntity,
} from "~/server/modules/entity";

export default defineEventHandler(async (event) => {
  await checkUserRole(event, ["admin", "manager"]);
  const entityName = getEntityNameFromRoute(event);
  const newEntity = await readBody(event);

  validateNewEntity(entityName, newEntity);

  const db = admin.firestore();
  const ref = db.collection(entityName);

  delete newEntity.id;
  const newFirebaseBlog = {
    ...newEntity,
    date: getUtcDate(),
  };
  const docRef = await ref.add(newFirebaseBlog);

  const createdData = (await docRef.get()).data();

  const createdEntity = createEntity(docRef.id, createdData);

  return createdEntity;
});
