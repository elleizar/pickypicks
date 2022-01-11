import React, { useState } from "react";
import { recipeData } from "../recipes";
import logo from '../images/favicon.ico';

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

  function checkURL(url, callback) {
    let request = new XMLHttpRequest();
    if (url.match(/^http:\/\//i)) {
      url = url.replace(/^http:\/\//i, 'https://')
    }
    request.open('GET', url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.setRequestHeader('Accept', '*/*');
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    request.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    request.onprogress = function (event) {
      let status = event.target.status;
      let statusFirstNumber = (status).toString()[0];
      switch (statusFirstNumber) {
        case '2':
          request.abort();
          return callback(true);
        default:
          request.abort();
          return callback(false);
      };
    };
    request.send('');
  };

  const showRecipes = (input) => {
    let ingList = [];
    let recList = [];
    let cards = [];

    // create list of ingredients
    input.forEach((ing) => {
      if (ing.ingredient.length) {
        if (!ingList.includes(ing.ingredient)) {
          ingList.push(ing.ingredient);
        }
      }
    });

    // check if ingredient in list is in recipe
    ingList.forEach((ing) => {
      recipeData.forEach((rec) => {
        if (rec.ingredients.toLowerCase().includes(ing.toLowerCase())) {
          // check if not a duplicate
          if (!recList.includes(rec)) {
            // check if link works
            // to test locally, just push rec to recList
            checkURL(rec.url, function (exists) {
              if (exists) {
                recList.push(rec);
              }
            });
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

  return (
    <>
      <div className="input-form">
        <div className="input-form-container">
          {inputList.map((x, i) => {
            return (
              <div className="input-ingredient">
                <input
                  name="ingredient"
                  placeholder="Enter ingredient"
                  value={x.ingredient}
                  onChange={e => handleInputChange(e, i)}
                />
              </div>
            );
          })}

          <div>
            {inputList.length < 3 && <button className="add-button" onClick={handleAddClick}>+</button>}
          </div>

        </div>

        <button className="get-button" onClick={e => showRecipes(inputList)}>Get Recipes!</button>
      </div>

      {/* error */}
      {error.e &&
        <div className="error-message">
          {error.m}
        </div>
      }

      {displayRecipes &&
        <div className="tip">
          Don't like these recipes? Click Get Recipes again!
        </div>
      }
      <div className="recipe-container">
        {/* recipe card */}
        {displayRecipes && recipes.map((rec, key) => {
          return (
            <div className="recipe-card" key={key}>
              <a className="recipe-url" href={rec.url} target="_blank" rel="noreferrer">
                {/* check if image exists, else replace with logo */}
                <img
                  className="recipe-image"
                  width="320px"
                  height="250px"
                  src={rec.image}
                  alt={rec.name}
                  onError={(event) => {
                    event.target.src = logo
                    event.onError = null
                  }}
                />
                <br />
                <div className="recipe-name">{rec.name}</div>
                <br />
                <div className="recipe-ing-header">
                  Ingredients
                </div>
                <div className="recipe-ingredients">{rec.ingredients}</div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  )
}
