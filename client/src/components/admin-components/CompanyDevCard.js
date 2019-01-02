import React, { Component } from 'react';

class CompanyDevCard extends Component {
  render(){
    return (
      <div className="company-main">
        <div>{this.props.value.nameOfCompany}</div>
        <button className="edit" id = {this.props.id}>Edit</button>
        <button className="delete" id = {this.props.id}>Delete</button>
      </div>

    )
  }
}
export default CompanyDevCard;