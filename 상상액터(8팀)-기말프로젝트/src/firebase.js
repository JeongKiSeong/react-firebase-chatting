// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm5G5QZXiq57wdsv6oRhbqCYVyU7VHX8c",
  authDomain: "webframework-talk.firebaseapp.com",
  projectId: "webframework-talk",
  storageBucket: "webframework-talk.appspot.com",
  messagingSenderId: "644491606238",
  appId: "1:644491606238:web:1f0cdfaac75128887bea4f",
  measurementId: "G-T8L8QZY77L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
