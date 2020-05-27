import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDqWI2QZVqUaJs8Z-Xz583DU-2c8OuXyTA",
    authDomain: "event-registration-f8212.firebaseapp.com",
    databaseURL: "https://event-registration-f8212.firebaseio.com",
    projectId: "event-registration-f8212",
    storageBucket: "event-registration-f8212.appspot.com",
    messagingSenderId: "444163011392",
    appId: "1:444163011392:web:c41061a90eac6e336400a5",
    measurementId: "G-FXEXX24W2T"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get(); 
    console.log(snapShot);

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });

        console.log("user added successfully to firestore");
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;

  }

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
