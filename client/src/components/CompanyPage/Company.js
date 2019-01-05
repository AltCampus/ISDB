import React, { Component, Fragment } from 'react';
import HeroComp from "./HeroComp";
import CompanyRating from "./CompanyRating";
import CompanyFinance from "./CompanyFinance";
import PhotoGallery from "./PhotoGallery";
import { connect } from "react-redux"


class Company extends Component {
  render() {
    return (
      <Fragment>
        <section className="wrapper-c">
          <HeroComp />
        </section>
        {/* <!-- CARD 3 : COMPANY PHOTO GALLERY --> */}
        <PhotoGallery />
        {/* <!-- CARD 4 : COMPANY RATINGS --> */}
        <CompanyRating />
        {/* <!-- CARD 5 : COMPANY FINANCE --> */}
        <CompanyFinance />
      </Fragment>
    );
  }
}

export default Company;
