// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhAg-ur1UbhLbTJhA7g5IL5n5U7H4zckI",
  authDomain: "nodejs-crud-14106.firebaseapp.com",
  projectId: "nodejs-crud-14106",
  storageBucket: "nodejs-crud-14106.appspot.com",
  messagingSenderId: "74229211887",
  appId: "1:74229211887:web:a78396d7189a15d786311a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize service
const db = getFirestore(app);

export {db}


