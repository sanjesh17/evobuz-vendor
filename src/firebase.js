// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCTPI8wtuntvYn30lKzgRGyF8vVEKpc4g",
  authDomain: "evobuz-vendor-b74e1.firebaseapp.com",
  projectId: "evobuz-vendor-b74e1",
  storageBucket: "evobuz-vendor-b74e1.appspot.com",
  messagingSenderId: "110052796009",
  appId: "1:110052796009:web:4346d6b355b4759470a4f8",
  measurementId: "G-HY55MHF5HE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
