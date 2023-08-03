import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Coctail.css";
import { useNavigate } from 'react-router-dom'

function Coctail() {
    const { coctailId } = useParams();
    const [coctail, setCoctail] = useState({});

    const navigate = useNavigate();

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

    const navigateBack = () => {
        // 👇️ navigate to /
        navigate('/');
    };

    return (
        <>
            <header style={{ position: "fixed" }}>
                <img id="logoType" src="/Logotype.png" alt="Logo" />
                <button id="backButton" onClick={navigateBack}>Back</button>
            </header>
            <main>
                <div className="coctailBorder">
                    <h2 id="coctailName">{coctail.strDrink}</h2>
                    <h3 id="isAlcoholic">is alcoholic : {isAlcoholic()}</h3>
                    <div className="contentContainer">
                        <div className="imageContainer">
                            <img src={coctail.strDrinkThumb} alt={`${coctail.strDrink}`} />
                        </div>
                        <div className="textContainer">
                            <ul>{renderIngredients()}</ul><br></br>
                            <p>{coctail.strInstructions}</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <h5>Contact us: drinxtazy@xtazy.com</h5>
            </footer>
        </>
    );
}

export default Coctail;
