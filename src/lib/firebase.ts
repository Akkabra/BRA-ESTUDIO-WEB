import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  "projectId": "studio-2533498908-18d33",
  "appId": "1:902212344137:web:94be26e340a8540cdde298",
  "apiKey": "AIzaSyDZ5oWc0ZLvAPsHStpjD6at_C0ghOSctbc",
  "authDomain": "studio-2533498908-18d33.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "902212344137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
