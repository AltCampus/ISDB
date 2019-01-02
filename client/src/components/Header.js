import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

	handleChange = (e) => {
		console.log(e.target.value);
	}

  render() {
    return (
    <header className="primary-header">
			<nav className="primary-nav">
				<ul>
					<li className="list"><a href="#"><h2 className="header-text"><span className="inverse-header">ac</span><span className="header-text-part2">db</span></h2></a></li>
					<div className="header-input-box">
						<i className="fas fa-search"></i>
						<input className="header-search" type="text" name="search" placeholder="search"/>
					</div>
				</ul>
			</nav>
	</header>
    )
  }
}

export default Header;





		