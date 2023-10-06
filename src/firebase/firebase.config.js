// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvzkB1VohgTTZ4KXl0lVxhw3yoA344BTg",
  authDomain: "auth-moha-milon-eea53.firebaseapp.com",
  projectId: "auth-moha-milon-eea53",
  storageBucket: "auth-moha-milon-eea53.appspot.com",
  messagingSenderId: "308413195455",
  appId: "1:308413195455:web:b23492edf67e046731120a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;