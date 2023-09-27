import admin from "firebase-admin";
import { checkUserRole } from "../modules/user";

export default defineEventHandler(async (event) => {
  await checkUserRole(event, ["admin"]);
  const { id }: { id: string } = await readBody(event);

  await admin.auth().deleteUser(id);

  return "success";
});
