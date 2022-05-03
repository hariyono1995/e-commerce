import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzliTi_0A78rvD76V_vaU9a-RBT83b83M",
  authDomain: "clone-801e6.firebaseapp.com",
  projectId: "clone-801e6",
  storageBucket: "clone-801e6.appspot.com",
  messagingSenderId: "472420184859",
  appId: "1:472420184859:web:58425d03bbdb7665bc99be",
  measurementId: "G-G9T8MBQB3Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
