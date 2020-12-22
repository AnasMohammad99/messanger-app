import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyD_eVyg0YrAJEOyrGnHJ08gVmQSO9sjCj4",
  authDomain: "messanger-clone-1c69e.firebaseapp.com",
  databaseURL: "https://messanger-clone-1c69e.firebaseio.com",
  projectId: "messanger-clone-1c69e",
  storageBucket: "messanger-clone-1c69e.appspot.com",
  messagingSenderId: "710053424564",
  appId: "1:710053424564:web:e94b0edaf03d8e8ae856e1"
});

const db = firebaseApp.firestore();

export default db;