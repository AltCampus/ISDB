import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class Sector extends Component {

  render() {
    const { currentCompany } = this.props;
    return (
      <div className="hero-card">
        <div className="hero-card-header">
          Sector
        </div>
        <div className="hero-card-text">
          {currentCompany.sector}
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


export default connect(mapStateToProps)(Sector);