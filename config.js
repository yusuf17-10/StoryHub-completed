import * as firebase from "firebase";
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyAxiUQuoPLcmtsvWupFVsQ31IP-9jN5OiM",
    authDomain: "project71-7e0cf.firebaseapp.com",
    databaseURL: "https://project71-7e0cf.firebaseio.com",
    projectId: "project71-7e0cf",
    storageBucket: "project71-7e0cf.appspot.com",
    messagingSenderId: "561766456739",
    appId: "1:561766456739:web:3f9596beb611ec01550e16"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();