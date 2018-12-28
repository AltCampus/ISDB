import React, {Component,Fragment} from 'react';
import { connect } from 'react-redux';
import { postStartupsDetails } from '../actions/actionsCreator';


class Startup extends Component {
  state = {
   nameOfCompany: "",
    location: "",
    websiteURL:"",
    rating: "",
    yearOfFounded:"",
    funding:"",
    socialLink:"",
    overview:"",
    sector:"",
    product:""
  }

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault();
  this.props.dispatch(postStartupsDetails(this.state))
}
  render() {
    return (
      <Fragment>
        <input type ="text" name="nameOfCompany" placeholder="Name of company" onChange={this.handleChange}/>
        <input type ="text" name="location" placeholder="Location" onChange={this.handleChange}/>
        <input type ="text" name="websiteURL" placeholder="Website url" onChange={this.handleChange}/>
        <input type ="text" name="rating" placeholder="Rating" onChange={this.handleChange}/>
        <input type = "text" name="yearOfFounded" placeholder="Year of founded" onChange={this.handleChange}/>
        <input type ="text" name="funding" placeholder="Funding" onChange={this.handleChange}/>
        <input type ="text" name="socialLink" placeholder="Social link" onChange={this.handleChange}/>
        <input type ="text" name="overview" placeholder="Overview" onChange={this.handleChange}/>
        <input type ="text" name="sector" placeholder="Sector" onChange={this.handleChange}/>
        <input type ="text" name="product" placeholder="Product" onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>submit</button>
      </Fragment>
    )
  }
}
export default connect()(Startup);