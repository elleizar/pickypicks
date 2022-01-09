import { Component } from "react";
import { IngredientsInputs } from "../components/IngredientsInputs";

export class RecipesPage extends Component {
  render() {
    return (
      <div className="RecipesPage">
        <h1 className="recipes-header">
          INPUT INGREDIENT(S)!
        </h1>
        <IngredientsInputs/>
      </div>
    )
  }
}