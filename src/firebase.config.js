// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjs0jx1hsE_4BHl2bgVG2cz555NAVW6Lo",
  authDomain: "services-project-3a57c.firebaseapp.com",
  projectId: "services-project-3a57c",
  storageBucket: "services-project-3a57c.firebasestorage.app",
  messagingSenderId: "859631800633",
  appId: "1:859631800633:web:866d28625d4badb66818e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);