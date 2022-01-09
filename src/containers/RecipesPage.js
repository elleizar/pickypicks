import { Component } from "react";
import { IngredientsInputs } from "../components/IngredientsInputs";
import '../css/Recipes.css';

export class RecipesPage extends Component {
  render() {
    return (
      <div className="RecipesPage">
        <h1 className="recipes-header">
          INPUT INGREDIENTS!
        </h1>
        <p className="instructions">
          Add up to 3 ingredients you love to find recipes with them.
        </p>
        <IngredientsInputs/>
      </div>
    )
  }
}