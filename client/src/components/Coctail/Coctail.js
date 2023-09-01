import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Coctail.css";
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";

function Coctail() {
    const { coctailId } = useParams();
    const [coctail, setCoctail] = useState({});
    const { user } = useContext(AuthContext);

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
        return coctail.strAlcoholic === "Alcoholic" ? "yes" : "no";
    }

    const handleAddToFavorites = (id, drinkPhoto, drinkName, drinkInstr) => {
        const data = { drinkId: id, name: drinkName, photoUrl: drinkPhoto, instructions: drinkInstr };
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

    return (
        <>
            <header style={{ position: "fixed" }}>
                <img id="logoType" src="/Logotype.png" alt="Logo" onClick={() => navigate('/')} />
                <button id="favButton" onClick={() => navigate('/fav')}>Favourites</button>
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
                    {user && (
                            <button style={{fontSize: "2vh", padding:"10px 20", borderRadius:"10px"}}className="addFavButton" onClick={() =>
                                handleAddToFavorites(coctail.idDrink, coctail.strDrinkThumb, coctail.strDrink, coctail.strInstructions)}>Add to favorites</button>
                        )}
                </div>
            </main>
            <footer>
                <h5>Contact us: drinxtazy@xtazy.com</h5>
            </footer>
        </>
    );
}

export default Coctail;
