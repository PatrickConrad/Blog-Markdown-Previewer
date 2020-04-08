import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAc2FCZsjbY1R5vMppg9wlmjpV9TRLtYao",
    authDomain: "blog-f3b86.firebaseapp.com",
    databaseURL: "https://blog-f3b86.firebaseio.com",
    projectId: "blog-f3b86",
    storageBucket: "blog-f3b86.appspot.com",
    messagingSenderId: "84157150595",
    appId: "1:84157150595:web:5399e2ee2874bb6bdd72b6"
  };



   // Initialize Firebase

firebase.initializeApp(firebaseConfig);


export default firebase.database()


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries --> */}


 
