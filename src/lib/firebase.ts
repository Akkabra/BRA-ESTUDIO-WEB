// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZ5oWc0ZLvAPsHStpjD6at_C0ghOSctbc",
  authDomain: "studio-2533498908-18d33.firebaseapp.com",
  projectId: "studio-2533498908-18d33",
  storageBucket: "studio-2533498908-18d33.appspot.com",
  messagingSenderId: "902212344137",
  appId: "1:902212344137:web:94be26e340a8540cdde298",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
