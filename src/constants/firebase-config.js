import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDTrXMqGO5XH2tYujouYPxwtukfNbK9EcE",
    authDomain: "old-sport-website.firebaseapp.com",
    databaseURL: "https://old-sport-website.firebaseio.com",
    projectId: "old-sport-website",
    storageBucket: "old-sport-website.appspot.com",
    messagingSenderId: "185875221568"
  };

firebase.initializeApp(config);

export const database = firebase.database();
export const storage = firebase.storage();