import React, { useEffect, useState } from "react";
import "./FavCoctail.css";

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

  return (
    <>
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
            <button className="addFavButton">
              Remove from favorites
            </button>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default FavCoctail;