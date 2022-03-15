
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {
    const [email, setEmail] =  useState("");
    const [password, setPassword] =  useState("");
    const [name, setName] =  useState("");
    const [profilePic, setProfilePic] =  useState("");
    const dispatch = useDispatch();

    const register = () => {
        if(!name){
            return alert("Please enter your full name!")
        }

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => { 
            userAuth.user
                .updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
            .then(() =>  {
                dispatch(
                    login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,
                    })
                );
            });
        })
        .catch(error => alert(error));
    };

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((userAuth)  =>  { 
            dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
            }));
        }).catch(error => alert(error));
    };
  return (
    <div  className='login'>
        <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="" />
        <form action="">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Full Name (New Users)'   
            />
            <input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Enter profile pic URL (Optional)' />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
            <button type='submit' onClick={loginToApp}>Sign in</button>
        </form>
        <p>Not a member? <span className='login__register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login;