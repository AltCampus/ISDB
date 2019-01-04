import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CompanyDevCard extends Component {

  render(){
    console.log(this.props.cID);
    return (
      <div className="company-main">
        <div>{this.props.value.nameOfCompany}</div>
        <Link className="edit" id = {this.props.id} to={`/admin/startups/${this.props.cID}/edit`}>Edit</Link>
        <button className="delete" id = {this.props.id}>Delete</button>
      </div>

    )
  }
}



export default CompanyDevCard;