import admin from "firebase-admin";
import { checkUserRole } from "../modules/user";
import { initFirebaseApp } from "../modules/firebase";

export default defineEventHandler(async (event) => {
  initFirebaseApp()
  await checkUserRole(event, ["admin"]);
  const { id }: { id: string } = await readBody(event);

  await admin.auth().deleteUser(id);

  return "success";
});
