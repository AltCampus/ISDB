import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AdminLogin extends Component {
  render() {
    return (
    	<div>
    		<header className="admin-header"><button>Logout</button></header>
				<div className="login-section">
					<form className="login-form" action="">
						<span>Username:</span>
						<input type="username"/>
						<span>Password:</span>
						<input type="password"/>
						<button type="submit"> Login </button>
					</form>	
				</div>
    	</div>
  	)
  }
}

export default AdminLogin;





		