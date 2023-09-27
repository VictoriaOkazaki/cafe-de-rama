import { deleteFirebaseFiles } from "../modules/bucket";
import { checkUserRole } from "../modules/user";

export default defineEventHandler(async (event) => {
  await checkUserRole(event, ["admin", "manager"]);
  const body: { fileNames: string[] } = await readBody(event);

  await deleteFirebaseFiles(body.fileNames);

  return "success";
});
