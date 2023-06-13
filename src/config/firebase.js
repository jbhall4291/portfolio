// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1gMYTAZh4rTDijZcWnPVwT8yemLVatJ4",
  authDomain: "portfolio-e2ef3.firebaseapp.com",
  projectId: "portfolio-e2ef3",
  storageBucket: "portfolio-e2ef3.appspot.com",
  messagingSenderId: "996286065060",
  appId: "1:996286065060:web:7c42c2f0e0cbc3bc77f931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export database
export const db = getFirestore(app)