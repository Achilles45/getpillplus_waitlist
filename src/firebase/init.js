import firebase from 'firebase';
// import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDu6wLVCxOebHRiPEtCSjox0h271DecDmc",
  authDomain: "getpillplus-waitlist.firebaseapp.com",
  projectId: "getpillplus-waitlist",
  storageBucket: "getpillplus-waitlist.appspot.com",
  messagingSenderId: "598879149968",
  appId: "1:598879149968:web:40a3b228ec349c4c691d15",
  measurementId: "G-N2B0W83T2J"
};

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();