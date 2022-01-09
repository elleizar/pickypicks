import { Component  } from "react";
import { Link } from 'react-router-dom';
import background from '../images/background.png';
import '../css/Home.css';

export class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1 className="home-header">
          PICKY PICKS
        </h1>
        <h2 className="home-subheader">
          for picky eaters.
        </h2>
        <img src={background} className="home-bg" alt="bg" />
        <p className="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum sem eget molestie lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean felis orci, auctor in faucibus vitae, fringilla nec ex. In non tellus non leo finibus fermentum ut a ipsum. Duis a diam sed ex feugiat fermentum.
        </p>
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