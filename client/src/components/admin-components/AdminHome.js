import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import companyDevCard from './CompanyDevCard';

let mapStateToProps = state => {
	return state;
}
class AdminHome extends Component {
	constructor(props) {
		super(props);
		this.state = {
			companies: []
		}
	}
	
	componentWillMount = () => {
		fetch('http://192.168.0.122:8001/api/v1/startups')
		.then(res => res.json())
		.then(data => this.setState({
			companies: data
		}))
	}
  render() {
    return (
    	<div>
 				<header className="admin-header"><button>Logout</button></header>
				<div className="main-section">

						{
							this.state.companies.map((value, index) => {
								return <companyDevCard id = {index} value = {value} key = {index} />
							})
						}	

					<div className="company-main">
						<div>Flipkart</div><button className="edit">Edit</button><button className="delete">Delete</button>
					</div>
					<div className="company-main">
						<div>Flipkart</div><button className="edit">Edit</button><button className="delete">Delete</button>
					</div>
					<div className="company-main">
						<div>Flipkart</div><button className="edit">Edit</button><button className="delete">Delete</button>
					</div>
					<div className="company-main">
						<div>Flipkart</div><button className="edit">Edit</button><button className="delete">Delete</button>
					</div>
					<div className="company-add">
						<button className="company-add-button">Add</button>
					</div>
				</div>
    	</div>
  	)
  }
}

export default connect(
	mapStateToProps
)(AdminHome);