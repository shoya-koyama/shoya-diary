// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5YZOtJARI6xa6ACc3vLanLSNLQ6ymz8w",
  authDomain: "shoya-diary.firebaseapp.com",
  projectId: "shoya-diary",
  storageBucket: "shoya-diary.appspot.com",
  messagingSenderId: "542949924227",
  appId: "1:542949924227:web:1ffdd84ce5b9f478d3aab6",
  measurementId: "G-LFSSKM3YQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(typeof window !== 'undefined'){
    const analytics = getAnalytics(app);
  }

export const db = getFirestore();