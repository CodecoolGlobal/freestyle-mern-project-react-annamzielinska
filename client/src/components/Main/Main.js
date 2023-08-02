import React from 'react';
import Search from '../search/Search';
import RandomDrink from '../RandomDrink/RandomDrink';
import "./main.css"
import { useNavigate } from 'react-router-dom'
import logo from "./Logotype.png";

export default function Main() {
  const navigate = useNavigate();

  const navigateRegister = () => {
    // 👇️ navigate to /
    navigate('/signup');
  };

  const navigateLogin = () => {
    // 👇️ navigate to /
    navigate('/login');
  };

  return (
    <>
      <header>
        <Search />
      </header>
      <main>
        <img src={logo} alt="Logo"/>
        <div>
        <button onClick={navigateRegister}>Register</button>
        <button onClick={navigateLogin}>Login</button>
        <div>
          <h1>
          Welcome to Drin’xtazy
          </h1>
          <h2>
            Blalalalalalbabalalala
          </h2>
        </div>
        </div>
        <div>
          <RandomDrink/>
        </div>
        <div>
          <RandomDrink/>
        </div>
        <div>
          <RandomDrink/>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
