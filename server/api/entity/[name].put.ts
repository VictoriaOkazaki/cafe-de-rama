import admin from "firebase-admin";
import { deleteFirebaseFiles } from "~/server/modules/bucket";
import { checkUserRole } from "~/server/modules/user";
import {
  createEntity,
  getEntityNameFromRoute,
  validateEditedEntity,
} from "~/server/modules/entity";

export default defineEventHandler(async (event) => {
  await checkUserRole(event, ["admin", "manager"]);
  const entityName = getEntityNameFromRoute(event);
  const editedEntity = await readBody(event);

  validateEditedEntity(entityName, editedEntity);

  const db = admin.firestore();
  const ref = db.collection(entityName);
  const firebaseBlog = ref.doc(editedEntity.id);

  const oldEntity = (await firebaseBlog.get()).data() as any;

  const newFileNames = (editedEntity.extraFiles || oldEntity.extraFiles).map(
    (f: { fileName: string }) => f.fileName
  );
  newFileNames.push(
    editedEntity.mainFile
      ? editedEntity.mainFile.fileName
      : oldEntity.mainFile.fileName
  );

  const oldFileNames = oldEntity.extraFiles.map(
    (f: { fileName: string }) => f.fileName
  );
  oldFileNames.push(oldEntity.mainFile.fileName);

  const deleteFileNames = oldFileNames.filter(
    (fN: string) => !newFileNames.includes(fN)
  );

  await deleteFirebaseFiles(deleteFileNames);

  delete editedEntity.id;
  await firebaseBlog.update(editedEntity);

  const savedData = (await firebaseBlog.get()).data();

  const savedEntity = createEntity(firebaseBlog.id, savedData);

  return savedEntity;
});
