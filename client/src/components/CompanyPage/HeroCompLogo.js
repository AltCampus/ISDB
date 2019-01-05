import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class HeroCompLogo extends Component {

  render() {
    const { currentCompany } = this.props;
    return (
      <div className="hero-logo">
        <div className="back-design"></div>
        <div className="line-design"></div>
        <div className="logo-name">
          <div className="hero-comp__logo-container">
          
            <img id="logo-comp-page" src="https://media.glassdoor.com/sqll/300494/flipkart-com-squarelogo-1433217726546.png" />
          </div>
          <h1 id="name-comp-page" className="hero-comp__name">{currentCompany.nameOfCompany}</h1>
        </div>
        <div className="location-site-link">
          <div className="location"><i className="fas fa-map-marker"></i>{currentCompany.location}</div>
          <div className="website-link"><a href={currentCompany.websiteURL}>{currentCompany.websiteURL}</a></div>
        </div>
      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    return {
      currentCompany: state.currentCompany
    }
  }

export default connect(mapStateToProps)(HeroCompLogo);