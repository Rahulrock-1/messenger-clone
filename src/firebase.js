import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({

  apiKey: "AIzaSyD8eEtgEuu3C4DOGE7cGYcTvsvPY37CWW4",
  authDomain: "messenger-clone-10e85.firebaseapp.com",
  projectId: "messenger-clone-10e85",
  storageBucket: "messenger-clone-10e85.appspot.com",
  messagingSenderId: "1048993824058",
  appId: "1:1048993824058:web:9381e695c06aaef8166403",
  measurementId: "G-0QZVB9WCR6"

});

const db = firebaseApp.firestore();
export default db;
