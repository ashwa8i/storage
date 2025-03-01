// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIohFIvEhgODJK88Y2_VLGWd1sYGFvIt8",
  authDomain: "cloud-edcf9.firebaseapp.com",
  projectId: "cloud-edcf9",
  storageBucket: "cloud-edcf9.firebasestorage.app",
  messagingSenderId: "906474181968",
  appId: "1:906474181968:web:fa396e1838a1758ef98855",
  measurementId: "G-69MCDBY3GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);