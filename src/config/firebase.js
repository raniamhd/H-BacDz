// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATHxa69aI0cogIulmqT-C7VsddnDdXbY8",
  authDomain: "h-bacdz.firebaseapp.com",
  projectId: "h-bacdz",
  storageBucket: "h-bacdz.appspot.com",
  messagingSenderId: "505356118119",
  appId: "1:505356118119:web:d986b85e71d2989ab38cc2",
  measurementId: "G-7K6XK2Q8WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);