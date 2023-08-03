import React, { useState, useEffect } from "react";
import "./search.css";

function Search() {
  const [coctails, setCoctails] = useState({ drinks: [] });
  const [ingredient, setIngredient] = useState({ drinks: [] });
  const [allIngredients, setAllIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  useEffect(() => {
    fetchAllIngredients();
  }, []);

  const fetchAllIngredients = async () => {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
      );
      const jsonData = await response.json();
      setAllIngredients(jsonData.drinks);
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    }
  };

  const fetchDataByName = async (name) => {
    setSelectedIngredient(null);
    if (!name) {
      setCoctails({ drinks: [] });
      return;
    }
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setCoctails(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDrinkByIngredient = async (name) => {
    setSelectedIngredient(name);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setIngredient(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <label>
      <div className="container">
        Find your drink by name:
        <input type="text" onChange={(e) => fetchDataByName(e.target.value)} />
        <label>
          Find your drink by ingredient:
          <select onChange={(e) => fetchDrinkByIngredient(e.target.value)}>
            <option value="">Select an ingredient</option>
            {allIngredients.map((ingredient) => (
              <option key={ingredient.strIngredient1} value={ingredient.strIngredient1}>
                {ingredient.strIngredient1}
              </option>
            ))}
          </select>
        </label>
        <ul className={(coctails.drinks && coctails.drinks.length > 0) || selectedIngredient ? "whiteBackground" : "hidden"}>
          {coctails.drinks &&
            coctails.drinks.map((coctail) => (
              <a href={`/coctail/${coctail.idDrink}`} key={coctail.idDrink}>
                <li>{coctail.strDrink}</li>
              </a>
            ))}
        </ul>
        <ul className={selectedIngredient ? "whiteBackground" : "hidden"}>
          {ingredient.drinks &&
            ingredient.drinks.map((ingridients) => (
              <a href={`/coctail/${ingridients.idDrink}`} key={ingridients.idDrink}>
                <li>{ingridients.strDrink}</li>
              </a>
            ))}
        </ul>
      </div>
    </label>
  );
}

export default Search;
