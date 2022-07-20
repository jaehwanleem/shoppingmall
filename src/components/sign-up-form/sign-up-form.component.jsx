import {useState} from 'react'

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields =  { //디폴트 오브젝트 즉 형식만 주고 내용은 공란인것이 필요하다
    displayname: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {

   

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayname, email, password, confirmPassword} = formFields;

    console.log(formFields)

    const handleSubmit = async (event) => {  //submit 할수 있는지 검증하는 펑션 
        event.preventDefault();

        if(password != confirmPassword) {
        alert("password dosent confirm")
        return;
        }
        

        try {
            const response = await createAuthUserWithEmailAndPassword(email, password)
            console.log(response)

        } catch(error) {
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
                <lablel>Display Name</lablel>
                <input type="text" onChange={handleChange} name="displayname" value={displayname} required/>

                <lablel>Email</lablel>
                <input type="email" onChange={handleChange} name="email" value={email} required/>

                <lablel>Password</lablel>
                <input type="password" onChange={handleChange} name="password" value={password} required/>

                <lablel>Confirm Password</lablel>
                <input type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>
                <button type="submit">sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm