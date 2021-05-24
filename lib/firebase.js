import firebase from 'firebase/app';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    // apiKey: "AIzaSyD9_TmpK4e9VfjKoH2agS-n4AAVahGCyOw",
    // authDomain: "at-react-demo.firebaseapp.com",
    // projectId: "at-react-demo",
    // storageBucket: "at-react-demo.appspot.com",
    // messagingSenderId: "254293322404",
    // appId: "1:254293322404:web:9336d3699963798518d431"
  });
}

export default firebase;

/*
https://at-react-demo.firebaseapp.com/__/auth/handler?apiKey=AIzaSyD9_TmpK4e9VfjKoH2agS-n4AAVahGCyOw&appName=%5BDEFAULT%5D&authType=signInViaPopup&providerId=github.com&eventId=25360357&v=8.6.1
*/