// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBljJm4qQHHWYvP5OCKHpfQQFN-7EG47wY",
  authDomain: "saving-buddy.firebaseapp.com",
  projectId: "saving-buddy",
  storageBucket: "saving-buddy.appspot.com",
  messagingSenderId: "349271132177",
  appId: "1:349271132177:web:8ef4f20a64ec94f46ac9b0",
  measurementId: "G-BV35PBQRER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig