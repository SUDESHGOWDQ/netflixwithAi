// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtqtvm9YR1xCpiTXGg1gwHqvhBMJg8YpQ",
  authDomain: "reactemail-d1fc9.firebaseapp.com",
  projectId: "reactemail-d1fc9",
  storageBucket: "reactemail-d1fc9.appspot.com",
  messagingSenderId: "1052746902293",
  appId: "1:1052746902293:web:3b477a7a9f0228d460d71c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
