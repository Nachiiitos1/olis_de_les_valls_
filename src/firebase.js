// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6hRGw7xBdt1s383xL1s7Me0IykzggK0Q",
  authDomain: "olisdelesvalls.firebaseapp.com",
  projectId: "olisdelesvalls",
  storageBucket: "olisdelesvalls.appspot.com",
  messagingSenderId: "204955465383",
  appId: "1:204955465383:web:8c2e17a4216c7fd3580d82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
