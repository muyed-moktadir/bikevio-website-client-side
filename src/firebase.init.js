// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-9LxQ6AICMWwQ92cgDnrj9AtLRleGi2Y",
  authDomain: "bikevio-project.firebaseapp.com",
  projectId: "bikevio-project",
  storageBucket: "bikevio-project.appspot.com",
  messagingSenderId: "124004630223",
  appId: "1:124004630223:web:24dee7d6794953528dc1ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;