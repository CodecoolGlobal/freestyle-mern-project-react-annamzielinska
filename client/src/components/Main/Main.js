import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Main() {
  const [coctailName, setCoctailName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataByName = async (name) => {
      try {
        const response = await fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        const jsonData = await response.json();

        setCoctailName(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (coctailName) {
      fetchDataByName(coctailName);
    }
  }, [coctailName]);

  

  const routeChange = () => {
    navigate('/displaysearch');
  }

  const handleInputChange = (event) => {
    setCoctailName(event.target.value);
  };

    return (
      <>
        <header></header>
          <form>
            <label> 
            Find your drink
            <input type="text" value={coctailName}> onChange={handleInputChange}</input>
            </label>
            <button id="searchCoctails" onClick={routeChange}>Search</button>
          </form>
        <footer></footer>
      
        
      </>
    );
  }
  