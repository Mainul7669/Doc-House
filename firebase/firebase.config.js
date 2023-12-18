// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC4Q-1KRQbaHY0eBtVr5n1puPm-dxK4VQ",
  authDomain: "doc-house-fe6c0.firebaseapp.com",
  projectId: "doc-house-fe6c0",
  storageBucket: "doc-house-fe6c0.appspot.com",
  messagingSenderId: "76031064665",
  appId: "1:76031064665:web:3e8e8fc80186ad1128cf48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;