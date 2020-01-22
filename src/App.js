import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import Title from './Title';
import Start from './start';
import './App.css';

const App = () => {

  /* ID's needed for API calls */
  const APP_ID = "07d3041c";
  const APP_KEY = "71bca1fdf246a2b63f154414e1aba326";

  /* Variables */
  const calorieFilter = 40;

  /* State for Recipes (1), and for search input (2) and the search button (3), toggling the home page background (4), and toggling the homepage overlay (5) */
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('')
  const [start, setStart] = useState(true)
  const [background, setBackground] = useState("background")
  const [overlay, setOverlay] = useState("background-overlay")

  /* Function to make a request (Calls getRecipes, which is just below) */
  useEffect(() => {
    getRecipes();
  }, [query]) /* Get new recipes each time 'query' updates, which is when the 'Search' button is clicked */

  /* Method to fetch results from the API */
  const getRecipes = async () => { /* Using async/await since the data isn't coming back instantly */
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`);
    const data = await response.json(); /* Once the response comes back, create a json with it */
    setRecipes(data.hits); /* Place the hits in this const */
    console.log(data.hits);
  }

  /* Method to enter a search. Is passed to the onChange in the search bar to update the field as the user types */
  const updateSearch = searche => {
    setSearch(searche.target.value);
  }

  /* Method to hide the start component */
  const updateStart = starte => {
    setStart(false); /* Remove start message */
    setBackground("afterSearchBackground"); /* Change background */
    setOverlay("") /* Remove background overlay */
    
  }

  /* Function to search for  recipes once the 'Search" button is clicked*/
  const getSearch = clicke => {
    clicke.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (

    <div className= {background}>
      <div className= {overlay}>
        <div className="App">
          <Title />
          {/* Create Search Bar*/}
          <form className="searchForm" onSubmit={getSearch} >
            <input className="searchBar" type="text" value={search} onChange={updateSearch} />
            <button className="searchButton" type="submit" onClick={updateStart}>
              Search
          </button>
          </form>
          <div className="recipes">
            {recipes.map(recipe => (  /* Each index of the array is called a recipe*/
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}  /* recipe.recipe since I used the name recipe, and the API calls each recipe a recipe*/
                calories= {Math.round(recipe.recipe.calories) + " Calories"}
                totalTime = {recipe.recipe.totalTime + " minutes"}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            ))}
          </div>
          <div>
            <br />
            <br />
            {start && <Start />} </div>
        </div>
      </div>
      </div>
  );  
            };

export default App;
