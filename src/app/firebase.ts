// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGQ_NeHabp32when3gpNnO9gT6u1_g16Y",
  authDomain: "theabid.firebaseapp.com",
  databaseURL: "https://theabid.firebaseio.com",
  projectId: "theabid",
  storageBucket: "theabid.firebasestorage.app",
  messagingSenderId: "1098152045097",
  appId: "1:1098152045097:web:067db972198e0e3c1d4a38",
  measurementId: "G-JKB94F7SD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);