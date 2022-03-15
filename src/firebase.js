// import { initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAf7wMq-COLPAZyLU3jwNXDGV9hv8apkfk",
    authDomain: "linkedin-clone-88a3a.firebaseapp.com",
    projectId: "linkedin-clone-88a3a",
    storageBucket: "linkedin-clone-88a3a.appspot.com",
    messagingSenderId: "675008550676",
    appId: "1:675008550676:web:678d03db0ddc3191cad401"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}; 