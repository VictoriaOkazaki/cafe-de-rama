import admin from "firebase-admin";

export default defineNitroPlugin(() => {
  console.log('process.env.FIREBASE_PROJECT_ID', process.env.FIREBASE_PROJECT_ID)
  console.log('process.env.FIREBASE_CLIENT_EMAIL', process.env.FIREBASE_CLIENT_EMAIL)
  console.log('process.env.FIREBASE_PRIVATE_KEY', process.env.FIREBASE_PRIVATE_KEY)
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
    storageBucket: "gs://cafe-de-rama-48f0c.appspot.com",
  });
});
