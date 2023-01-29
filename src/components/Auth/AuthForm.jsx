import { useRef } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import {authContext} from '../Auth-context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

import classes from './AuthForm.module.css';
''
const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const AuthContext = useContext(authContext)
  const navigate =useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLaoding] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onSubmitHnadler = (event) => {
    event.preventDefault();
      const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;





    setIsLaoding(false);
    let url;
    let errMsg;
    if (isLogin) {

      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDTzRtUh6hftSxkoODk9cKCDOd_x6AN_kc', {
        method: 'POST',
        body: JSON.stringify({ email: emailInput, password: passwordInput, returnSecureToken: true, }),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((res) => {
        if (res.ok) {
          console.log("You Are LogIN ")
          return res.json().then((data)=>{
            // console.log(data.idToken)
            AuthContext.isLogIn(data.idToken)
            navigate('/home', { replace: true })



          })
          
        }else{

          return res.json().then((err)=>{
            errMsg=err.error.message;

            throw new Error(errMsg)})

        }
     }).catch((err)=>{
      alert(errMsg);
     })
    


   
    } else {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDTzRtUh6hftSxkoODk9cKCDOd_x6AN_kc', {
        method: 'POST',
        body: JSON.stringify({ email: emailInput, password: passwordInput, returnSecureToken: true, }),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then((res) => {
        if (res.ok) {
          console.log("Account Craeted Sucessfull")
          res.json().then((data) => {
            console.log(data);
          });
        } else {

          return res.json().then((res) => {
            
              if (res && res.error && res.error.message) {
                  errMsg = res.error.message;
            }
            throw new Error(errMsg);
          })

        }
      

      }).catch((errMsg) => {
        alert(errMsg);
      })
     


      const closeInterval = setInterval(() => {
        setIsLaoding(true);
        // console.log("your Account Created successfull")
      },)
  
      setTimeout(() => {
        console.log("your Account Created  in 2 Seconds successfull")
        setIsLaoding(false)
        clearInterval(closeInterval);
      }, 2000)



    }




  




  }





return (
  <section className={classes.auth}>
    <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
    <form onSubmit={onSubmitHnadler}>
      <div className={classes.control}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' ref={emailInputRef} required />
      </div>
      <div className={classes.control}>
        <label htmlFor='password'>Your Password</label>
        <input type='password' id='password' ref={passwordInputRef} required />
      </div>
      <div className={classes.actions}>
        {!isLoading && <button >{isLogin ? 'Login' : 'Create Account'}</button>}
        {isLoading && <h1>Sending Request...</h1>}





        <button
          type='button'
          className={classes.toggle}
          onClick={switchAuthModeHandler}
        >
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </button>
      </div>
    </form>
  </section>
);
}

export default AuthForm;
