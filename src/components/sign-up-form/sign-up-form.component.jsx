import {useState} from 'react'

import FormInput from '../form-input/form-input.component'



import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields =  { //디폴트 오브젝트 즉 형식만 주고 내용은 공란인것이 필요하다
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {

   

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    // console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      };

    const handleSubmit = async (event) => {  //submit 할수 있는지 검증하는 펑션 
        event.preventDefault();

        if(password != confirmPassword) {
        alert("password dosen't confirm")
        return;
        }
        

        try {
            const {user} = await createAuthUserWithEmailAndPassword(
                email, 
                password
                );
            console.log({user})

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();


        } catch(error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already use')
            }

            console.log('user creation encountered an error', error)
        }
    }


    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value })
    }

    
    return(
        <div>
            <h1>sign up with your email</h1>
            <form onSubmit={handleSubmit}>
            
                <FormInput lable = "Display Name" type="text" onChange={handleChange} name="displayName" value={displayName} required/>

                
                <FormInput lable = "Email" type="email" onChange={handleChange} name="email" value={email} required/>

                <FormInput lable = "Password" type="password" onChange={handleChange} name="password" value={password} required/>

                <FormInput lable = "Confirm Password" type="password" onChange={handleChange} name="password" value={confirmPassword} required/>

                <button type="submit">sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm