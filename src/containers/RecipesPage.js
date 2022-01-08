import { Component } from "react";

export class RecipesPage extends Component {
  render() {
    return (
      <div className="RecipesPage">
        <h1 className="recipes-header">
          INPUT INGREDIENT(S)!
        </h1>
        <form>
          <label>
            Ingredient 1:
            <input type="text" name="ingredient1" />
          </label>
          <br/>
          <label>
            Ingredient 2:
            <input type="text" name="ingredient2" />
          </label>
          <br/>
          <label>
            Ingredient 3:
            <input type="text" name="ingredient3" />
          </label>
        </form>
      </div>
    )
  }
}