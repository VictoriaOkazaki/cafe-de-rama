import form from "../modules/form";
import admin from "firebase-admin";
import { checkUserRole } from "../modules/user";
import { v4 as uuidv4 } from "uuid";
import { getFirebaseFileUrl } from "../modules/bucket";
// import { initFirebaseApp } from "../modules/firebase";

export default defineEventHandler(async (event) => {
  // initFirebaseApp()
  await checkUserRole(event, ["admin", "manager"]);
  const { files, fields } = await form(event.node.req);
  const file = files[0];
  // nameType 'random' | 'origin'
  const useOriginName = fields["nameType"] === "origin";
  if (!file) {
    throw createError({
      statusCode: 400,
      statusMessage: `Bad request: file not uploaded`,
    });
  }
  const bucket = admin.storage().bucket();
  const ext = getFileExtention(file.name);
  const uniquefileName = useOriginName ? file.name : uuidv4() + "." + ext;
  const firebaseFile = bucket.file(uniquefileName);
  const [exists] = await firebaseFile.exists();
  if (exists) {
    throw createError({
      statusCode: 400,
      statusMessage: `File with name ${uniquefileName} already exists`,
    });
  }
  const writeStream = firebaseFile.createWriteStream();
  writeStream.end(file.buffer);
  return {
    fileName: uniquefileName,
    url: getFirebaseFileUrl(uniquefileName),
  };
});

function getFileExtention(fileName: string): string {
  if (!fileName.includes(".")) {
    return "";
  }
  const split = fileName.split(".");
  return split.pop() || "";
}
