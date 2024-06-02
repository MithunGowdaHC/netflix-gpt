// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAQ0wgRwUxCSyXyMwqfsZ7JHtWdYU5pwM",
  authDomain: "netflix-gpt-d3e16.firebaseapp.com",
  projectId: "netflix-gpt-d3e16",
  storageBucket: "netflix-gpt-d3e16.appspot.com",
  messagingSenderId: "376149382564",
  appId: "1:376149382564:web:66c312177ff2f860739d31",
  measurementId: "G-HH5PZNZNGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();