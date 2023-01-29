import React, { useContext } from 'react';
import Layout from './components/Layout/Layout'
import Navigation from './components/Layout/MainNavigation'
import AuthPage from './components/pages/AuthPage'
import {Routes,Route, useNavigate} from 'react-router-dom';
import UserProfile from './components/Profile/UserProfile';
import Home from './components/StartingPage/StartingPageContent'
import { authContext } from './components/Auth-context/AuthContextProvider';

function App(props) {
    const AuthContext=useContext(authContext);
    const loginCondition=AuthContext.isLoggedIn;

    const navigate=useNavigate()
    return (
        <div>
            <Layout/>
       

        <Routes>
        <Route path="/" element={ <AuthPage/>}/>
        <Route path='/profile'
         element={loginCondition && <UserProfile/> || !loginCondition&& <h1 style={{fontSize:'100px'}}>404 PAGE NOT FOUND</h1>  }
        
        />
        <Route path='/home' element={loginCondition && <Home/> || !loginCondition && <h1 style={{fontSize:'100px'}}>404 PAGE NOT FOUND</h1>}/>        
        </Routes>

      
            
        </div>
    );
}

export default App;