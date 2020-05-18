import React from 'react';
import './Signin.scss'
import FromInput from '../form_input/form_input'
import CustomButtom from '../custom-buttom/custom-buttom';
import { auth, signInwithGoogle } from '../../firebase/firebase'

class SignIn extends React.Component{
    constructor(props){
        super(props)
            this.state={
            email:'',
            password:''
            
        }
    }

    handleSubmit = async e=>{
        e.preventDefault()
        const{email,password}=this.state

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});

        }catch(error){
            console.log(error)
        }
    }
    handlechange = e=>{
        const{name,value}= e.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>                    
                    <FromInput 
                    name="email"
                    type="email"
                    label="Email"
                     value={this.state.email} 
                    handlechange={this.handlechange}                    
                     required/>                    
                    <FromInput 
                    name="password" 
                    type="password" 
                    label="Password"
                    value={this.state.password} 
                    handlechange={this.handlechange}
                    required/>
                  <div className="buttons">
                  <CustomButtom type="submit" > Sign In</CustomButtom>
                    <CustomButtom onClick={signInwithGoogle} isGoogleSignIn > Sign In with google </CustomButtom>
                  </div>
                </form>
            </div>
        )
    }
}
export default SignIn;