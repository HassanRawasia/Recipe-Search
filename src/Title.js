import React from 'react';
import bannerStyling from "./title.module.css";

const Title = () => {
    return(
        <div className = {bannerStyling.topbar}>
            <h1 className= {bannerStyling.title}> Recipe Search </h1>
            <br />
            <h5 className= {bannerStyling.description}> Search for full recipes with nutrition information</h5>
        </div>
    )

}

export default Title;