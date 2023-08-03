import React, { useEffect, useState } from "react";

function RandomDrink() {
  const [random, setRandom] = useState({ drinks: [] });

  const fetchRandom = async () => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setRandom(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <>
      {random.drinks.length >= 1 ? (
        <div class="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={random.drinks[0].strDrinkThumb} alt={`${random.drinks[0].strDrink}`} />
          <div className="card-body">
            <h5 class="card-title" style={{ overflow: "hidden", height: "2.5rem" }}>{random.drinks[0].strDrink}</h5>
            <p class="card-text" style={{ overflow: "hidden", height: "6rem" }}>{random.drinks[0].strInstructions}</p>
          </div>
        </div>
      ) : (
        <div>No random drinks available</div>
      )}
    </>
  );
}
export default RandomDrink
