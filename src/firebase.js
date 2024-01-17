import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC3w6zHHPv1LOGZu6pDdEAUD0iwXxCb-Mg",
  authDomain: "notes-app-d7c94.firebaseapp.com",
  projectId: "notes-app-d7c94",
  storageBucket: "notes-app-d7c94.appspot.com",
  messagingSenderId: "462906351438",
  appId: "1:462906351438:web:da156437a564b827cb481f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")