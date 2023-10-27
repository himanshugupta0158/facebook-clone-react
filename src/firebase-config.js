// import firebase from 'firebase';
// import firebase from './firebase';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAi7JRPcZU4ACZs3byCWVT52HefwCnrB0o",
    authDomain: "facebook-clone-d8f0d.firebaseapp.com",
    projectId: "facebook-clone-d8f0d",
    storageBucket: "facebook-clone-d8f0d.appspot.com",
    messagingSenderId: "1067107921032",
    appId: "1:1067107921032:web:5af064d26eb37aaa74433d"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

export { auth };