import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AdminLogin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		})
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
		fetch(`http://192.168.0.102:8001/api/v1/login`, {
			method : 'POST',
			
			headers : {
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify(this.state)
		})
			.then(res => res.json())
			.then(data => {
				if (data.redirectTo) {
					this.props.history.push('/admin')
				}
			})
	}
	
  render() {
    return (
		<div>
			<header className="admin-header">
				<button>Logout</button>
			</header>
			<div className="login-section">
				<form className="login-form" action="" onSubmit={this.handleSubmit}>
					<span>Username:</span>
					<input 
					type="username" name="username"
					onChange={this.handleChange}/>
					<span>Password:</span>
					<input 
					type="password" name="password"
					onChange={this.handleChange}/>
					<button type="submit"> Login </button>
				</form>	
			</div>
		</div>
  	)
  }
}

export default AdminLogin;





		