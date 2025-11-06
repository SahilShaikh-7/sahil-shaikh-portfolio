import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCQL_CvYX3DrsA_a3EbVWwaiUwtumJNFr4",
  authDomain: "meetingai-a5cd9.firebaseapp.com",
  projectId: "meetingai-a5cd9",
  storageBucket: "meetingai-a5cd9.firebasestorage.app",
  messagingSenderId: "607102011648",
  appId: "1:607102011648:web:03d2155336d37a0db3cbe5",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// Initialize analytics only on client side
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null

export default app
