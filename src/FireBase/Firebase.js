// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiLJXCunsGPcXq_0ez4T1-Wo2RW5748J4",
  authDomain: "share-meal-3dece.firebaseapp.com",
  projectId: "share-meal-3dece",
  storageBucket: "share-meal-3dece.firebasestorage.app",
  messagingSenderId: "107427178449",
  appId: "1:107427178449:web:f7f5f5a04318b1378262f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);