import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class Products extends Component {

  render() {
    const { currentCompany } = this.props;
    return (
      <div className="hero-card">
        <div className="hero-card-header">
          Products
        </div>
        <div className="hero-card-text">
          {currentCompany.product}
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


export default connect(mapStateToProps)(Products);