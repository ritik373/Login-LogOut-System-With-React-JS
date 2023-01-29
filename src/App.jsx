import React from 'react';
import Layout from './components/Layout/Layout'
import AuthPage from './components/pages/AuthPage'
import {Routes,Route} from 'react-router-dom';
import UserProfile from './components/Profile/UserProfile';
import Home from './components/StartingPage/StartingPageContent'

function App(props) {
    return (
        <div>
        <Layout/>
       

        <Routes>
        <Route path="/" element={ <AuthPage/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/home' element={<Home/>}/>        
        </Routes>

      
            
        </div>
    );
}

export default App;