import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AdminHome extends Component {
  render() {
    return (
    	<div>
 				<header className="admin-header"><button>Logout</button></header>
				<div className="main-section">
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

export default AdminHome;