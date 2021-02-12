import * as firebase from 'firebase'
//  import 'firebase/storage' 
//  import 'firebase/analytics'
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyClOj2-KMz6ONQlJw6EOkUAC3p6J4qQSwE",
  authDomain: "wily-app-5d919.firebaseapp.com",
  projectId: "wily-app-5d919",
  storageBucket: "wily-app-5d919.appspot.com",
  messagingSenderId: "121599158701",
  appId: "1:121599158701:web:ee4de9a7dd06c1935cd924"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();