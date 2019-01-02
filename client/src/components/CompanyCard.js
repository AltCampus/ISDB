import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CompanyCard extends Component {
  render(){
    const {nameOfCompany, location, sector} = this.props.value;
    return (
      <Link to={`/startups/${nameOfCompany}`} className="small-card">
        <img id="logo" src={require("./../media/zomato.png")}/>
        <div className="right">
          <h2 is="title" >{nameOfCompany}</h2>
          <div id="details" className="details">
            <span>
            <i className="fas fa-map-marker-alt"></i>
            {location}
            </span>
            <span>{sector}</span>
          </div>
        </div>
      </Link>)
  }
}
export default CompanyCard;