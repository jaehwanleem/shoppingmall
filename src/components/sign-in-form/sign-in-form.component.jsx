// import { useState, useContext } from 'react';

import { useState, useContext } from 'react';


import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';

// import { UserContext } from '../../contexts/user.contexts';

import {
  signInWithGooglePopup, 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = { //로그인 과정이라 confirm, 유저네임 필요없음 
  
  email: '',
  password: '',

};



const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const {setCurrentUser} =useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {  //데이터 요청을 하는 함수는 async 를 사용해야 한다 

    await signInWithGooglePopup();
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

   

    try {
      await signInAuthUserWithEmailAndPassword(email,password);
      // console.log({user})
      // setCurrentUser(user);

      resetFormFields();
    } catch (error) {
      // console.log(error);
      switch(error.code){
        case ('auth/wrong-password') :   //case 문뒤에는 : 가 와야한다 
        alert('incorrect password');
        break

        case ('auth/user-not-found') :
        alert('incorrect userid');
        break

        default:
          console.log(error);
        
    
      }
      
    } 
  };

  const handleChange = (event) => {
    const { name, value } = event.target; // 이벤트 타겟 속의 value를 선언해준다 

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        

        <FormInput
          label='Email'
          type='email'
          required
          onChange= {handleChange}
          name= 'email'
          value = {email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange= {handleChange}
          name= 'password'
          value = {password}
        />

      <div className='buttons-container'>
        <Button buttonType='inverted' type='submit'>Sign In</Button>

        <Button buttonType='google' type='button' onClick={signInWithGoogle} >Google Sign In</Button>

        </div>
      </form>
    </div>
  );
};

export default SignInForm;