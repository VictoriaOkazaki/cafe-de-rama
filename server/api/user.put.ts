import admin from "firebase-admin";
import { UserUpdate, ZodUserUpdate, transformUser } from "../modules/user";
import { validateZod } from "~/composables/validate";
import { checkUserRole } from "../modules/user";

export default defineEventHandler(async (event) => {
  await checkUserRole(event, ["admin"]);
  const updateUser: UserUpdate = await readBody(event);

  const { validateErrors } = validateZod(ZodUserUpdate, updateUser);
  if (validateErrors) {
    throw createError({
      statusCode: 400,
      statusMessage: `Bad request: ${validateErrors}`,
    });
  }

  const { id: uid, role } = updateUser;

  await admin.auth().updateUser(uid, updateUser);
  if (role) {
    await admin.auth().setCustomUserClaims(uid, { role });
  }
  const user = await admin.auth().getUser(uid);

  return transformUser(user);
});
