import React from 'react';
import startStyling from './start.module.css';
import edamam from "./edamam.png";

/* Overall, data is being taken from the recipes state, is being passed to the props, which is passed to this component*/
const Start = () => { /* Pass the props from App.js into this recipe component*/
    return(
        <div className= {startStyling.message} >
            <h2> Finding Recipes. Made easy. </h2>
            <h3 > 
                Search from 100's of recipes with this tool. Each recipe includes the name and a picture,
                amount of calories and the required ingredients.
                <br />
                <br />
                <br />
                <img src={edamam} />
            </h3>
        </div>

    );
}

export default Start;