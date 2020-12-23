import firebase from "firebase";


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCOfM6VLoEQnsfhrmWi_T7XPsB9Y9RRajA",
    authDomain: "nintendo-bloom.firebaseapp.com",
    projectId: "nintendo-bloom",
    storageBucket: "nintendo-bloom.appspot.com",
    messagingSenderId: "857273517005",
    appId: "1:857273517005:web:e2b562c31be750b417ba84",
    measurementId: "G-M7PN3XTQVY"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  
export default firebase;