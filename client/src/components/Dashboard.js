import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux';

class Dashboard extends Component {

  state = {
    todo: ''
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to='./about'>About-component</Link>
        <Link to='./contact'>Contact-component</Link>
      </div>
    )
  }
}

export default Dashboard;
