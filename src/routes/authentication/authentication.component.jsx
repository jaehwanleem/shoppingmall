
import { getRedirectResult } from "firebase/auth"

import "./authentication.styles.scss"

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

import SignInForm from "../../components/sign-in-form/sign-in-form.component"


const Authentication = () => {

         //구글 어쏘리젼 체크하는데 사용하는 코드들 

     //뒤에 [] 은 펑션이 실행되면 처음 한번만 작동하게 하는것이다



    return( 
        <div className="authentication-container">
            <SignInForm/>
            <SignUpForm/>
         </div>


    )
}

export default Authentication