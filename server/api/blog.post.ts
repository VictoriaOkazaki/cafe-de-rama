import admin from "firebase-admin";
import { checkUserRole } from "../modules/user";
import { ZodBlogCardAdd, BlogCardAdd, FirebaseDtoBlogCard } from "~/types";
import { validateZod } from "~/composables/validate";
import { getUtcDate } from "../modules/date";

export default defineEventHandler(async (event) => {
  await checkUserRole(event, ["admin", "manager"]);
  const newBlog: BlogCardAdd = await readBody(event);

  const { validateErrors } = validateZod(ZodBlogCardAdd, newBlog);
  if (validateErrors) {
    throw createError({
      statusCode: 400,
      statusMessage: `Bad request: ${validateErrors}`,
    });
  }

  const db = admin.firestore();
  const ref = db.collection("blogs");
  const newFirebaseBlog: FirebaseDtoBlogCard = {
    ...newBlog,
    date: getUtcDate(),
  };
  await ref.add(newFirebaseBlog);

  return "Success. Added new blog";
});
