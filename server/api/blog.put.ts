import admin from "firebase-admin";
import { ZodBlogCardEdit, BlogCardEdit, FirebaseDtoBlogCard } from "~/types";
import { validateZod } from "~/composables/validate";
import { deleteFirebaseFiles } from "../modules/bucket";
import { checkUserRole } from "../modules/user";

export default defineEventHandler(async (event) => {
  await checkUserRole(event, ["admin", "manager"]);
  const editedBlog: BlogCardEdit = await readBody(event);

  const { validateErrors } = validateZod(ZodBlogCardEdit, editedBlog);
  if (validateErrors) {
    throw createError({
      statusCode: 400,
      statusMessage: `Bad request: ${validateErrors}`,
    });
  }

  const db = admin.firestore();
  const ref = db.collection("blogs");
  const firebaseBlog = ref.doc(editedBlog.id);

  const blog = (await firebaseBlog.get()).data() as FirebaseDtoBlogCard;

  const newFileNames = (editedBlog.extraFiles || blog.extraFiles).map(
    (f) => f.fileName
  );
  newFileNames.push(
    editedBlog.mainFile ? editedBlog.mainFile.fileName : blog.mainFile.fileName
  );

  const oldFileNames = blog.extraFiles.map((f) => f.fileName);
  oldFileNames.push(blog.mainFile.fileName);

  const deleteFileNames = oldFileNames.filter(
    (fN) => !newFileNames.includes(fN)
  );

  await deleteFirebaseFiles(deleteFileNames);

  await firebaseBlog.update(editedBlog);

  return "Success. Updated blog";
});
