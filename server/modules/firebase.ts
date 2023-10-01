import admin from "firebase-admin";

let inited = false
export function initFirebaseApp() {
  if (inited) return
  console.log('Init firebase app')
  console.log('process.env.FIREBASE_PROJECT_ID', process.env.FIREBASE_PROJECT_ID)
  console.log('process.env.FIREBASE_CLIENT_EMAIL', process.env.FIREBASE_CLIENT_EMAIL)
  console.log('process.env.FIREBASE_PRIVATE_KEY', process.env.FIREBASE_PRIVATE_KEY)

  const privateKey = (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n')

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey,
    }),
    storageBucket: "gs://cafe-de-rama-48f0c.appspot.com",
  });
  inited = true
}
