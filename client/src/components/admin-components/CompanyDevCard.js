import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editCompanyData } from '../../actions/actionsCreator';

class CompanyDevCard extends Component {
  handleClick = () => {
    this.props.dispatch(editCompanyData(this.props.value._id))
  }
  render(){
    return (
      <div className="company-main">
        <div>{this.props.value.nameOfCompany}</div>
        <Link to={`/startup/${this.props.value._id}`} className="edit" onClick = {this.handleClick}>Edit</Link>
        <button className="delete" id = {this.props.id}>Delete</button>
      </div>

    )
  }
}
export default connect()(CompanyDevCard);