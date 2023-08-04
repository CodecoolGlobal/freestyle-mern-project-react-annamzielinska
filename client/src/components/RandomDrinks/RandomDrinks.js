import React, { useEffect, useState } from "react";

function RandomDrinks({length}) {
    const [drinks, setDrinks] = useState([]);
    function isDrinkInList(drinks, id) {
        return drinks.find(drink => drink.idDrink == id);
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
                <div key={drink.idDrink} className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <div className="card-body">
                        <h5 className="card-title" style={{ height: "2.5rem" }}>{drink.strDrink}</h5>
                        <h6 className="card-title" style={{ height: "2.5rem", fontSize: "12px" }}>
                            {"for Ingredients search up the drink in searchbar"}
                        </h6>
                        <p className="card-text" style={{ height: "5.5rem" }}>{drink.strInstructions}</p>
                    </div>
                </div>
            ))}
        </>
    );
}
export default RandomDrinks
