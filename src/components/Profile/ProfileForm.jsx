import { Fragment, useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import { authContext } from '../Auth-context/AuthContextProvider';
import {  useNavigate } from 'react-router-dom';

const ProfileForm = () => {
  const navigate=useNavigate();
  const changePasswordRef=useRef();
  const AuthContext=useContext(authContext);

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    const changePassword=changePasswordRef.current.value;

    // console.log(changePassword)



    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDTzRtUh6hftSxkoODk9cKCDOd_x6AN_kc',{
      method:'POST',
  
      body:JSON.stringify({ idToken:AuthContext.token,password:changePassword,returnSecureToken:true,}),
       
     headers:{
        'Content-Type': 'application/json'
      },
     
    }).then((res)=>{


      alert("Your PassWord SuccessfulLy Changed")
      navigate('/',{replace:true});
   

      //Assumption evary case successfull
      // AuthContext.isLogOut();

    })

  }
  return (

    
    <form className={classes.form} onSubmit={onSubmitHandler}>

      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength={7} ref={changePasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>

  );
}

export default ProfileForm;
