import React from 'react';
import Search from '../search/Search';
import "./main.css"
import { useNavigate } from 'react-router-dom'

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
        <button onClick={navigateRegister}>Register</button>
        <button onClick={navigateLogin}>Login</button>
      </main>
      <footer></footer>
    </>
  );
}
