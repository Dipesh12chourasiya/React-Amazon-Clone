// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTXPjXVejzHr6NA5azLvGRq3i-uyE2spw",
  authDomain: "eclone-53762.firebaseapp.com",
  projectId: "eclone-53762",
  storageBucket: "eclone-53762.appspot.com",
  messagingSenderId: "1075073183125",
  appId: "1:1075073183125:web:5734e30f04955eb4c29a9c",
  measurementId: "G-VF79V59WPV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig