// import firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: "AIzaSyB0dYbm2TvI11pBlK0WfLraofwdTARp9ks",
//     authDomain: "kndb-8b26b.firebaseapp.com",
//     databaseURL: "https://kndb-8b26b.firebaseio.com",
//     projectId: "kndb-8b26b",
//     storageBucket: "kndb-8b26b.appspot.com",
//     messagingSenderId: "370812139454",
//     appId: "1:370812139454:web:17909f6259cf4becae2bef",
//     measurementId: "G-MB7WB41PT7"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export const db = firebase.database();
// export const auth = firebase.auth;


import * as firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyB0dYbm2TvI11pBlK0WfLraofwdTARp9ks",
    authDomain: "kndb-8b26b.firebaseapp.com",
    databaseURL: "https://kndb-8b26b.firebaseio.com",
    projectId: "kndb-8b26b",
    storageBucket: "kndb-8b26b.appspot.com",
    messagingSenderId: "370812139454",
    appId: "1:370812139454:web:17909f6259cf4becae2bef",
    measurementId: "G-MB7WB41PT7"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;
