import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CompanyDevCard from './CompanyDevCard';
import { getAllCompanyData } from '../../actions/actionsCreator';


class AdminHome extends Component {
	
	componentWillMount = () => {
		this.props.dispatch(getAllCompanyData())
		// fetch('http://192.168.0.102:8001/api/v1/startups')
		// .then(res => res.json())
		// .then(data => this.setState({
		// 	companies: data
		// }))
		fetch('http://192.168.0.102:8001/api/v1/startups')
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
							this.props.companies.map((value, index) => {
								return <CompanyDevCard id = {index} value = {value} key = {index} cID={value._id} />
							})
						}	

						
					<div className="company-add">
						<button className="company-add-button">Add</button>
					</div>
				</div>
    	</div>
  	)
  }
}

const mapStateToProps = (state) => {
	return {
		companies: state.companies
	}
}

export default connect(mapStateToProps)(AdminHome);