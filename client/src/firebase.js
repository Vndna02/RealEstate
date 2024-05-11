// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-18817.firebaseapp.com",
  projectId: "realestate-18817",
  storageBucket: "realestate-18817.appspot.com",
  messagingSenderId: "402244637369",
  appId: "1:402244637369:web:1f7906c1da9891c95a0168"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);