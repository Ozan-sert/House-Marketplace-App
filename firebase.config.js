// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8HRZiw1nVz3RaofV6Y9OVDmcngqTnMuQ",
  authDomain: "house-marketplace-app-c0dc2.firebaseapp.com",
  projectId: "house-marketplace-app-c0dc2",
  storageBucket: "house-marketplace-app-c0dc2.appspot.com",
  messagingSenderId: "596117767194",
  appId: "1:596117767194:web:b8fcd5b6baf70338e07da3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFireStore()