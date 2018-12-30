import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AdminEdit extends Component {
	render() {
		return (
			<div>
				<div className="main-section">
					<button className="back-button">Back</button>

					<form className="edit-inputs" action="" id="company-edit-form">
						<div>
						<span>Company Name:</span>
						<input type="text"/>
						</div>
						<div>
						<span>Logo:</span>
						<input type="file"/>
						</div>
						<div>
						<span>Website URL:</span>
						<input type="text"/>
						</div>
						<div>
						<span>Overview:</span>
						<textarea rows="4" cols="30" form="company-edit-form">
						</textarea>
						</div>
						<div>
						<span>Location:</span>
						<input type="text"/>
						</div>
						<div>
						<span>Sector:</span>
						<input type="text"/>
						</div>
						<div>
						<span>Year founded:</span>
						<input type="text"/>
						</div>
						<div>
						<span>Funding:</span>
						<input type="text"/>
						</div>
						<div>
						<span>Products:</span>
						<input type="text"/>
						</div>
						<div>
						<span>Rating:</span>
						<input type="text"/>
						</div>

						<input type="submit"/>
					</form>
				</div>
			</div>
			)
		}
	}

	export default AdminEdit;