// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "import.meta.env.VITA_FIREBASE_API_KEY",
  authDomain: "estate-ecommerce.firebaseapp.com",
  projectId: "estate-ecommerce",
  storageBucket: "estate-ecommerce.appspot.com",
  messagingSenderId: "1059615088800",
  appId: "1:1059615088800:web:98473735c61f15176829c5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
