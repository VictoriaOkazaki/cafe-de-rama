import admin from "firebase-admin";
import { UserAdd, ZodUserAdd } from "../modules/user";
import { validateZod } from "~/composables/validate";
import { checkUserRole } from "../modules/user";
import { initFirebaseApp } from "../modules/firebase";

export default defineEventHandler(async (event) => {
  initFirebaseApp()
  await checkUserRole(event, ["admin"]);
  const newUser: UserAdd = await readBody(event);

  const { validateErrors } = validateZod(ZodUserAdd, newUser);
  if (validateErrors) {
    throw createError({
      statusCode: 400,
      statusMessage: `Bad request: ${validateErrors}`,
    });
  }

  const { password, email, role } = newUser;

  const { uid } = await admin.auth().createUser({
    email,
    password,
  });
  await admin.auth().setCustomUserClaims(uid, { role });

  return "Success. Added new user " + uid;
});
