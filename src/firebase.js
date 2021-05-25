// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeuVEDShwt8r7zOfHTZ_4F1CEyl0CokXc",
  authDomain: "my-react-class-project.firebaseapp.com",
  databaseURL: "https://my-react-class-project-default-rtdb.firebaseio.com",
  projectId: "my-react-class-project",
  storageBucket: "my-react-class-project.appspot.com",
  messagingSenderId: "31413353791",
  appId: "1:31413353791:web:09ee0b5656624fa00a678a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
