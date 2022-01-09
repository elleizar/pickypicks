import React, { useState } from "react";
import { recipeData } from "../recipes";

export const IngredientsInputs = () => {
  const [inputList, setInputList] = useState([{ ingredient: "" }]);
  const [displayRecipes, setDisplayRecipes] = useState(false);
  const [recipes, getRecipes] = useState({ e: false, m: "" });
  const [error, setError] = useState({ e: false, m: "" });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { ingredient: "" }]);
  };

  const showRecipes = (input) => {
    let ingList = [];
    let recList = [];
    let cards = [];

    // create list of ingredients
    input.forEach((ing) => {
      if (ing.ingredient.length) {
        ingList.push(ing.ingredient);
      }
    });

    // check if ingredient in list is in recipe
    ingList.forEach((ing) => {
      recipeData.forEach((rec) => {
        console.log(ing, rec.ingredients)
        if (rec.ingredients.toLowerCase().includes(ing.toLowerCase())) {
          if (!recList.includes(rec)) {
            //push into recList if yes and not a duplicate
            recList.push(rec);
          }
        }
      })
    })

    if (recList.length > 0) { // show cards if recList has recipes
      setDisplayRecipes(true);
      setError({ e: false, m: "" });
    }
    else { // show error
      setDisplayRecipes(false);
      setError({ e: true, m: "No recipes for the corresponding ingredient(s)." });
    }

    // shuffle and randomly get 3 recipes from recList to display
    if (recList.length > 3) {
      let currentIndex = recList.length;
      let randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [recList[currentIndex], recList[randomIndex]] = [recList[randomIndex], recList[currentIndex]];
      }

      cards = recList.slice(0, 3);
      getRecipes(cards);
    }
    else {
      getRecipes(recList);
    }
  }

  const checkIfImageExists = (url) => {
    var http = new XMLHttpRequest();
    http.open('GET', url, true);
    http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    http.setRequestHeader('Accept', '*/*');
    http.setRequestHeader('Access-Control-Allow-Origin', '*');
    http.send();

    console.log(http)
    if (http.status !== 404 || http.status !== 500 || http.status !== 301) {
      return true;
    }
    else {
      return false;
    }
  }


  return (
    <>
      <div className="input-form">
        <div className="input-form-container">
          {inputList.map((x, i) => {
            return (
              <div className="input-ingredient">
                <input
                  name="ingredient"
                  placeholder="Enter Ingredient"
                  value={x.ingredient}
                  onChange={e => handleInputChange(e, i)}
                />
              </div>
            );
          })}
        </div>
        <div className="add-button">
          {inputList.length < 3 && <button onClick={handleAddClick}>+</button>}
        </div>
        <button className="get-button" onClick={e => showRecipes(inputList)}>Get Recipes!</button>
        {console.log(JSON.stringify(inputList))}
      </div>

      <div className="recipe-container">
        {/* error */}
        {error.e && error.m}

        {/* recipe card */}
        {displayRecipes && recipes.map((rec, key) => {
          return (
            <div className="recipe-card" key={key}>
              <a className="recipe-url" href={rec.url} target="_blank" rel="noreferrer">
                {/* check if image exists, else replace with logo (doesn't work yet)*/}
                {checkIfImageExists(rec.image) ? <img className="recipe-image" width="320px" height="250px" src={rec.image} alt={rec.name} /> : <img className="recipe-image" width="320px" height="250px" src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" alt={rec.name} />
                }
                <br />
                <div className="recipe-name">{rec.name}</div>
                <br />
                <div className="recipe-ingredients">{rec.ingredients}</div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  )
}
