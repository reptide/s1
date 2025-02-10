// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXq-Qv6E6iPetKEzAVMLjRigeV_1JtqPQ",
  authDomain: "society101.firebaseapp.com",
  projectId: "society101",
  storageBucket: "society101.firebasestorage.app",
  messagingSenderId: "655740857862",
  appId: "1:655740857862:web:51e27344e71367f7fddd87",
  measurementId: "G-TFRKSK7337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);