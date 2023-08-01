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

    return (
        <div>
            { }
            <h2>{coctail.strDrink}</h2>
            <img src={coctail.strDrinkThumb} alt={`${coctail.strDrink}`} />
            <p>{coctail.strInstructions}</p>
            { }
        </div>
    );
}

export default Coctail;
