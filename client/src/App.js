import React from 'react';
import Search from './components/search/Search'
import RandomDrinks from './components/RandomDrinks/RandomDrinks';
import "./main.css"
import { useNavigate } from 'react-router-dom'
import logo from "./Logotype.png";
import { useLogout } from './hooks/UseLogout';
import MainText from './components/MainText/MainText';
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext';

export default function App() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { logout } = useLogout();

  const handleLogoutClick = () => {
    logout();
  }

  return (
    <>
      <header className='header'>
        <img src={logo} alt="Logo" />
        <Search />
        {user && (
          <div className='logoutReg'>
            <span>{user.username}</span><br/>
            <button id="favButton" onClick={() => navigate('/fav')} style={{margin:"2px"}}>Favourites</button>
            <button className="logoutButton" onClick={handleLogoutClick}>Logout</button>
          </div>
        )}
        {!user && (
          <div className="loginReg">
            <button className="regButton" onClick={() => navigate('/signup')}>Register</button>
            <button className="loginButton" onClick={() => navigate('/login')}>Login</button>
          </div>
        )}
      </header>
      <main>
        <div>
          <MainText />
        </div>
        <div className="randomDrinks">
          <RandomDrinks length="3" />
        </div>
      </main>
        <footer>
          <h5>Contact us: drinxtazy@xtazy.com</h5>
        </footer>
    </>
  );
}
