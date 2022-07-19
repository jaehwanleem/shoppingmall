
import {signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"




const SignIn = () => {

    const logGoogleUser = async () => {  //데이터 요청을 하는 함수는 async 를 사용해야 한다 

        const {user} = await signInWithGooglePopup();
        
        const userDocRef = await createUserDocumentFromAuth(user)

    }

    return( 
        <div>
            <h1>Sign in</h1>    
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>


    )
}

export default SignIn 