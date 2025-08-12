// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC79RAYiZuoHoowxC0chBpcyy0vGW9AWfk",
  authDomain: "codegenie-5f9e4.firebaseapp.com",
  projectId: "codegenie-5f9e4",
  storageBucket: "codegenie-5f9e4.firebasestorage.app",
  messagingSenderId: "303929462225",
  appId: "1:303929462225:web:10512fffe7e1984f2aa4f0",
  measurementId: "G-J3YBC7WGNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Set up Firebase Auth
export const auth = getAuth(app);

// Set up Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
