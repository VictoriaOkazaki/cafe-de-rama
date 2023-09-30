import admin from "firebase-admin";
import { deleteFirebaseFiles } from "~/server/modules/bucket";
import { checkUserRole } from "~/server/modules/user";
import { getEntityNameFromRoute } from "~/server/modules/entity";

export default defineEventHandler(async (event) => {
  await checkUserRole(event, ["admin", "manager"]);
  const entityName = getEntityNameFromRoute(event);
  const body: { id: string } = await readBody(event);

  const db = admin.firestore();

  const ref = db.collection(entityName);

  const firebaseBlog = ref.doc(body.id);

  const blog = (await firebaseBlog.get()).data() as any;
  const fileNames: string[] = [
    blog.mainFile.fileName,
    ...blog.extraFiles.map((f: { fileName: string }) => f.fileName),
  ];
  await deleteFirebaseFiles(fileNames);

  await firebaseBlog.delete();

  return "success";
});
