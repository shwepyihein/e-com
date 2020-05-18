import React from 'react'
import './SigninandSignout.scss'
import SignIn from '../../components/Signin/Signin'
import SignUp from '../../components/Signup/Signup'
const SignInAndSignout =()=>{
    return(
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}


export default SignInAndSignout