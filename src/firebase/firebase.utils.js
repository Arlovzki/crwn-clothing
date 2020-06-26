import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCAv9YcFJtb2tJdC-xI81I2WmrDCD07ojg",
    authDomain: "crwn-clothing-8f521.firebaseapp.com",
    databaseURL: "https://crwn-clothing-8f521.firebaseio.com",
    projectId: "crwn-clothing-8f521",
    storageBucket: "crwn-clothing-8f521.appspot.com",
    messagingSenderId: "30307911904",
    appId: "1:30307911904:web:752522a6f5b80ccf386885",
    measurementId: "G-5JFN0EP35Y"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message); 
        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);





export default firebase;
