// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// http://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9WDTYTwInw4bi7VnpRnOOrhvg36nLw6k",
  authDomain: "bikevio-e5fd1.firebaseapp.com",
  projectId: "bikevio-e5fd1",
  storageBucket: "bikevio-e5fd1.appspot.com",
  messagingSenderId: "791660961724",
  appId: "1:791660961724:web:d616de3ba2c2fc1f00d5b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;