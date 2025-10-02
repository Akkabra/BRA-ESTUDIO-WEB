// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "studio-2533498908-18d33",
  appId: "1:902212344137:web:94be26e340a8540cdde298",
  apiKey: "AIzaSyDZ5oWc0ZLvAPsHStpjD6at_C0ghOSctbc",
  authDomain: "studio-2533498908-18d33.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "902212344137",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
