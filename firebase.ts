import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7hBiLtbnHZEm62YJCvndShUeDrDh_sjg",
  authDomain: "chatgpt-messenger-9e06e.firebaseapp.com",
  projectId: "chatgpt-messenger-9e06e",
  storageBucket: "chatgpt-messenger-9e06e.appspot.com",
  messagingSenderId: "1074039421896",
  appId: "1:1074039421896:web:491108ea06a8238e315efd",
  measurementId: "G-77DERN71XS"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db  = getFirestore(app);

export { db };
