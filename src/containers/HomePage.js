import { Component } from "react";
import { Link } from 'react-router-dom';
import background from '../images/background.png';
import background2 from '../images/background2.png';
import logo from '../images/favicon.ico';
import '../css/Home.css';

export const HomePage = () => {
  const bg = [background, background2];
  const rand = Math.floor(Math.random() * (bg.length - 0));

  return (
    <div className="HomePage" style={{
      backgroundImage: `url(${bg[rand]})`,
      backgroundPosition: 'right',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="home-header-container">
        <img src={logo} className="home-logo" alt="bg" />
        <div className="home-text">
          <h1 className="home-header">
            PICKY PICKS
          </h1>
          <h2 className="home-subheader">
            for picky eaters
          </h2>
        </div>
      </div>
      <p className="body-text">
        Have ingredients that you love but don't know what to make of them? Your options will now be limited to 3.
      </p>
      <br />
      <Link to='/recipes'>
        <button
          className="getButton">
          Get Recipes!
        </button>
      </Link>
    </div>
  )
}