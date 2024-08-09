// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmrSlbFb7YGsO4-ac-a3d26NRm9hklQPA",
  authDomain: "blog-project-ca4ac.firebaseapp.com",
  projectId: "blog-project-ca4ac",
  storageBucket: "blog-project-ca4ac.appspot.com",
  messagingSenderId: "131114661727",
  appId: "1:131114661727:web:e94c600e2443ecac4e68ea",
  measurementId: "G-M3G496MBH8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
