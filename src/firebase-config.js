import firebase from 'firebase';  // firebase version 7.18.0 , please check for version 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi7JRPcZU4ACZs3byCWVT52HefwCnrB0o",
  authDomain: "facebook-clone-d8f0d.firebaseapp.com",
  projectId: "facebook-clone-d8f0d",
  storageBucket: "facebook-clone-d8f0d.appspot.com",
  messagingSenderId: "1067107921032",
  appId: "1:1067107921032:web:5af064d26eb37aaa74433d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app); // to store User authentication related data
const db = app.firestore() // to store data not file data
const storage = firebase.storage(app); // to store files

export { auth, db, storage };