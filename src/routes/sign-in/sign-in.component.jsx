
// import { getRedirectResult } from "firebase/auth"

import {
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInWithGoogleRedirect

} from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"


const SignIn = () => {

  
         //구글 어쏘리젼 체크하는데 사용하는 코드들 

     //뒤에 [] 은 펑션이 실행되면 처음 한번만 작동하게 하는것이다

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
            <SignUpForm/>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
                </button>
            
        </div>


    )
}

export default SignIn