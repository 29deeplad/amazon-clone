//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7Jo7cRkcvCnR9Wg3fLHVyk6GnEhMQO_A",
  authDomain: "clone-d828a.firebaseapp.com",
  projectId: "clone-d828a",
  storageBucket: "clone-d828a.appspot.com",
  messagingSenderId: "984063066108",
  appId: "1:984063066108:web:b67205f0bfb28913a2fc79"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };