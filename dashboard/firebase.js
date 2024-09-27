// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfx1XAU7fpQ_JcBouzZfq97q5E3TvS7eg",
  authDomain: "dashboard-e6253.firebaseapp.com",
  projectId: "dashboard-e6253",
  storageBucket: "dashboard-e6253.appspot.com",
  messagingSenderId: "277433741017",
  appId: "1:277433741017:web:0693ef207d632f969a18c8",
  measurementId: "G-BQ0ZF1642R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;