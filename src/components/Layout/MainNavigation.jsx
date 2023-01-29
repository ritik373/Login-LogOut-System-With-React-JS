import { Link ,useNavigate } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import {authContext} from '../Auth-context/AuthContextProvider'
import { useContext } from 'react';

const MainNavigation = () => {
  const navigate=useNavigate();
  const AuthContext = useContext(authContext);

  let cxt=AuthContext.isLoggedIn ;

  const onLogOutHandler=()=>{
    AuthContext.isLogOut();
    navigate('/',{replace:true})


  }

  


  return (
    <header className={classes.header}>
      <a to='/'>
        <div className={classes.logo}>React Auth</div>
      </a>
      <nav>
        <ul>
          <li>
           { !cxt &&  <Link to='/'>Login</Link> }
          </li>
          <li>
          { AuthContext.isLoggedIn &&  <Link to='/profile'>Profile</Link>}
          </li>
          <li>
           {AuthContext.isLoggedIn && 
             <button onClick={onLogOutHandler}>Logout</button> }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
