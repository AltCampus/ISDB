import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { querySearch } from '../actions/actionsCreator';

class Header extends Component {
	state = {
		query: ''
	}
	handleChange = (e) => {
		this.setState({
			query: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(querySearch(this.state.query))
	}
	
  render() {
    return (
    <header className="primary-header">
			<nav className="primary-nav">
				<ul>
					<li className="list"><a href="#"><h2 className="header-text"><span className="inverse-header">ac</span><span className="header-text-part2">db</span></h2></a></li>
					<form className="header-input-box" onSubmit={this.handleSubmit}>
						<i className="fas fa-search"></i>
						<input className="header-search" type="text" name="search" placeholder="search" onChange={this.handleChange} />
					</form>
				</ul>
			</nav>
	</header>
    )
  }
}

export default connect()(Header);





		