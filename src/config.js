


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj9SjUZw9b5zhv2UVR8MhOv-XZPumsKLQ",
  authDomain: "csit-7ec03.firebaseapp.com",
  projectId: "csit-7ec03",
  storageBucket: "csit-7ec03.appspot.com",
  messagingSenderId: "313923604072",
  appId: "1:313923604072:web:d00f7a473e15e840a4b5dd",
  measurementId: "G-7S46CNSBDD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);