import React, { Component } from 'react';

class CompanyCard extends Component {
  render(){
    const {nameOfCompany, location, sector} = this.props.value;
    return (
      <div className="small-card">
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
      </div>)
  }
}
export default CompanyCard;