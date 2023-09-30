import admin from "firebase-admin";
import { checkUserRole } from "~/server/modules/user";
import { getUtcDate } from "~/server/modules/date";
import {
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
  await ref.add(newFirebaseBlog);

  return `Success. Added new ${entityName} entity`;
});
