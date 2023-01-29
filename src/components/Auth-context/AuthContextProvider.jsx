import React, { createContext } from 'react';
import { useState } from 'react';


const authContext=createContext({
    token:'',
    isLoggedIn:false,
    isLogIn:(token)=>{ },
    isLogOut:()=>{},
})

  function AuthContextProvider(props) {
    const initialToken=localStorage.getItem('token');

    const [token,setToken]=useState(initialToken);

     let isLoggedIn=!!token;

    const logInhandler=(token)=>{
        setToken(token);
        localStorage.setItem('token',token);
    }
    const logOutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token')
    }


    let contextData={
        token:token,
   
        isLoggedIn:isLoggedIn,
        isLogIn:logInhandler,
        isLogOut:logOutHandler,
    }
    return (
        <div>
        <authContext.Provider value={contextData}>{props.children}</authContext.Provider>
            
        </div>
    );
}

export default AuthContextProvider;
export {authContext};