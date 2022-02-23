import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAqexhYoFpcmhtQXx7wS2WO92XJB0i3V3E",
  authDomain: "ecommerce-fests.firebaseapp.com",
  projectId: "ecommerce-fests",
  storageBucket: "ecommerce-fests.appspot.com",
  messagingSenderId: "435562184542",
  appId: "1:435562184542:web:684453513ec6034c4c19cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db