import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfriouFo2lQzaUBeY_ur-otEQ9XYuExB8",
  authDomain: "budgeting-rule-app.firebaseapp.com",
  projectId: "budgeting-rule-app",
  storageBucket: "budgeting-rule-app.appspot.com",
  messagingSenderId: "997802950885",
  appId: "1:997802950885:web:07413045c5884f9ee9140c",
  measurementId: "G-C5ZSG968XL",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { db, auth };
