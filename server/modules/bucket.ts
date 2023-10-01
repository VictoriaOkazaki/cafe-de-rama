import admin from "firebase-admin";

export function getFirebaseFileUrl(fileName: string) {
  return `https://firebasestorage.googleapis.com/v0/b/cafe-de-rama-48f0c.appspot.com/o/${fileName}?alt=media`;
}

export async function deleteFirebaseFiles(fileNames: string[]) {
  const bucket = admin.storage().bucket();
  for (const fileName of fileNames) {
    try {
      const firebaseFile = bucket.file(fileName);
      await firebaseFile.delete();
    } catch (err) {
      console.error(`Error delete file ${fileName}`, err);
    }
  }
}
