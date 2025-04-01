// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "photo-editor-jemish.firebaseapp.com",
  projectId: "photo-editor-jemish",
  storageBucket: "photo-editor-jemish.firebasestorage.app",
  messagingSenderId: "112606462189",
  appId: "1:112606462189:web:5a01c1b3287194d01acce4",
  measurementId: "G-G7DGDP7MRZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
