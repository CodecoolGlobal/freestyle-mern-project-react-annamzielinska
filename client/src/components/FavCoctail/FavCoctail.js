import React, { useEffect, useState } from "react";

function GetFavDrink() {
  const [favdrink, setfavDrink] = useState([]);

  const fetchFavourites = async () => {
    try{    
        const response = await fetch("http://localhost:8000/fav/", {
            method: "GET",
    })
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
    {console.log(favdrink)}
      {favdrink.length >= 1 ? (favdrink.map(drink => (
        <div className="card" key={drink._id} style={{ width: "18rem" }}>
          <img className="card-img-top" src={drink.photoUrl} alt={`${drink.name}`} />
          <div className="card-body">
            <h5 class="card-title">{drink.name}</h5>
            <p class="card-text">{drink.instruction}</p>
          </div>
        </div>
      ))
      ) : (
        <div>No favourite drinks available</div>
      )}
    </>
  );
}
export default GetFavDrink