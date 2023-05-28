import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBwupWlBGGQYqMiYJPiu1V_5CHrOUuJcQM",
  authDomain: "rj-estefanialeiba.firebaseapp.com",
  projectId: "rj-estefanialeiba",
  storageBucket: "rj-estefanialeiba.appspot.com",
  messagingSenderId: "170322504569",
  appId: "1:170322504569:web:18d6d1e03d576f75d0dda8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()