import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-2hgx6w2TKzwZ-ROQlOdB6Rx8fOh2eUU",
  authDomain: "chit-chat-65c5c.firebaseapp.com",
  databaseURL: "https://chit-chat-65c5c-default-rtdb.firebaseio.com",
  projectId: "chit-chat-65c5c",
  storageBucket: "chit-chat-65c5c.appspot.com",
  messagingSenderId: "312771126102",
  appId: "1:312771126102:web:2729e78c13e499891dacf7"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
