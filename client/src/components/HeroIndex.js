import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllCompanyData } from '../actions/actionsCreator';
import rootReducer from '../reducers';
import CompanyCard from './CompanyCard';

let mapStateToProps = state => {
	return state;
}
class HeroIndex extends Component {
	componentWillMount = () => {
		this.props.dispatch(getAllCompanyData())
	}


  render() {
    return (
    	<section className="hero">
				<div className="wrapper">
					<div className="hero-input-box">
						<input className="hero-search" type="text" name="search-box" placeholder="search"/>
						<i className="fas fa-search"></i>
					</div>
					<section className="card-sec">

						{
							this.props.companies.map((value, index) => {
								return <CompanyCard value = {value} key = {index} />
							})
						}

						<div className="small-card">
							<h2 className="title placeholder" >More...</h2>
						</div>
					</section>
				</div>
			</section>
    )
  }
}

export default connect(
	mapStateToProps
)(HeroIndex);


