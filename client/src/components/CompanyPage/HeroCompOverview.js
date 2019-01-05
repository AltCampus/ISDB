import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class Overview extends Component {

  render() {
    const { currentCompany } = this.props; 
    return (
      <div className="hero-card overview-card">
        <div className="hero-card-header">
          Overview:
        </div>
        <div className="hero-card-text overview-text">
          {currentCompany.overview}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentCompany: state.currentCompany
  }
}


export default connect(mapStateToProps)(Overview);