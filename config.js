import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyC2c_9uylSsL6yB8YubOROZbejya2Lc9-s",
    authDomain: "wily-app-e8a3b.firebaseapp.com",
    databaseURL: "https://wily-app-e8a3b.firebaseio.com",
    projectId: "wily-app-e8a3b",
    storageBucket: "wily-app-e8a3b.appspot.com",
    messagingSenderId: "389095801019",
    appId: "1:389095801019:web:e0738d0d588ffed2d3a99e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();