import React from 'react';
import Search from '../search/Search';
import RandomDrinks from '../RandomDrinks/RandomDrinks.js'
import "./main.css"
import { useNavigate } from 'react-router-dom'
import logo from "./Logotype.png";

export default function Main() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <Search />
      </header>
      <main>
        <img src={logo} alt="Logo" />
        <div>
          <button onClick={() => navigate('/signup')}>Register</button>
          <button onClick={() => navigate('/login')}>Login</button>
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
            <RandomDrinks length="3"/>
        </div>
      </main>
      <footer>
        <h5>Contact us: drinxtazy@xtazy.com</h5>
      </footer>
    </>
  );
}
