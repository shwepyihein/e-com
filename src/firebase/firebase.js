import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBU-35fsU7gFUSB7QKxKM0CP8FKn-QV8dI",
    authDomain: "crwn-db-c190e.firebaseapp.com",
    databaseURL: "https://crwn-db-c190e.firebaseio.com",
    projectId: "crwn-db-c190e",
    storageBucket: "crwn-db-c190e.appspot.com",
    messagingSenderId: "694510318003",
    appId: "1:694510318003:web:6bfe8804574349da3d1bc6",
    measurementId: "G-MY98SMEBH7"
  };

  export const createUserProfileDocument = async(userAuth,additionalData) =>{
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapshot =await userRef.get();
      console.log(snapshot)
      if(!snapshot.exists){
          const { displayName,email } =userAuth;
          const createdAt=new Date();
          
          try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          }catch(error){
                console.log('error creating user', error.message);
          }
      }
      return userRef;
  }

  firebase.initializeApp(config);  

  export const auth =firebase.auth();
  export const firestore= firebase.firestore();




  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInwithGoogle =()=>auth.signInWithPopup(provider);

  export default firebase;

