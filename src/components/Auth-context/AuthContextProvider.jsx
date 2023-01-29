import React, { createContext } from 'react';
import { useState } from 'react';


const authContext=createContext({
    token:'',
    isLoggedIn:false,
    isLogIn:(token)=>{ },
    isLogOut:()=>{},
})

  function AuthContextProvider(props) {

    const [token,setToken]=useState(null);

     let isLoggedIn=!!token;

    const logInhandler=(token)=>{
        setToken(token);
    }
    const logOutHandler=()=>{
        setToken(null);
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