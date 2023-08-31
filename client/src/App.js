import React from 'react';
import Search from './components/search/Search'
import RandomDrinks from './components/RandomDrinks/RandomDrinks';
import "./main.css"
import { useNavigate } from 'react-router-dom'
import logo from "./Logotype.png";
import { useLogout } from './hooks/UseLogout';

export default function App() {
  const navigate = useNavigate();

  return (
    <main>
      <header className='header'>
        <img src={logo} alt="Logo" />
        <Search />
        <div className="loginReg">
          <button onClick={() => useLogout}>logout</button>
          <button onClick={() => navigate('/signup')}>Register</button>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      </header>
      <div>
        <h1>
          Welcome to Drin’xtazy
        </h1>
        <h2>
          your ultimate destination for all things drinks! We are delighted to have you on board as we embark on this exciting journey of mixing, searching, and discovering new and delicious beverages together.
        </h2>
      </div>
      <div className="randomDrinks">
        <RandomDrinks length="3" />
      </div>
      <div className="customContent">
        {<h3>Twoja Własna Zawartość</h3>}
        {<p>Tutaj możesz dodać treść, którą chcesz wyświetlić.</p>}
      </div>
      <footer>
        <h5>Contact us: drinxtazy@xtazy.com</h5>
      </footer>
    </main>
  );
}
