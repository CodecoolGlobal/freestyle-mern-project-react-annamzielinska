import React, { useEffect, useState } from "react";


function RandomDrink() {
    const [random, setRandom] = useState({ drinks: [] })

    const fetchRandom = async () => {
        try {
            const response = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/random.php`);
            const jsonData = await response.json();
            // console.log(jsonData);
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
                <div>
                    <h3>{random.drinks[0].strDrink}</h3>
                    <img src={random.drinks[0].strDrinkThumb} alt={`${random.drinks[0].strDrink}`} style={{ width: "30vh" }} />
                    <p>{random.drinks[0].strInstructions}</p>
                </div>
            ) : (
                <div>No random drinks available</div>
            )}
        </>
    );
}

export default RandomDrink;