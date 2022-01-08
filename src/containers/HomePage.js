import { Component  } from "react";
import { Link } from 'react-router-dom';

export class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1 className="home-header">
          pickypicks
        </h1>
        <img src="" className="home-emoji" alt="emoji" />
        <br/>
        <Link to='/recipes'>
          <button 
            className="getButton">
              Get Recipes!
          </button>
        </Link>
      </div>
    )
  }
}