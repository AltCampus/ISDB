import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
    	<footer className="primary-footer">
		<small className="footer-copyright">copyright &copy; all rights reserved | made with <i className="fas fa-heart"></i> by altcampus team. :)</small>
		<div className="social-links-container">
			<h3>follow us:</h3>
			<nav className="social-links-nav">
				<ul className="social-link-list">
					<li className="social-links">
						<a className="" href="#">
							<i className="fab fa-facebook-f"></i>
						</a>
					</li>							
					<li className="social-links">
						<a className="" href="#">
							<i className="fab fa-twitter"></i>
						</a>
					</li>							
					<li className="social-links">
						<a className="" href="#">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</li>
					<li className="social-links">
						<a className="" href="#">
							<i className="fab fa-instagram"></i>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</footer>
    )
  }
}

export default Footer;



	





		