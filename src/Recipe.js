import React from 'react';
import recipeStyling from "./recipe.module.css";


/* Overall, data is being taken from the recipes state, is being passed to the props, which is passed to this component*/
const Recipe = ({title, calories, totalTime, image, ingredients }) => { /* Pass the props from App.js into this recipe component*/
    return(
        <div className={recipeStyling.recipe}>
            <h1> {title} </h1>
            <img className={recipeStyling.image} src= {image} alt=""/>
            <h4> {calories + "   |   " + totalTime} </h4>
            <ul>
                {ingredients.map(ingredient => ( /* Loop through the array of ingredients and render each line*/
                    <li> {ingredient.text} </li>
                ))}
            </ul>
        </div>

    );
}

export default Recipe;