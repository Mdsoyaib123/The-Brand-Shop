// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_ujDi-kO7SRwFUcVkWgkq38HQ3k40OwQ",
  authDomain: "assainments-10.firebaseapp.com",
  projectId: "assainments-10",
  storageBucket: "assainments-10.appspot.com",
  messagingSenderId: "970753689639",
  appId: "1:970753689639:web:7ccd0c322fdb3ea7cce602"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;