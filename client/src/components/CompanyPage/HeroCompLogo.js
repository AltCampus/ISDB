import React, { Component, Fragment } from 'react';


class HeroCompLogo extends Component {

  render() {

    return (
      <div className="hero-logo">
        <div className="back-design"></div>
        <div className="line-design"></div>
        <div className="logo-name">
          <div className="hero-comp__logo-container">
          
            <img id="logo-comp-page" src="https://media.glassdoor.com/sqll/300494/flipkart-com-squarelogo-1433217726546.png" />
          </div>
          <h1 id="name-comp-page" className="hero-comp__name">Flipkart Private Limited</h1>
        </div>
        <div className="location-site-link">
          <div className="location"><i className="fas fa-map-marker"></i>Bangalore</div>
          <div className="website-link"><a href="https://www.flipkart.com">www.flipkart.com</a></div>
        </div>
      </div>
    );
  }
}
export default HeroCompLogo;