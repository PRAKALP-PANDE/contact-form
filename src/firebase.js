// // import firebase from "../node_modules/firebase/compat/app";
// // import firebase from "../node_modules/firebase/app";
// // import firebase from "../node_modules/firebase/compat/app";
// import firebase from './firebase';
// import "firebase/database";

// // var firebaseConfig = {
// //     apiKey: "AIzaSyCTJkwZ4uthi4u5rxLva93GuzGq5e82wQE",
// //     authDomain: "contact-form-7d6e9.firebaseapp.com",
// //     projectId: "contact-form-7d6e9",
// //     storageBucket: "contact-form-7d6e9.appspot.com",
// //     messagingSenderId: "632602832596",
// //     appId: "1:632602832596:web:fb575beef92f6c0e2f9541"
// //   };

// const firebaseConfig = {
//     apiKey: "AIzaSyBv9rWcuwbVURaepCxaaQNAK_rZiV7ILcE",
//     authDomain: "contactform-a3e76.firebaseapp.com",
//     projectId: "contactform-a3e76",
//     storageBucket: "contactform-a3e76.appspot.com",
//     messagingSenderId: "303120345040",
//     appId: "1:303120345040:web:c3d47278a559ed3f61fbd5"
// };

// const fireDb = firebase.initializeApp(firebaseConfig);

// export default fireDb.database().ref();

// // firebase.initializeApp(firebaseConfig);
// // var database = firebase.database();
// // export default database;

// /*

// import firebase from 'firebase';

// const firebaseConfig = {
//   // Your Credentials
// };

// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();

// export default database;

// */


// import firebase from "../node_modules/firebase/compat/app";
// import firebase from './firebase';
// const firebaseConfig = {
//     apiKey: "AIzaSyBv9rWcuwbVURaepCxaaQNAK_rZiV7ILcE",
//     authDomain: "contactform-a3e76.firebaseapp.com",
//     projectId: "contactform-a3e76",
//     storageBucket: "contactform-a3e76.appspot.com",
//     messagingSenderId: "303120345040",
//     appId: "1:303120345040:web:c3d47278a559ed3f61fbd5"
// };
// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();

// export default database;

import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBv9rWcuwbVURaepCxaaQNAK_rZiV7ILcE",
    authDomain: "contactform-a3e76.firebaseapp.com",
    projectId: "contactform-a3e76",
    storageBucket: "contactform-a3e76.appspot.com",
    messagingSenderId: "303120345040",
    appId: "1:303120345040:web:c3d47278a559ed3f61fbd5"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;

// const fireDb = firebase.initializeApp(firebaseConfig);

// export default fireDb.database().ref();
