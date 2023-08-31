import React, { useEffect, useState } from "react";
import "./randomDrinks.css";

function RandomDrinks({ length }) {
    const [drinks, setDrinks] = useState([]);
    
    function isDrinkInList(drinks, id) {
        return drinks.find(drink => drink.idDrink === id);
    }

    const fetchRandom = async () => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            return jsonData.drinks[0];
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAddToFavorites = (id, drinkPhoto, drinkName, drinkInstr) => {
        const data = {drinkId: id, name: drinkName, photoUrl: drinkPhoto, instructions: drinkInstr};
            fetch(`http://localhost:8000/fav`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.text())
            .then((result) => {
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
    


    useEffect(() => {
        const randomThreeDrinks = async () => {
            let myDrinks = [];
            while (myDrinks.length < length) {
                let drink = await fetchRandom();
                if (!isDrinkInList(myDrinks, drink.idDrink)) {
                    myDrinks = [...myDrinks, drink];
                }
            }
            return myDrinks;
        }
        randomThreeDrinks().then(drinks => setDrinks(drinks));
    }, []);

    return (
        <>
            {drinks.map(drink => (
                <div key={drink.idDrink} className="card">
                    <img className="card-img-top" src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <div className="card-body">
                        <button className="addFavButton" onClick={() => 
                            handleAddToFavorites(drink.idDrink, drink.strDrinkThumb, drink.strDrink, drink.strInstructions)}>Add to favorites</button>
                        <h5 className="card-title">{drink.strDrink}</h5>
                        <h6 className="card-subtitle">
                            {"For ingredients search up the drink in the search bar"}
                        </h6>
                        <p className="card-text">{drink.strInstructions}</p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default RandomDrinks;
