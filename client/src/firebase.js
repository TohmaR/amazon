import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBDl3sRJBWb3T8DX70FAqvBjiqZfT-Mig0",
    authDomain: "clone-cd1c3.firebaseapp.com",
    projectId: "clone-cd1c3",
    storageBucket: "clone-cd1c3.appspot.com",
    messagingSenderId: "238080295894",
    appId: "1:238080295894:web:2a111f648f6344e1375a77",
    measurementId: "G-70JBVBS4TJ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};