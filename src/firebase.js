// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZPoY5_1egRtvR6_MaKAk0r8j0DU4FgVU",
    authDomain: "twitter-clone-e23a7.firebaseapp.com",
    projectId: "twitter-clone-e23a7",
    storageBucket: "twitter-clone-e23a7.appspot.com",
    messagingSenderId: "793732233588",
    appId: "1:793732233588:web:f104d863fc4460f3c19421",
    measurementId: "G-YHGL5P7S5N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;