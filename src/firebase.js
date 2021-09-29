import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCVd_w4wSBMexZ_KTQe78TOGPWYRYQGksI",
    authDomain: "viric-data.firebaseapp.com",
    projectId: "viric-data",
    storageBucket: "viric-data.appspot.com",
    messagingSenderId: "450986112328",
    appId: "1:450986112328:web:f3d318da8715ecf36e2f7d",
    measurementId: "G-M02589B841"
};
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();

export default db;