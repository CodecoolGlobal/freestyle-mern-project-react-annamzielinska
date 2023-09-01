import React, { useEffect, useState } from "react";
import "./FavCoctail.css";
import { Link } from "react-router-dom";
import logo from "../../Logotype.png";


function FavCoctail() {
  const [favdrink, setfavDrink] = useState([]);

  const fetchFavourites = async () => {
    try {
      const response = await fetch("http://localhost:8000/fav/", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const favDrinkList = await response.json();
      setfavDrink(favDrinkList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, []);

  const removeDrinkFromFavorites = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/fav/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error('Failed to remove drink from favorites');
      }
      fetchFavourites();
    } catch (error) {
      console.error('Error removing drink from favorites:', error);
    }
  };


  useEffect(() => {
    fetchFavourites();
  }, []);


  return (
    <>
      <header className='header'>
        <Link to='/'>
          <img src={logo} alt="Logo" />
        </Link>
      </header>
        <main>
          <div className="drink-container">
            {favdrink.map(drink => (
              <div key={drink._id} className="card">
                <img
                  className="card-img-top"
                  src={drink.photoUrl}
                  alt={drink.name}
                  onClick={() => (window.location.href = `/coctail/${drink.drinkId}`)}
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    onClick={() => (window.location.href = `/coctail/${drink.drinkId}`)}
                  >
                    {drink.name}
                  </h5>
                  <h6 className="card-subtitle">
                    {"For ingredients search up the drink in the search bar"}
                  </h6>
                  <p className="card-text">{drink.instructions}</p>
                  <button
                    className="removeFavButton"
                    onClick={() => removeDrinkFromFavorites(drink._id)}>
                    Remove from favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      <footer>
        <h5>Contact us: drinxtazy@xtazy.com</h5>
      </footer>
    </>
  );
}

export default FavCoctail;