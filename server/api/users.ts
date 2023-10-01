import admin from "firebase-admin";
import { checkUserRole } from "../modules/user";
import { transformUser } from "~/server/modules/user";
import { initFirebaseApp } from "../modules/firebase";

export default defineEventHandler(async (event) => {
  initFirebaseApp()
  await checkUserRole(event, ["admin"]);
  const listUsers = await admin.auth().listUsers();
  const users = listUsers.users.map(transformUser);
  return users;
});
