import admin from "firebase-admin";

export default defineNitroPlugin(() => {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
    storageBucket: "gs://cafe-de-rama-48f0c.appspot.com",
  });
});
