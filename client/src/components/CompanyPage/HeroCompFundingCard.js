import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class Funding extends Component {

  render() {
    const { currentCompany } = this.props;
    return (
      <div className="hero-card">
        <div className="hero-card-header">
          Total Funding
        </div>
        <div className="hero-card-text">
          {currentCompany.funding}
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


export default connect(mapStateToProps)(Funding);