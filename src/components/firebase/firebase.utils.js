import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAgM25-cr1sTZQcRkiSn1BtvrVUq-X2EeU",
  authDomain: "crwn-db-55a99.firebaseapp.com",
  databaseURL: "https://crwn-db-55a99.firebaseio.com",
  projectId: "crwn-db-55a99",
  storageBucket: "",
  messagingSenderId: "401308332513",
  appId: "1:401308332513:web:b32241048dd3c497"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
