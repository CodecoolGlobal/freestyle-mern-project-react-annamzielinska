import React, { useState } from "react";
import "./search.css"
function Search() {
    const [coctails, setCoctails] = useState({ drinks: [] })

    const fetchDataByName = async (name) => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
            const jsonData = await response.json();
            console.log(jsonData)
            setCoctails(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <label>
            Find your drink
            <div className="container">
                <input type="text" onChange={(e) => fetchDataByName(e.target.value)} />
                <ul className={coctails.hasOwnProperty("drinks") && coctails.drinks != null && coctails.drinks.length > 0 ? "whiteBackground" : null}>
                    {
                        (coctails.hasOwnProperty("drinks") && coctails.drinks != null) && coctails.drinks.map(coctail =>
                            <a href={`/coctail/${coctail.idDrink}`} key={coctail.idDrink}><li >{coctail.strDrink}</li></a>
                        )
                    }
                </ul>
            </div>
        </label>
    );
}

export default Search;
