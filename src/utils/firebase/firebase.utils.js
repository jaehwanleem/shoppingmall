import { initializeApp, } from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,

} from "firebase/auth"




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

const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
    prompt: "select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider);


export const db = getFirestore(); //데이터베이스 db로 부르기로 약속 

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {

    if (!userAuth) return;


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
                createdAt,
                ...additionalInformation
            })

        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    //if userdata exists

}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password); //리턴값으로 반환해줘야한다 "await" 사용하는거 꼭 알아야한다 
};