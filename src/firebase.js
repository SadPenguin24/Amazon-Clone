// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAGfBke-ZtlqlsLdIoEp3ImpJhFBzpX-4Y",
  authDomain: "clonez-f8ba5.firebaseapp.com",
  databaseURL: "https://clonez-f8ba5.firebaseio.com",
  projectId: "clonez-f8ba5",
  storageBucket: "clonez-f8ba5.appspot.com",
  messagingSenderId: "864009589713",
  appId: "1:864009589713:web:10a042635aa98b4dc2c6f0",
  measurementId: "G-7TDK7QNFXG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
