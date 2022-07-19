import { initializeApp, } from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
}

    from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBTYfkQfPHJocwFEtoTrAr6v9ZW5YR-_XQ",
    authDomain: "crwn-clothing-db-da776.firebaseapp.com", //db 들어있는 곳 
    projectId: "crwn-clothing-db-da776",
    storageBucket: "crwn-clothing-db-da776.appspot.com",
    messagingSenderId: "27571458062",
    appId: "1:27571458062:web:d4834316a89c5ee6972c5f"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//안되면 괄호 없애준다 


export const db = getFirestore(); //데이터베이스 db로 부르기로 약속 

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)

    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    //if userdata not exist


    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })

        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    //if userdata exists

}