import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAhb9avdDHhec7ZUacFcpowV-lXPGIT5gY",
    authDomain: "scheduler-a3b09.firebaseapp.com",
    databaseURL: "https://scheduler-a3b09-default-rtdb.firebaseio.com",
    projectId: "scheduler-a3b09",
    storageBucket: "scheduler-a3b09.appspot.com",
    messagingSenderId: "325757971431",
    appId: "1:325757971431:web:e52ce540578615bb5fab42",
    measurementId: "G-HYNBMQPX31"
};

firebase.initializeApp(firebaseConfig);

export default firebase;