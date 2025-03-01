import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { createClient } from '@supabase/supabase-js';
// Initialize Supabase client
const supabase = createClient('https://yhqlkdcexvfsrfolbclf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlocWxrZGNleHZmc3Jmb2xiY2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4MDYyNTcsImV4cCI6MjA1NjM4MjI1N30.ijjVLRjquVzcP2XaaJePYPOD2RG5wtBGxHP7AM-PCDg');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIohFIvEhgODJK88Y2_VLGWd1sYGFvIt8",
  authDomain: "cloud-edcf9.firebaseapp.com",
  projectId: "cloud-edcf9",
  storageBucket: "", // Corrected to match Firebase Storage URL
  messagingSenderId: "906474181968",
  appId: "1:906474181968:web:fa396e1838a1758ef98855",
  measurementId: "G-69MCDBY3GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Function to sign in with Google
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User signed in:", result.user);
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

// Function to upload file to Supabase Storage
async function uploadFileToSupabase(file) {
  const filePath = `uploads/${file.name}`; // Dynamic path based on file name
  const { data, error } = await supabase.storage.from('Cloud').upload(filePath, file);
  
  if (error) {
    console.error("Error uploading to Supabase:", error);
  } else {
    console.log("File uploaded successfully to Supabase:", data);
  }
}


// Logout function
const logout = async () => {
  await signOut(auth);
  console.log("User signed out");
};

export { signInWithGoogle, uploadFileToSupabase, logout };

