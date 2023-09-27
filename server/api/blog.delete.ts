import admin from "firebase-admin";
import { deleteFirebaseFiles } from "../modules/bucket";
import { FirebaseDtoBlogCard } from "~/types";
import { checkUserRole } from "../modules/user";

export default defineEventHandler(async (event) => {
  await checkUserRole(event, ["admin", "manager"]);
  const body: { id: string } = await readBody(event);

  const db = admin.firestore();

  const ref = db.collection("blogs");

  const firebaseBlog = ref.doc(body.id);

  const blog = (await firebaseBlog.get()).data() as FirebaseDtoBlogCard;
  const fileNames: string[] = [
    blog.mainFile.fileName,
    ...blog.extraFiles.map((f) => f.fileName),
  ];
  await deleteFirebaseFiles(fileNames);

  await firebaseBlog.delete();

  return "success";
});
