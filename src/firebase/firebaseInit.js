import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAHV756fF3m7B3gAnGIp5UUafmywau_bd8",
    authDomain: "fireblogsyt-f277e.firebaseapp.com",
    projectId: "fireblogsyt-f277e",
    storageBucket: "fireblogsyt-f277e.appspot.com",
    messagingSenderId: "198317746853",
    appId: "1:198317746853:web:73bb2b3e4a65443b8afb4c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();