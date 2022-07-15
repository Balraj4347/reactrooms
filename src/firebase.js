//firebase v8
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbebNrXc0Uqsxq9XU9kPLR36xcBuZZLm8",
  authDomain: "reactwhatsapp-dee6b.firebaseapp.com",
  projectId: "reactwhatsapp-dee6b",
  storageBucket: "reactwhatsapp-dee6b.appspot.com",
  messagingSenderId: "283921511551",
  appId: "1:283921511551:web:3572a9c55641ae6b607b4a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//for DB connection
const db = firebaseApp.firestore();

//for enabled authentication
const auth = firebase.auth();

//here provider is google, bcz we use google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
