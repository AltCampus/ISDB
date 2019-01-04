import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { adminPanel } from '../../actions/actionsCreator';

class AdminEdit extends Component {

	constructor(){
		super();
		this.state = {
			nameOfCompany : '',
			websiteURL: "",
			overview: "",
			location: "",
			sector: "",
			yearOfFounded: null,
			funding: null,
			product: "",
			rating: null
		}
	}
	componentWillMount = () => {
		const id = this.props.match.params.id;
		this.props.companies.filter(company => {
			if(company._id === id) {
				this.setState({
					nameOfCompany: company.nameOfCompany,
					websiteURL: company.websiteURL,
					overview: company.overview,
					location: company.location,
					sector: company.sector,
					yearOfFounded: company.yearOfFounded,
					funding: company.funding,
					product: company.product,
					rating: company.rating
				})
			}
		} )
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(adminPanel({
			data: this.state,
			id: this.props.match.params.id

		}));
	}

	render() {
		const { nameOfCompany, websiteURL, overview, location, sector, yearOfFounded, funding, product, rating } = this.state;
		return (
			<div>
				<div className="main-section">
					<button className="back-button">Back</button>

					<form className="edit-inputs" action="" id="company-edit-form" onSubmit={this.handleSubmit}> 
						<div>
						<span>Company Name:</span>
						<input type="text" name="nameOfCompany" value={nameOfCompany} onChange={this.handleChange}/>
						</div>
						<div>
						<span>Website URL:</span>
						<input type="text" name="websiteURL" value={websiteURL} onChange={this.handleChange}/>
						</div>
						<div>
						<span>Overview:</span>
						<textarea rows="4" cols="30" form="company-edit-form" name="overview" value={overview} onChange={this.handleChange}>
						</textarea>
						</div>
						<div>
						<span>Location:</span>
						<input type="text" name="location" value={location} onChange={this.handleChange}/>
						</div>
						<div>
						<span>Sector:</span>
						<input type="text" name="sector" value={sector} onChange={this.handleChange}/>
						</div>
						<div>
						<span>Year founded:</span>
						<input type="text" name="yearOfFounded" value={yearOfFounded} onChange={this.handleChange}/>
						</div>
						<div>
						<span>Funding:</span>
						<input type="text" name="funding" value={funding} onChange={this.handleChange}/>
						</div>
						<div>
						<span>Products:</span>
						<input type="text" name="product" value={product} onChange={this.handleChange}/>
						</div>
						<div>
						<span>Rating:</span>
						<input type="text" name="rating" value={rating} onChange={this.handleChange}/>
						</div>
						<button type="submit">SUBMIT</button>
					</form>
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

	export default connect(mapStateToProps)(AdminEdit);