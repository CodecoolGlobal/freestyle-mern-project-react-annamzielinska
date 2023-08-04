import React from 'react';
import Search from '../search/Search';
import RandomDrink from '../RandomDrink/RandomDrink.js'
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
        <img src={logo} alt="Logo" />
        <div>
          <div className="loginReg">
            <button onClick={navigateRegister}>Register</button>
            <button onClick={navigateLogin}>Login</button>
          </div>
          <div>
            <h1>
              Welcome to Drin’xtazy
            </h1>
            <h2>
              your ultimate destination for all things drinks! We are delighted to have you on board as we embark on this exciting journey of mixing, searching, and discovering new and delicious beverages together.
            </h2>
          </div>
        </div>
        <div className="randomDrinks">
          <div>
            <RandomDrink />
          </div>
          <div>
            <RandomDrink />
          </div>
          <div>
            <RandomDrink />
          </div>
        </div>
      </main>
      <footer>
        <h5>Contact us: drinxtazy@xtazy.com</h5>
      </footer>
    </>
  );
}
