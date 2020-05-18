
import React from 'react';
import './Signup.scss'
import FromInput from '../form_input/form_input'
import CustomButtom from '../custom-buttom/custom-buttom';

import { auth, createUserProfileDocument } from '../../firebase/firebase'

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit= async event=>{
        event.preventDefault();
        const{displayName,email,password,confirmPassword}= this.state
        if(password !== confirmPassword){
            alert ("password don't match");
            return;
        }
        try{
            const{user} =await auth.createUserWithEmailAndPassword(email,password)

            createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })

        }catch(error){
            console.error(error);
            
        }
    }

    handlechange=event=>{
        const{name,value}= event.target;
        this.setState({[name]:value})
    }

    render(){
        const{displayName,email,password,confirmPassword}= this.state
        return(
                <div className='sign-up'>
                    <h2 className="title">I do not have a account</h2>
                    <span>Signup with email and password</span>
                    <form className='sign-up-from' onSubmit={this.handleSubmit}>
                    <FromInput 
                        name="displayName"
                        type="text"
                        label="DisplayName"
                        value={displayName} 
                        handlechange={this.handlechange}                    
                     required/> 
                    <FromInput 
                        name="email"
                        type="email"
                        label="Email"
                        value={email} 
                        handlechange={this.handlechange}                    
                     required/>                    
                    <FromInput 
                        name="password" 
                        type="password" 
                        label="Password"
                        value={password} 
                        handlechange={this.handlechange}
                        required/>
                     <FromInput 
                        name="confirmPassword" 
                        type="password" 
                        label="confirmPassword"
                        value={confirmPassword} 
                        handlechange={this.handlechange}
                        required/>
                         <CustomButtom type="submit" > Sign Up</CustomButtom>
                    </form>
                </div>
        )
    }
}

export default SignUp