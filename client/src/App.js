import React from 'react';
import Search from './components/search/Search'
import RandomDrinks from './components/RandomDrinks/RandomDrinks';
import "./main.css"
import { useNavigate } from 'react-router-dom'
import logo from "./Logotype.png";
import { useLogout } from './hooks/UseLogout';
import MainText from './components/MainText/MainText';

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <header className='header'>
        <img src={logo} alt="Logo" />
        <Search />
        <div className="loginReg">
          <button className="logoutButton" onClick={() => useLogout}>logout</button>
          <button className="regButton" onClick={() => navigate('/signup')}>Register</button>
          <button className="loginButton" onClick={() => navigate('/login')}>Login</button>
        </div>
      </header>
      <main>
      <div>
        <MainText/>
      </div>
      <div className="randomDrinks">
        <RandomDrinks length="3" />
      </div>
      <footer>
        <h5>Contact us: drinxtazy@xtazy.com</h5>
      </footer>
    </main>
    </>
  );
}
