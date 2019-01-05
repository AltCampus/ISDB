import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class Founded extends Component {

  render() {
    const { currentCompany } = this.props;
    return (
      <div className="hero-card">
        <div className="hero-card-header">
          Year Founded
        </div>
        <div className="hero-card-text">
          {currentCompany.yearOfFounded}
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


export default connect(mapStateToProps)(Founded);

