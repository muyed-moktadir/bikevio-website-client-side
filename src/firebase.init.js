// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAluYLDQlXXNh25klmN0j_dKKvS4heAUq8",
  authDomain: "bikevio-newproject.firebaseapp.com",
  projectId: "bikevio-newproject",
  storageBucket: "bikevio-newproject.appspot.com",
  messagingSenderId: "484274837511",
  appId: "1:484274837511:web:94fe06ac3eed103a20f2a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

