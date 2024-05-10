// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCq-wxrpmu80ju0cThLc8OOYsyfqOg7quA",
  authDomain: "portfolio-3-2d14e.firebaseapp.com",
  databaseURL: "https://portfolio-3-2d14e-default-rtdb.firebaseio.com",
  projectId: "portfolio-3-2d14e",
  storageBucket: "portfolio-3-2d14e.appspot.com",
  messagingSenderId: "706080809880",
  appId: "1:706080809880:web:f32a8e10afbf1d9bc541ed",
  measurementId: "G-HXF81QZMTM"
};

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const analytics = getAnalytics();
export const storage = getStorage();