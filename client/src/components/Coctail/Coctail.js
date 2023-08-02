import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Coctail() {
    const { coctailId } = useParams();
    const [coctail, setCoctail] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${coctailId}`
                );
                const jsonData = await response.json();
                console.log(jsonData);
                setCoctail(jsonData.drinks[0]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [coctailId]);

    const renderIngredients = () => {
        const ingredients = [];
        const maxMeasurmentNumber = 15
        for (let i = 1; i <= maxMeasurmentNumber; i++) {
            const ingredientKey = `strIngredient${i}`;
            const measurementKey = `strMeasure${i}`;

            if (coctail[ingredientKey]) {
                ingredients.push(
                    <li key={i}>
                        {coctail[measurementKey] && `${coctail[measurementKey]} `}
                        {coctail[ingredientKey]}
                    </li>
                );
            }
        }
        return ingredients;
    };

    function isAlcoholic() {
        if (coctail.strAlcoholic === "Alcoholic") return "yes"
        else return "no"
    }

    return (
        <div>
            <h2>{coctail.strDrink}</h2>
            <h3>is alcoholic? : {isAlcoholic()}</h3>
            <img src={coctail.strDrinkThumb} alt={`${coctail.strDrink}`} />
            <ul>{renderIngredients()}</ul>
            <p>{coctail.strInstructions}</p>
        </div>
    );
}

export default Coctail;
