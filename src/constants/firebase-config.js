import firebase from "firebase";

const config = {
  apiKey: "AIzaSyD1u0WPYU5R7xu4NX-bK9KSP7tgBHfPihs",
  authDomain: "old-sport-website-219318.firebaseapp.com",
  databaseURL: "https://old-sport-website-219318.firebaseio.com",
  projectId: "old-sport-website-219318",
  storageBucket: "",
  messagingSenderId: "277061060887"
};

firebase.initializeApp(config);

export const database = firebase.database();
export const storage = firebase.storage();